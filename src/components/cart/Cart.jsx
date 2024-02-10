import React  from 'react'
import ItemCart from './ItemCart'
import { Button, Divider } from '@mui/material';
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
    <div className="w-96 absolute top-full right-0 bg-gray-300 p-2 z-40  ">
      <h4 className="py-5 font-semibold text-xl text-slate-500">
        Products in your cart
      </h4>
      {products?.map((item) => (
        <ItemCart item={item} key={item.id} />
      ))}
      <Divider orientation="horizontal" variant="fullWidth" />
      <div className="flex justify-between items-center my-2">
        <p className="font-semibold text-xl">SUBTOTAL</p>
        <p className="font-semibold text-lg">{totalPrice().toFixed(2)}</p>
      </div>

      <Button color="primary" variant="contained">
        PRODUCT IN CHEKOUT
      </Button>
      <Button
        sx={{ display: "block", my: "8px" }}
        variant="text"
        color='error'
        // disabled={products.length >= 1 ? false : true }
        disabled={Boolean(!products.length)  }
        onClick={() => dispatch(resetCart())}
      >
        clear cart
      </Button>
    </div>
  );
}

export default Cart
