/* eslint-disable no-unused-vars */
import React, { useState,  } from 'react'
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import IconButton from '@mui/material/IconButton'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useMediaQuery } from '@mui/material';

const Slider = () => {
  
    const data = [
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];
    console.log(useMediaQuery("(min-width:600px)"));
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >

      {data?.map((item, i) => (
        <SwiperSlide key={item}>
          <img  src={data[i]} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider

