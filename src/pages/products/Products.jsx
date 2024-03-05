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

  // console.log([...selectedSubCategory]);

  return (
    <Box sx={{ position: "relative", display:"flex", marginY: "35px", top: "30px", pb: "50px" }} className="products">
      <Box sx={{mt: "20px", mx: "56px", top: "24px"}} className="left">
        <div>
          <Typography sx={{fontWeight: "400"}} variant="h5" color="initial">
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
      </Box>
      <Box sx={{marginLeft: "32px", mt: "20px", width: "75%"}} className="right">
        <Box sx={{height: "360px"}} className="top">
          <img
            style={{width: "100%", height: "100%", objectFit: "cover"}}
            src="https://images.pexels.com/photos/3875430/pexels-photo-3875430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </Box>
        <Box sx={{mt: "28px"}}  className="bottom mt-7">
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
