import React  from 'react'
import ItemCart from './ItemCart'
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { resetCart } from "../../Store/product/productSlice";

const Cart = () => {
   
  const { products } = useSelector((state) => state.cartSlice);
    const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0 ;
    products.forEach(element => {
      total += element.quantity * element.price;
    });
    return total;
  };
  return (
    <Box
      sx={{
        width: "384px",
        position: "absolute",
        top: "100%",
        right: "0",
        p: "8px",
        zIndex: "40",
        bgcolor: "#b5cad6",
      }}
    >
      <Typography
        variant="h4"
        color="initial"
        sx={{
          py: "10px",
          fontWeight: "600",
          fontSize: "20px",
          color: "#004f9578",
        }}
      >
        Products in your cart
      </Typography>
      {products?.map((item) => (
        <ItemCart item={item} key={item.id} />
      ))}
      <Divider orientation="horizontal" variant="fullWidth" />
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{my:"8px"}}>
        <Typography variant="body1" color="initial" sx={{fontWeight:"600", fontSize:"20px"}}>SUBTOTAL</Typography>
        <Typography variant="body1" color="initial" sx={{fontWeight:"600", fontSize:"18px"}}>{totalPrice().toFixed(2)}</Typography>
      </Stack>

      <Button color="primary" variant="contained">
        PRODUCT IN CHEKOUT
      </Button>
      <Button
        sx={{ display: "block", my: "8px" }}
        variant="text"
        color="error"
        // disabled={products.length >= 1 ? false : true }
        disabled={Boolean(!products.length)}
        onClick={() => dispatch(resetCart())}
      >
        clear cart
      </Button>
    </Box>
  );
}

export default Cart
