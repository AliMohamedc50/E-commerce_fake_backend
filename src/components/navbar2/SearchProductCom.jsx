import { Divider, List, ListItem, Rating, Stack, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const SearchProductCom = ({ productSearch }) => {

  const items =
    productSearch &&
    productSearch.map((ele) => (
      <Link
        to={`/product/${ele.id}`}
        key={ele.id}
      >
        <ListItem>
          <Stack direction="row">
            <img
              style={{ width: "70px", height: "75px", objectFit: "fill" }}
              src={`http://localhost:1337${ele.attributes.img.data.attributes.url}`}
              alt=""
            />
            <Stack sx={{ paddingLeft: "8px" }} direction="column">
              <Typography variant="h6" color="initial">
                {ele.attributes.title}
              </Typography>
              <Typography variant="p" color="initial">
                {ele.attributes.desc.substring(0, 20)}
              </Typography>
              <Rating
                name="half-rating-read"
                defaultValue={3}
                size="small"
                precision={0.5}
                readOnly
              />
            </Stack>
          </Stack>
        </ListItem>
       
      </Link>
    ));

  const style = {
    py: 0,
    width: "100%",
    borderRadius: 2,
    border: "1px solid",
    borderColor: "divider",
    backgroundColor: "#e4e4e4",
  };

  return (
    <List sx={style}>
      {items}
    </List>
  );
};

export default SearchProductCom;
