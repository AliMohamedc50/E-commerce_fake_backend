/* eslint-disable no-unused-vars */
import { Box, Button, useMediaQuery } from "@mui/material";
import Stack from "@mui/material/Stack";

import React from "react";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";

const Categories = () => {

    const matches = useMediaQuery("(max-width:900px)");

  return (
    <Box
      sx={{ height: "500px", position: "relative", overflow: "hidden" }}
      className="categories"
    >
      <Stack
        direction="row"
        sx={{ height: "100%" }}
      >
        <Swiper
          style={{ height: "100%" }}
          slidesPerView={matches ? 1 : 2}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
        
          <SwiperSlide style={{ height: "90%" }}>
            <Box sx={{ flex: 1, height: "100%" }} className="container-left">
              <Box
                className="item1 bg-neutral-950"
                sx={{ overflow: "hidden", position: "relative" }}
              >
                <Link to={`/products/9`}>
                  <Button
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                      bgcolor: "#101323ba",
                    }}
                    variant="outlined"
                  >
                    SAFE
                  </Button>
                </Link>
                <img
                  classNameName="img"
                  src="https://images.pexels.com/photos/19421136/pexels-photo-19421136/free-photo-of-young-woman-sitting-in-the-driveway-leaning-against-a-car.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt=""
                />
              </Box>
              <Box
                className="item2 bg-teal-400"
                sx={{ overflow: "hidden", position: "relative" }}
              >
                <Link to={`/products/1`}>
                  <Button
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                      bgcolor: "#101323ba",
                    }}
                    variant="outlined"
                  >
                    WOMEN
                  </Button>
                </Link>
                <img
                  classNameName=""
                  src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </Box>
              <Box
                className="y bg-yellow-700"
                sx={{ overflow: "hidden", position: "relative" }}
              >
                <Link to={`/products/7`}>
                  <Button
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                      bgcolor: "#101323ba",
                    }}
                    variant="outlined"
                  >
                    NEW SEASION
                  </Button>
                </Link>
                <img
                  className=" "
                  src="https://images.pexels.com/photos/2779316/pexels-photo-2779316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide style={{ height: "90%" }}>
            <Box sx={{ flex: 1, height: "100%" }} className="container-right">
              <Box
                className="item3 bg-cyan-600 "
                sx={{ overflow: "hidden", position: "relative" }}
              >
                <Link to={`/products/2`}>
                  <Button
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                      bgcolor: "#101323ba",
                    }}
                    variant="outlined"
                  >
                    MEN
                  </Button>
                </Link>
                <img
                  src="https://images.pexels.com/photos/18946642/pexels-photo-18946642/free-photo-of-nike-air-max-1-97-sean-wotherspoon-shoe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </Box>
              <Box
                className="item4 bg-sky-200 "
                sx={{ overflow: "hidden", position: "relative" }}
              >
                <Link to={`/products/8`}>
                  <Button
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                      bgcolor: "#101323ba",
                    }}
                    variant="outlined"
                  >
                    ACCESSORIES
                  </Button>
                </Link>
                <img
                  src="https://images.pexels.com/photos/9558898/pexels-photo-9558898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </Box>
              <Box
                className="x bg-neutral-500 "
                sx={{ overflow: "hidden", position: "relative" }}
              >
                <Link to={`/products/5`}>
                  <Button
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                      bgcolor: "#101323ba",
                    }}
                    variant="outlined"
                  >
                    SHOES
                  </Button>
                </Link>
                <img
                  src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Stack>
    </Box>
  );
};

export default Categories;


//  src ="https://images.pexels.com/photos/2779316/pexels-photo-2779316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
//  src ="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
//  src ="https://images.pexels.com/photos/19421136/pexels-photo-19421136/free-photo-of-young-woman-sitting-in-the-driveway-leaning-against-a-car.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";