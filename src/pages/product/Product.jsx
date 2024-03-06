/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button, Stack } from '@mui/material'
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
    childRef.current.handleClick();
    setAlertText("You have added the product to the cart");
}


  return (
    <Stack
      direction={{ xs: "column-reverse", sm: "row", md: "row" }}
      alignItems="center"
      sx={{ px: {xs: "30px", sm: "10px",md :" 80px"}, py:"80px", width: "100%%", display: "flex", gap: {xs: "10px", md: "40px"}, m: "auto" }}
      className="product"
    >
      <Box sx={{ display: "flex", width: {xs :"310px"}, flex: "1", gap: "16px" }} className="left">
        <Stack direction="column" spacing={6} className="left">
          <img
            src={upload_url + data?.attributes?.img?.data?.attributes?.url}
            style={{
              Width: "128px",
              cursor: "pointer",
              objectFit: "cover",
              height: "144px",
            }}
            alt=""
            onClick={() => setSelectImg("img")}
          />
          <img
            src={upload_url + data?.attributes?.img2?.data?.attributes?.url}
            style={{
              Width: "128px",
              cursor: "pointer",
              objectFit: "cover",
              height: "144px",
            }}
            alt=""
            onClick={() => setSelectImg("img2")}
          />
        </Stack>
        <Box
          sx={{
            height: "80vh",
            width: { sm: "290px", md: "333px", lg: "444px" },
            overflow: "hidden",
          }}
          className="right"
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={
              upload_url + data?.attributes?.[selectImg]?.data?.attributes?.url
            }
            alt=""
          />
        </Box>
      </Box>
      <Box sx={{ flex: "1", width: {xs :"320px"}, p: {xs : "0 20px"} }} className="right">
        <Typography className="title" variant="h3" color="initial">
          {data?.attributes?.title}
        </Typography>

        <Typography
          variant="h3"
          color="initial"
          sx={{ color: "#2196f3", fontSize: "24px", marginY: "20px" }}
        >
          {data?.attributes?.price}
        </Typography>

        <Typography className="title" variant="p" color="initial">
          {data?.attributes?.desc}
        </Typography>
        <Box sx={{ display: "flex", mt: "16px", mb: "32px" }}>
          <Button
            variant="contained"
            disabled={loading ? true : false}
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </Button>
          <Typography
            variant="p"
            color="initial"
            sx={{ bgcolor: "#cfd8dc", paddingX: "20px", paddingY: "8px" }}
          >
            {quantity}
          </Typography>
          <Button
            disabled={loading ? true : false}
            variant="contained"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </Button>
        </Box>
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
        <Box sx={{ my: "12px", display: "flex", gap: "12px" }}>
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
        </Box>
      </Box>
    </Stack>
  );
}

export default Product
