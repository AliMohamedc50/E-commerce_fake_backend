import React  from 'react'
import ItemCart from './ItemCart'
import { Button } from '@mui/material';

const Cart = () => {
   const data = [
     {
       id: 1,
       img: "https://images.pexels.com/photos/18553528/pexels-photo-18553528/free-photo-of-man-with-a-stubble-standing-with-his-arm-reached-out.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       img2: "https://images.pexels.com/photos/18553532/pexels-photo-18553532/free-photo-of-man-with-a-stubble-sitting-at-the-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       title: "Lorem ipsum dolor sit.",
       isnew: false,
       pieces: 2, 
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aperiam maiores illo sit est necessitatibus perspiciatis id dolore eligendi porro iusto laudantium ab, incidunt odio cupiditate mollitia fuga exercitationem cumque?",
       oldprice: "19",
       price: "12",
     },
     {
       id: 2,
       img: "https://images.pexels.com/photos/18553528/pexels-photo-18553528/free-photo-of-man-with-a-stubble-standing-with-his-arm-reached-out.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       img2: "https://images.pexels.com/photos/18553532/pexels-photo-18553532/free-photo-of-man-with-a-stubble-sitting-at-the-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       title: "Lorem ipsum dolor sit.",
       isnew: false,
       pieces: 2, 
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aperiam maiores illo sit est necessitatibus perspiciatis id dolore eligendi porro iusto laudantium ab, incidunt odio cupiditate mollitia fuga exercitationem cumque?",
       oldprice: "19",
       price: "12",
     },
     {
       id: 3,
       img: "https://images.pexels.com/photos/18553528/pexels-photo-18553528/free-photo-of-man-with-a-stubble-standing-with-his-arm-reached-out.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       img2: "https://images.pexels.com/photos/18553532/pexels-photo-18553532/free-photo-of-man-with-a-stubble-sitting-at-the-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       title: "Lorem ipsum dolor sit.",
       isnew: false,
       pieces: 2, 
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aperiam maiores illo sit est necessitatibus perspiciatis id dolore eligendi porro iusto laudantium ab, incidunt odio cupiditate mollitia fuga exercitationem cumque?",
       oldprice: "19",
       price: "12",
     },
     {
       id: 4,
       img: "https://images.pexels.com/photos/18553528/pexels-photo-18553528/free-photo-of-man-with-a-stubble-standing-with-his-arm-reached-out.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       img2: "https://images.pexels.com/photos/18553532/pexels-photo-18553532/free-photo-of-man-with-a-stubble-sitting-at-the-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       title: "Lorem ipsum dolor sit.",
       isnew: false,
       pieces: 2, 
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aperiam maiores illo sit est necessitatibus perspiciatis id dolore eligendi porro iusto laudantium ab, incidunt odio cupiditate mollitia fuga exercitationem cumque?",
       oldprice: "19",
       price: "12",
     },
   ];
  return (
    <div className="w-96 absolute top-full right-0 bg-gray-300 p-2 z-40  ">
      <h4 className="py-5 font-semibold text-xl text-slate-500">
        Products in your cart
      </h4>
      {data?.map((item) => (
        <ItemCart item={item} key={item.id} />
      ))}
      <div className="flex justify-between items-center my-2">
        <p className="font-semibold text-xl">SUBTOTAL</p>
        <p className="font-semibold text-lg">$50</p>
      </div>
      <Button color="primary" variant="contained">
        PRODUCT IN CHEKOUT
      </Button>
      <p className='my-2 text-red-700 font-medium'>clear cart</p>
    </div>
  );
}

export default Cart
