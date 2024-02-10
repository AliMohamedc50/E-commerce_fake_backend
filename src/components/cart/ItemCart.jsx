import React from 'react'
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Divider } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeItem } from "../../Store/product/productSlice";

const ItemCart = ({ item }) => {
    const upload_url = "http://localhost:1337";
    const dispatch = useDispatch();

  return (
    <div className="w-full flex justify-between gap-3 items-center mb-2">
      <img
        className="w-20 h-full object-cover"
        src={upload_url + item.img}
        alt=""
      />
      <Box sx={{ flex: "1" }}>
        <h4 className="text-slate-900 font-medium flex-1 mb-1">{item.title}</h4>
        <p className="text-sm ">{item.desc.substring(0, 70)}</p>
        <p className="text-blue-700 font-semibold my-1 text-lg">
          {item.quantity} x ${item.price}
        </p>
      </Box>
      <IconButton
        color="error"
        aria-label="delete"
        size="large"
        onClick={() => dispatch(removeItem(item.id))}
      >
        <DeleteIcon />
      </IconButton>
      <Divider orientation="horizontal" variant="fullWidth" />
    </div>
  );
};

export default ItemCart
