/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '../card/Card';

const Featurproduct = ({type}) => {
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
    <div className="my-24 mx-48">
      <div className="top flex justify-center items-center mb-12">
        <h1 style={{ flex: "2" }} className="text-3xl ">
          {type} Product
        </h1>
        <p style={{ flex: "2" }} className="text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          sapiente quae maxime optio et fugit illum hic at officiis deserunt
          autem, aliquid debitis. Impedit cum ex quo eos alias ut.
        </p>
      </div>
      <div className="bottom flex justify-center gap-12">
        {
            data.map((item) => (
                <Card item={item} key={item.id} />
            ))
        }
      </div>
    </div>
  );
}

export default Featurproduct
