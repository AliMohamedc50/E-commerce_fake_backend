import * as React from "react";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import {
  Badge,
  CircularProgress,
  Stack,
  Tooltip,
  Avatar,
  Toolbar,
  IconButton,
  Box,
  AppBar,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { deepPurple } from "@mui/material/colors";

import { searchProduct } from "../../Store/searchProduct/searchProduct";
import Cart from "../cart/Cart";
import SearchProductCom from "./SearchProductCom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function SearchAppBar() {
  const { loading, productSearch, error } = useSelector(
    (state) => state.searchProduct
  );

  // const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const { products } = useSelector((state) => state.persistedReducer.cartSlice);
  const { user } = useSelector((state) => state.persistedReducer.userSlice);

  // const [inputSearchPro, setInputSearchPro] = useState(null);

  // const handelSearchPro = (e) => {
  //   setInputSearchPro(e.target.value);
  //   if (e.target.value === "") {
  //     setInputSearchPro(null);
  //   }
  // };

  // useEffect(() => {
  //   if (inputSearchPro !== null) {
  //     dispatch(searchProduct(inputSearchPro));
  //   }
  // }, [inputSearchPro, dispatch]);

  // const handleInputBlur = () => {
  //   setTimeout(() => {
  //     setInputSearchPro(null);
  //   }, 200);
  // };

  // -
  return (
    <Box sx={{ flexGrow: 1, mt: "56px" }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#455a64",
          py: { xs: "15px", sm: "0" },
          pt: { sm: "5px" },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "25px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          {/* <Box
            className="search"
            sx={{
              position: "relative",
              width: { xs: "100%", sm: "300px" },
              display: "flex",
              alignItems: "center",
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
                width: { xs: "100%", sm: "300px" },
                top: "100%",
                left: "0",
                bgcolor: "#e4e4e4",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <HandleSearchProductList />
            </Box>
          </Box> */}

          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            {user ? (
              <Link to="profile">
                <Tooltip title="Profile" placement="bottom-start">
                  <Avatar sx={{ bgcolor: deepPurple[500] }}>
                    {user.username[0].toUpperCase()}
                  </Avatar>
                </Tooltip>
              </Link>
            ) : (
              <Link to="login">
                <Tooltip title="Profile" placement="bottom-start">
                  <IconButton color="inherit">
                    <PersonOutlineOutlinedIcon />
                  </IconButton>
                </Tooltip>
              </Link>
            )}

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

            {open && <Cart />}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
