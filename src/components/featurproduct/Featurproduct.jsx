/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '../card/Card';

import useFetch from '../../hooks/useFetch';
import { Box, Container, Stack, Typography } from '@mui/material';




const Featurproduct = ({type}) => {


      const {  data } = useFetch(
        `/products?populate=*&[filters] [type] [$eq]=${type}`
      );

  return (
    <Container sx={{ my: "100px" }}>
      <Stack
        direction={{xs: "column",sm: "row" }}
        justifyContent="center"
        alignItems="center"
        spacing={8}
        paddingY="50px"
      >
        <Typography variant="h4" color="initial" sx={{ flex: "1",  whiteSpace: "nowrap", fontSize: {xs: "22px", sm: "30px"}  }}>
          {type} Product
        </Typography>
        {/* text color  */}
        <Typography variant="p" color="initial" sx={{ flex: "1" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          sapiente
        </Typography>
      </Stack>
      <div className="bottom flex justify-center gap-12">
        {data?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </Container>
  );
}

export default Featurproduct
