/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories overflow-hidden">
      <div className="item1 bg-slate-700 overflow-hidden relative">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/19421136/pexels-photo-19421136/free-photo-of-young-woman-sitting-in-the-driveway-leaning-against-a-car.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <button
          style={{ transform: "translate(-50%, -50%)" }}
          className="absolute top-1/2 left-1/2  bg-slate-100 py-2 px-4 "
        >
          <Link to={"/products/1"}> SALE</Link>
        </button>
      </div>
      <div className="item2 relative bg-lime-700 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />

        <button
          style={{ transform: "translate(-50%, -50%)" }}
          className="absolute top-1/2 left-1/2  bg-slate-100 py-2 px-4"
        >
          <Link to={"/products/1"}> WOMEN</Link>
        </button>
      </div>
      <div className="y  overflow-hidden relative">
        <img
          className="w-full h-full object-cover "
          src="https://images.pexels.com/photos/2779316/pexels-photo-2779316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <button
          style={{ transform: "translate(-50%, -50%)" }}
          className="absolute top-1/2 left-1/2  bg-slate-100 py-2 px-4"
        >
          <Link to={"/products/1"}> NEW SEASON</Link>
        </button>
      </div>
      <div className="item4 relative">
        <img
          className="w-full h-full object-cover relative"
          src="https://images.pexels.com/photos/18946642/pexels-photo-18946642/free-photo-of-nike-air-max-1-97-sean-wotherspoon-shoe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <button
          style={{ transform: "translate(-50%, -50%)" }}
          className="absolute top-1/2 left-1/2  bg-slate-100 py-2 px-4"
        >
          <Link to={"/products/1"}> SHOES</Link>
        </button>
      </div>
      <div className="item3 relative">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/9558898/pexels-photo-9558898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <button
          style={{ transform: "translate(-50%, -50%)" }}
          className="absolute top-1/2 left-1/2  bg-slate-100 py-2 px-4"
        >
          <Link to={"/products/1"}> MEN</Link>
        </button>
      </div>
      <div className="x overflow-hidden relative">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <button
          style={{ transform: "translate(-50%, -50%)" }}
          className="absolute top-1/2 left-1/2  bg-slate-100 py-2 px-4"
        >
          <Link to={"/products/1"}> Sale</Link>
        </button>
      </div>
    </div>
  );
};

export default Categories;


                // src ="https://images.pexels.com/photos/2779316/pexels-photo-2779316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
                // src ="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
                // src ="https://images.pexels.com/photos/19421136/pexels-photo-19421136/free-photo-of-young-woman-sitting-in-the-driveway-leaning-against-a-car.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";



