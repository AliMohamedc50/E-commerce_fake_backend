/* eslint-disable no-unused-vars */
import { Stack } from '@mui/material';
import React from 'react'

const Footer = () => {
  return (
    <Stack direction={{xs: "column", sm: "row"}} justifyContent="space-between" spacing={"50px"} sx={{padding: "10px"}} className="footer">
        <div className="item">
          <h1>categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Children</span>
          <span>Shoes</span>
          <span>Accessries</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo veniam officiis esse? Nihil rem impedit repellat vero voluptate accusamus cumque asperiores, quasi laborum dolores! Sit, repellendus totam? Qui, quisquam natus.</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur temporibus quae, neque repellendus esse cupiditate placeat iure enim laboriosam ipsa adipisci, itaque nemo ipsum. Ex, magni cum? Sit, officia dignissimos?
          </span>
        </div>
    </Stack>
  );
}

export default Footer
