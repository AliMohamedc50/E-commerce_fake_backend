/* eslint-disable no-unused-vars */
import React from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom';

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));


const Navbar = () => {
  return (
    <div className="navbar h-20  ">
      <div className="wrapper flex justify-between py-2 px-7 ">
        <div className="left flex items-center gap-6">
          <div className="item flex items-center">
            <img
              style={{ width: "22px" }}
              src="/public/img/Palestine_Large_Flag.png"
            />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item flex items-center">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link to="/product/2">Men</Link>
          </div>
          <div className="item">
            <Link to="/products/3">Children</Link>
          </div>
        </div>

        <div className="center">
            <Link className='text-3xl ' to="/">LAMOSTORE</Link>
        </div>

        <div className="right flex items-center gap-6">
          <div className="center">
            <Link to="/">HomePage</Link>
          </div>
          <div className="center">
            <Link to="/">About</Link>
          </div>
          <div className="center">
            <Link to="/">Contact</Link>
          </div>
          <div className="center">
            <Link to="/">Stores</Link>
          </div>
          <div className="iocns">
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <PersonOutlineOutlinedIcon />
            </IconButton>
            <IconButton>
              <FavoriteBorderOutlinedIcon />
            </IconButton>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
