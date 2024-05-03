import React from 'react'
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Stack, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeItem } from "../../Store/product/productSlice";

const ItemCart = ({ item }) => {
    const upload_url = "http://localhost:1337";
    const dispatch = useDispatch();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      gap="12px"
      sx={{ width: "100%", mb: "8px" }}
    >
      <img
        style={{ width: "80px", height: "100%", objectFit: "cover" }}
        src={upload_url + item.img}
        alt=""
      />
      <Box sx={{ flex: "1" }}>
        <Typography
          variant="h4"
          color="initial"
          sx={{
            fontWeight: "bold",
            flex: "1",
            mb: "4px",
            fontSize: "24px",
            color: "#01243b",
          }}
        >
          {item.title}
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontSize: "15px", color: "#ffffffb8" }}
        >
          {item.desc.substring(0, 70)}
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontWeight: "600",
            my: "4px",
            fontSize: "18px",
            color: "#1976d2",
          }}
        >
          {item.quantity} x ${item.price}
        </Typography>
      </Box>
      <IconButton
        color="error"
        aria-label="delete"
        size="large"
        onClick={() => dispatch(removeItem(item.id))}
      >
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};

export default ItemCart
