/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
const Product = () => {
      const upload_url = "http://localhost:1337";

  const id = useParams().id
  const { data, loading, errorr } = useFetch(`/products/${id}?populate=*`);
  const [selectImg, setSelectImg] = useState("img")
  const [quantity, setQuantity] = useState(1)

console.log(selectImg);
  return (
    <div className="product relative top-28 w-10/12 flex gap-10 flex-1 m-auto">
      <div className="left flex flex-1 gap-4">
        <div className="left  flex flex-col	gap-3 ">
          <img
            src={upload_url + data?.attributes?.img?.data?.attributes?.url}
            className="w-32 cursor-pointer object-cover h-36"
            alt=""
            onClick={() => setSelectImg("img")}
          />
          <img
            src={upload_url + data?.attributes?.img2?.data?.attributes?.url}
            className="w-32 cursor-pointer object-cover h-36"
            alt=""
            onClick={() => setSelectImg("img2")}
          />
        </div>
        <Box sx={{height: "80vh", overflow: "hidden"}} className="right w-full ">
          <img className='w-full h-full object-cover' src={upload_url + data?.attributes?.[selectImg]?.data?.attributes?.url} alt="" />
        </Box>
      </div>
      <div className="right flex-1 ">
        <Typography className="title" variant="h3" color="initial">
          {/* {data[1].title} */}uiui
        </Typography>
        {/* <h3 className="text-blue-500 text-2xl my-5">${data[1].price}</h3> */}
        uiyuiy
        <Typography className="title" variant="p" color="initial">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          non quae exercitationem provident sequi, consequuntur reiciendis
          voluptates quidem, assumenda quasi voluptatem vitae eius praesentium
          nisi quibusdam corrupti corporis. Error, nesciunt.
        </Typography>
        <div className="flex mt-4 mb-8">
          <Button
            variant="contained"
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </Button>
          <p className="py-2 px-5 bg-slate-200">{quantity}</p>
          <Button
            variant="contained"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </Button>
        </div>
        <Button
          sx={{ width: 220 }}
          variant="contained"
          startIcon={<AddShoppingCartIcon />}
        >
          ADD TO CART
        </Button>
        <div className="my-3 flex gap-3">
          <Button
            sx={{ width: 200 }}
            variant="outlined"
            startIcon={<FavoriteBorderIcon />}
          >
            ADD TO WISH LIST
          </Button>
          <Button
            sx={{ width: 200 }}
            variant="outlined"
            startIcon={<BalanceIcon />}
          >
            ADD TO COMPARE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Product
