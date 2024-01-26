/* eslint-disable no-unused-vars */
import React from 'react'
import Typography from '@mui/material/Typography'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import RangeSlider from './RangeSlider';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Listt from '../../components/list/Listt';



const Products = () => {

  return (
    <div className="products flex">
      <div className="left mt-5 mx-14  sticky h-full top-6 ">
        <div>
          <Typography variant="h5" color="initial">
            Product Categories
          </Typography>
          <FormGroup>
            <FormControlLabel
              required
              control={<Checkbox size="small" />}
              label="Shoes"
            />
            <FormControlLabel
              required
              control={<Checkbox size="small" />}
              label="Skirts"
            />
            <FormControlLabel
              required
              control={<Checkbox size="small" />}
              label="Coats"
            />
          </FormGroup>
        </div>

        <div>
          <Typography variant="h5" color="initial">
            Filter by Price
          </Typography>
          <RangeSlider />
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
                control={<Radio size="small" />}
                label="Price (Lowest first)"
              />
              <FormControlLabel
                value="other"
                control={<Radio size="small" />}
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
          <Listt />
        </div>
      </div>
    </div>
  );
}

export default Products;
