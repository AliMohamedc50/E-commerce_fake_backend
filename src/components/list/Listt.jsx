import React from 'react'
import Card from '../card/Card';
import useFetch from '../../hooks/useFetch';
import { Stack } from '@mui/material';

const Listt = ({subCats, sort, maxprice, catId}) => {

    const { data, loading, errorr } = useFetch(
      `/products?populate=*&[filters] [caregories] [id]=${catId}${subCats.map(
        (item) => `&[filters] [sub_categories] [id] [$eq]=${item}`
      )}&[filters] [price] [$lte]=${maxprice}&sort=price:${sort}`
    );


  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={6} >
      {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </Stack>
  );
}

export default Listt
