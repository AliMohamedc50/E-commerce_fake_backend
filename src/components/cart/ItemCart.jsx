import React from 'react'
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Divider } from '@mui/material';

const ItemCart = ({ item }) => {
  return (
    <div className="w-full flex gap-3 items-center mb-2">
      <img className="w-20 h-full object-cover" src={item.img} alt="" />
      <div>
        <h4 className="text-slate-900 font-medium flex-1 mb-1">{item.title}</h4>
        <p className="text-sm ">{item.desc.substring(0, 70)}</p>
        <p className="text-blue-700 font-semibold my-1 text-lg">
          {item.pieces} x ${item.price}
        </p>
      </div>
      <IconButton color="error" aria-label="delete" size="large">
        <DeleteIcon />
      </IconButton>
      <Divider orientation="horizontal" variant="fullWidth" />
    </div>
  );
};

export default ItemCart
