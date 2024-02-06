/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom';

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from '../cart/Cart';


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));


export const Navbar = () => {
  const [open , setOpen] = useState(false);
  return (
    <div className="navbar h-20 relative top-24">
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
          <Link className="text-3xl " to="/">
            LAMOSTORE
          </Link>
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
            <IconButton  aria-label="cart" onClick={() => setOpen(!open)}>
              <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </div>
        </div>
      </div>
                {
                  open && <Cart />
                }
    </div>
  );
}




// import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact", "HomePage"];
const navItems2 = ["Children", "Men", "Women"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <div className="center py-2">
        <Link className="text-3xl  " to="/">
          LAMOSTORE
        </Link>
      </div>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link to="/">
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        <Divider orientation="horizontal" variant="middle" flexItem />
        <Typography
          sx={{ color: "steelblue", textAlign: "start", p: "10px" }}
          variant="h4"
          color="initial"
        >
          Categories
        </Typography>

        {navItems2.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link to="/">
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            <Link className="text-3xl " to="/">
              LAMOSTORE
            </Link>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            {navItems2.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                <Link to="/">{item}</Link>
              </Button>
            ))}
            <Divider orientation="horizontal" variant="middle" flexItem />

            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                <Link to="/">{item}</Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}



export default DrawerAppBar;