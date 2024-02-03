/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Card from '../card/Card';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from '../../Store/product/productSlice';


const Featurproduct = ({type}) => {


  const { records } = useSelector((state) => state.product);
  const dispatch = useDispatch();

    useEffect(()=> {
      
      dispatch(getProducts(type));
      console.log(records);
    },[])
    

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
            records?.map((item) => (
                <Card item={item} key={item.id} />
            ))
        }
      </div>
    </div>
  );
}

export default Featurproduct
