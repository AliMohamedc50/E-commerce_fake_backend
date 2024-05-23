/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import {
  IconButton,
  Box,
  Divider,
  Drawer,
  Badge,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Toolbar,
  Typography,
  AppBar,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import SearchProductCom from "../navbar2/SearchProductCom";
import { searchProduct } from "../../Store/searchProduct/searchProduct";

import Navinfo from "./Navinfo";

const drawerWidth = 300;
const navItems = ["Home", "About", "Contact"];
const newLocal = [
  { cat: "Children", path: "3" },
  { cat: "Men", path: "2" },
  { cat: "Women", path: "1" },
];

function DrawerAppBar(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      
      <Box sx={{ paddingY: "8px" }}>
        <Link to="/">
          <Typography variant="h4" color="initial">
            LAMOSTORE
          </Typography>
        </Link>
      </Box>
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <Link key={i} to="/">
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "start", color:"red" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <Divider orientation="horizontal" variant="middle" flexItem />
        <Typography
          sx={{ color: "steelblue", textAlign: "start", p: "10px" }}
          variant="h4"
          color="initial"
        >
          Categories
        </Typography>

        {newLocal.map((item, i) => (
          <Link key={i} to={`products/${item.path}`}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "start" }}>
                <ListItemText primary={item.cat} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [inputSearchPro, setInputSearchPro] = useState(null);
  const dispatch = useDispatch();
  const { loading, productSearch, error } = useSelector(
    (state) => state.searchProduct
  );

// ? for handel input
  const HandleSearchProductList = () => {
    if (inputSearchPro !== null) {
      if (loading) {
        return <CircularProgress sx={{ m: "10px" }} />;
      } else if (error) {
        return (
          <Alert sx={{ my: "10px" }} severity="error">
            Make sure you are connected to the Internet
          </Alert>
        );
      } else if (productSearch.length) {
        return <SearchProductCom productSearch={productSearch} />;
      } else if (!productSearch.length) {
        return (
          <Alert sx={{ my: "10px" }} severity="warning">
            can't find products
          </Alert>
        );
      }
    } else {
      return null;
    }
  };

  useEffect(() => {
    if (inputSearchPro !== null) {
      dispatch(searchProduct(inputSearchPro));
    }
  }, [inputSearchPro, dispatch]);

  const handelSearchPro = (e) => {
    setInputSearchPro(e.target.value);
    if (e.target.value === "") {
      setInputSearchPro(null);
    }
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setInputSearchPro(null);
    }, 200);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          paddingBottom: { xs: "6px", sm: "0px" },
          flexWrap: "wrap",
          backgroundImage: "linear-gradient(348deg, #1e514b, #0e7d81)",
          // #1e514b, #408E91);
          //  #1e514b, #0e7d81
        }}
      >
        <Toolbar sx={{ display: "flex", flexWrap: "wrap" }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            <Link to="/">LAMOSTORE</Link>
          </Typography>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ order: { xs: "0", sm: "3" } }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Navinfo />
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box
            className="search"
            sx={{
              position: "relative",
              width: { xs: "100%", sm: "300px" },
              display: "flex",
              alignItems: "center",
              mr: "15px",
            }}
          >
            <SearchIcon />
            <input
              onBlur={handleInputBlur}
              type="search"
              onChange={(e) => handelSearchPro(e)}
            />
            <Box
              sx={{
                position: "absolute",
                zIndex: "2000",
                width: { xs: "100%", sm: "100%" },
                top: "100%",
                left: "0",
                bgcolor: "#EEEEEE",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <HandleSearchProductList />
            </Box>
          </Box>
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default DrawerAppBar;

// done