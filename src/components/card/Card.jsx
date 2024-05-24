/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Rating, Stack, Typography, useMediaQuery } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
    const upload_url = "http://localhost:1337"
    const value = 4.5;
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Link to={`/product/${item.id}`}>
      <Box
        className="product-box"
        sx={{
          position: "relative",
          textAlign: "start",
          width: {sm: "260px", md : "250px"},
          height: {xs:"270px", sm:"350px"} ,
          padding: "6px",
          bgcolor: "#f3e5f5",
          overflow: "hidden",
        }}
      >
        {item?.attributes?.isnew && <span className="label">New Season</span>}
        <img
          style={{ width: "100%", height: "70%", objectFit: "cover" }}
          src={upload_url + item?.attributes?.img?.data?.attributes?.url}
        />
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
          {
            matches && 
          <Rating
          name="half-rating-read"
          defaultValue={value}
          precision={0.5}
          readOnly
          />
        }
        </Stack>
      </Box>
    </Link>
  );
}

export default Card