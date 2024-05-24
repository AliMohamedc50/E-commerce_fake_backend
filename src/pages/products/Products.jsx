/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Box, Button, Drawer } from '@mui/material';
import Listt from '../../components/list/Listt';
import { useParams } from 'react-router-dom';
import DrawerFilter from './FilterDrawer';
import FilterListIcon from "@mui/icons-material/FilterList";


const Products = () => {

  const catId = parseInt(useParams().id);
  const [maxprice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState("asc");
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);

  const callbacktt = (sort, maxprice, selectedSubCategory) => {
    setSort(sort);
    setMaxPrice(maxprice);
    setSelectedSubCategory(selectedSubCategory);
  };

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        marginY: "0",
        top: "57px",
        p: "7px",
        pb: "100px",
      }}
      className="products"
    >
      <Box sx={{ width: "100%" }} className="right">
        {/* <Box sx={{ height: "360px" }} className="top">
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="https://images.pexels.com/photos/3875430/pexels-photo-3875430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </Box> */}
        <Button
        sx={{m: "40px 0 22px"}}
        size='large'
        variant='outlined'
          onClick={toggleDrawer(true)}
          endIcon={<FilterListIcon />}
        >
          Filter
        </Button>
        {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <DrawerFilter callbacktt={callbacktt} />
        </Drawer>
        <Box sx={{ mb: "10px" }} className="bottom">
          <Listt
            subCats={selectedSubCategory}
            sort={sort}
            maxprice={maxprice}
            catId={catId}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Products;
