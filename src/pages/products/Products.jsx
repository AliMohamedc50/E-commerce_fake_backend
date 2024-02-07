/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import RangeSlider from './RangeSlider';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Listt from '../../components/list/Listt';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';



const Products = () => {

  const catId = parseInt(useParams().id);
  const [maxprice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState("asc");
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);
  const { data, loading, errorr } = useFetch(
    `/sub-categories?[filters] [caregories] [id] [$eq]=${catId}`
  );

  const handleChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
        setSelectedSubCategory(
      isChecked
        ? [...selectedSubCategory, value]
        // : null
        : selectedSubCategory.filter((item) => item !== value ))
  };

  console.log([...selectedSubCategory]);

  return (
    <Box sx={{ position: "relative" }} className="products flex ">
      <div className="left mt-5 mx-14  sticky h-full top-6 ">
        <div>
          <Typography variant="h5" color="initial">
            Product Categories
          </Typography>
          {
            <FormGroup>
              {data?.map((ele) => (
                <FormControlLabel
                  required
                  key={ele.id}
                  control={
                    <Checkbox
                      onChange={handleChange}
                      value={ele.id}
                      size="small"
                    />
                  }
                  label={ele.attributes.title}
                />
              ))}
            </FormGroup>
          }
        </div>

        <div>
          <Typography variant="h5" color="initial">
            Filter by Price
          </Typography>
          <RangeSlider maxprice={maxprice} />
        </div>

        <div>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Sorty by</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="male"
                control={
                  <Radio
                  onChange={(e) => setSort("asc")}
                  
                    size="small"
                  />
                }
                label="Price (Lowest first)"
              />
              <FormControlLabel
                value="other"
                control={
                  <Radio onChange={(e) => setSort("desc")} size="small" />
                }
                label="Price (hightest first)"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className="right ms-8 mt-5  w-9/12 overflow-hidden">
        <div className="top h-96">
          <img
            className="h-full w-full object-cover"
            src="https://images.pexels.com/photos/3875430/pexels-photo-3875430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="bottom mt-7">
          <Listt
            subCats={selectedSubCategory}
            sort={sort}
            maxprice={maxprice}
            catId={catId}
          />
        </div>
      </div>
    </Box>
  );
}

export default Products;
