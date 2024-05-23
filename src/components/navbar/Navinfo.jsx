import { Avatar, Badge, IconButton, Stack, Tooltip, styled } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { deepPurple } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from "../cart/Cart";


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Navinfo() {

    const [open, setOpen] = useState(false);

    const { products } = useSelector(
      (state) => state.persistedReducer.cartSlice
    );
    const { user } = useSelector((state) => state.persistedReducer.userSlice);
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ width: { xs: "100%", sm: "auto" }, mr: { xs: "0", sm: "20px" } }}
    >
      {user ? (
        <Link to="profile">
          <Tooltip title="Profile" placement="bottom-start">
            <Avatar sx={{ bgcolor: "#577D86", width: 35, height: 35 }}>
              {user.username[0].toUpperCase()}
            </Avatar>
          </Tooltip>
        </Link>
      ) : (
        <Link to="login">
          <Tooltip title="Profile" placement="bottom-start">
            <IconButton color="inherit">
              <PersonOutlineOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Link>
      )}

      <IconButton color="inherit">
        <FavoriteBorderOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton
        color="inherit"
        aria-label="cart"
        onClick={() => setOpen(!open)}
      >
        <StyledBadge badgeContent={products?.length} color="warning">
          <ShoppingCartIcon fontSize="small" />
        </StyledBadge>
      </IconButton>

      {open && <Cart />}
    </Stack>
  );
}

export default Navinfo;
