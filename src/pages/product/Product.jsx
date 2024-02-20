/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import {addToCart} from "../../Store/product/productSlice"
import CustomizedSnackbars from '../../components/alert/Alert';

const Product = () => {
          const upload_url = "http://localhost:1337";

          const childRef = useRef(null);

          const [alertText, setAlertText] = useState(null);

  const id = useParams().id
  const { data, loading, errorr } = useFetch(`/products/${id}?populate=*`);
  const [selectImg, setSelectImg] = useState("img")
  const [quantity, setQuantity] = useState(1)
const dispatch = useDispatch()

const handelShoppingCart  = () => {
 dispatch(
              addToCart({
                id: data.id,
                title: data.attributes.title,
                desc: data.attributes.desc,
                price: data.attributes.price,
                img: data.attributes.img.data.attributes.url,
                quantity,
              })
              );
              // handleClick();
    childRef.current.handleClick();
    setAlertText("You have added the product to the cart");
}


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
        <Box
          sx={{ height: "80vh", overflow: "hidden" }}
          className="right w-full "
        >
          <img
            className="w-full h-full object-cover"
            src={
              upload_url + data?.attributes?.[selectImg]?.data?.attributes?.url
            }
            alt=""
          />
        </Box>
      </div>
      <div className="right flex-1 ">
        <Typography className="title" variant="h3" color="initial">
          {data?.attributes?.title}
        </Typography>
        <h3 className="text-blue-500 text-2xl my-5">
          {data?.attributes?.price}
        </h3>
        <Typography className="title" variant="p" color="initial">
          {data?.attributes?.desc}
        </Typography>
        <div className="flex mt-4 mb-8">
          <Button
            variant="contained"
            disabled={loading ? true : false}
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </Button>
          <p className="py-2 px-5 bg-slate-200">{quantity}</p>
          <Button
            disabled={loading ? true : false}
            variant="contained"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </Button>
        </div>
        <Button
          sx={{ width: 220 }}
          onClick={() => handelShoppingCart()}
          disabled={loading ? true : false}
          variant="contained"
          startIcon={<AddShoppingCartIcon />}
        >
          ADD TO CART
        </Button>
        <CustomizedSnackbars ref={childRef} alertText={alertText} />

        {/* alert for add product in cart */}
        {/* <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            This is a success Alert inside a Snackbar!
          </Alert>
        </Snackbar> */}

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
            {/* {open && console.log(<testcall />)} */}
            {/* {open && <Testcall />} */}
            {/* {open && "grdrgdrrrrrrrrrrrrrrrgg"} */}
            {/* <testcall /> */}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Product
