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
import { useSelector } from 'react-redux';





const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];
const newLocal = [
  { cat: "Children", path: "3" },
  { cat: "Men", path: "2" },
  { cat: "Women", path: "1" },
];
const navItems2 = newLocal;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { products } = useSelector((state) => state.cartSlice);

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
              <Link to={`products/${item.path}`}>
                <ListItemText primary={item.cat} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [open, setOpen] = useState(false);
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
                <Link to={`products/${item.path}`}>{item.cat}</Link>
              </Button>
            ))}
            <Divider orientation="vertical" variant="middle" flexItem />
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                <Link to="/">{item}</Link>
              </Button>
            ))}
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />

          <div className="iocns">
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit">
              <PersonOutlineOutlinedIcon />
            </IconButton>
            <IconButton color="inherit">
              <FavoriteBorderOutlinedIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="cart"
              onClick={() => setOpen(!open)}
            >
              <StyledBadge badgeContent={products?.length} color="warning">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </div>

          {open && <Cart />}
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
            display: { xs: "block", sm: "block" },
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