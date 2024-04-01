import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Badge, Stack } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from "../cart/Cart";
import { Link } from "react-router-dom";

import { deepPurple } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";

import Tooltip from "@mui/material/Tooltip";
import { searchProduct } from "../../Store/searchProduct/searchProduct";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function SearchAppBar() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { products } = useSelector((state) => state.persistedReducer.cartSlice);
  const { user } = useSelector((state) => state.persistedReducer.userSlice);

  const { productSearch } = useSelector(
    (state) => state.searchProduct
  );

  console.log(productSearch && productSearch)

  const handelSearchPro = (e) => {
    dispatch(searchProduct(e.target.value));
  };

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
          <Box
            className="search"
            sx={{
              position:"relative",
              width: { xs: "100%", sm: "300px" },
              display: "flex",
              alignItems: "center",
            }}
          >
            <SearchIcon />
            <input
              type="search"
              // value={searchPro}
              onChange={(e) => handelSearchPro(e)}
              name=""
              id=""
            />
          <Box
            sx={{ position: "absolute", width: { xs: "100%", sm: "300px" }, top:"100%",left:"0", bgcolor:"blue" }}
          >
            
          </Box>
          </Box>

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
