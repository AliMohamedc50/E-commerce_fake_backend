/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const Product = () => {

  const [selectImg, setSelectImg] = useState(0)
  const [quantity, setQuantity] = useState(1)

 const data = [
   {
     id: 1,
     img: "https://images.pexels.com/photos/18553528/pexels-photo-18553528/free-photo-of-man-with-a-stubble-standing-with-his-arm-reached-out.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     img2: "https://images.pexels.com/photos/18553532/pexels-photo-18553532/free-photo-of-man-with-a-stubble-sitting-at-the-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     title: "for test",
     isnew: false,
     oldprice: "19",
     price: "12",
   },
   {
     id: 2,
     img: "https://images.pexels.com/photos/15952334/pexels-photo-15952334/free-photo-of-young-man-with-dyed-platinum-hair-in-a-beige-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     img2: "https://images.pexels.com/photos/15952331/pexels-photo-15952331/free-photo-of-young-man-with-dyed-platinum-hair-in-a-beige-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     title: "for test",
     isnew: true,
     oldprice: "19",
     price: "12",
   },
   {
     id: 3,
     img: "https://images.pexels.com/photos/1188748/pexels-photo-1188748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     img2: "https://images.pexels.com/photos/11569311/pexels-photo-11569311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     title: "for test",
     isnew: false,
     oldprice: "19",
     price: "12",
   },
   {
     id: 4,
     img: "https://images.pexels.com/photos/12730638/pexels-photo-12730638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     img2: "https://images.pexels.com/photos/16060730/pexels-photo-16060730/free-photo-of-man-wearing-a-casual-trendy-outfit-and-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     title: "for test",
     isnew: true,
     oldprice: "19",
     price: "12",
   },
 ];
  return (
    <div className="product flex gap-10 flex-1 m-auto">
      <div className="left flex gap-4">
        <div className="left  flex flex-col	gap-3 ">
          <img
            src={data[0].img}
            className="w-32 cursor-pointer object-cover h-36"
            alt=""
            onClick={() => setSelectImg(0)}
          />
          <img
            src={data[1].img}
            className="w-32 cursor-pointer object-cover h-36"
            alt=""
            onClick={() => setSelectImg(1)}
          />
        </div>
        <div className="right">
          <img src={data[selectImg].img} alt="" />
        </div>
      </div>
      <div className="right flex-1 max-w-lg">
        <Typography className="title" variant="h3" color="initial">
          {data[1].title}
        </Typography>
        <h3 className='text-blue-500 text-2xl my-5'>
          ${data[1].price}
        </h3>
        
        <Typography className="title" variant="p" color="initial">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          non quae exercitationem provident sequi, consequuntur reiciendis
          voluptates quidem, assumenda quasi voluptatem vitae eius praesentium
          nisi quibusdam corrupti corporis. Error, nesciunt.
        </Typography>
        <div className="flex my-5">
          <Button variant="contained"  onClick={() => setQuantity((prev => prev === 1 ? 1 : prev - 1) )}>-</Button>
          <p className="py-2 px-5 bg-slate-200">{quantity}</p>
          <Button variant="contained"  onClick={() => setQuantity((prev => prev + 1) )}>+</Button>
        </div>
        <Button sx={{width: 300}} variant="contained" startIcon={<AddShoppingCartIcon />}>
          ADD TO CART
        </Button>
      </div>
    </div>
  );
}

export default Product
