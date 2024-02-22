/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Rating, Stack, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom'



const Card = ({item}) => {
    const upload_url = "http://localhost:1337"
    const value = 4.5;
    // console.log(item.attributes);

  return (
    <Link to={`/product/${item.id}`}>
      <Box
        className="product-box"
        sx={{
          position: "relative",
          textAlign: "start",
          width: {sm: "260px", md : "250px"},
          height: "380px",
          padding: "6px",
          bgcolor: "#f3e5f5",
          overflow: "hidden",
        }}
      >
        {item?.attributes?.isnew && <span sx className="label">New Season</span>}
        <img
          style={{ width: "100%", height: "75%", objectFit: "cover" }}
          src={upload_url + item?.attributes?.img?.data?.attributes?.url}
        />
        {/* {conter(5)} */}
        {/* <h2> */}
        <Stack sx={{ mt: "7px" }}>
          <Typography sx={{ fontSize: "17px" }} variant="h6" color="initial">
            {item.attributes.title}
          </Typography>
          <Typography
            sx={{ color: "#0d47a1", fontWeight: 600, ml: "5px" }}
            variant="h6"
            color="initial"
          >
            ${item.attributes.price}
          </Typography>
          <Rating
            name="half-rating-read"
            defaultValue={value}
            precision={0.5}
            readOnly
          />
        </Stack>
      </Box>
    </Link>
  );
}

export default Card

        // <div className='relative'>
        //     {
        //         item?.attributes.isnew ? <span className='absolute top-1 left-1 z-30 bg-gray-600 text-white px-1 rounded'>New Season</span> : null
        //     }
        
        //     <div className="image relative w-52 h-72">
        //         <img className='mainimg absolute w-full h-full bject-cover' src={upload_url  + item?.attributes.img.data.attributes.url} alt="" />
        //         <img className='secondimg absolute w-full h-full bject-cover' src={upload_url  + item?.attributes.img2.data.attributes.url} alt="" />
        //     </div>
        //     <h1 className='text-2xl'>{item.attributes.title}</h1>
        //     <div className="price flex gap-2">
        //         {/* <var> <del className='text-gray-500'>{item.oldprice}</del> </var> */}
        //         <p className='text-lg'>{item?.attributesprice}</p>
        //     </div>
        // </div>