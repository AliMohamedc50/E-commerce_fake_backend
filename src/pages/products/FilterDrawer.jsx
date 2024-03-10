import * as React from "react";
import Box from "@mui/material/Box";
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import RangeSlider from "./RangeSlider";
import { useEffect } from "react";


const DrawerFilter = ({ callbacktt }) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const catId = parseInt(useParams().id);
  const [sort, setSort] = useState("asc");
  const [maxprice, setMaxPrice] = useState(1000);
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);
  const { data, loading, errorr } = useFetch(
    `/sub-categories?[filters] [caregories] [id] [$eq]=${catId}`
  );

  useEffect(() => {
    callbacktt(sort, maxprice, selectedSubCategory);
  }, [sort, maxprice, selectedSubCategory]);

  const handleChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    setSelectedSubCategory(
      isChecked
        ? [...selectedSubCategory, value]
        : selectedSubCategory.filter((item) => item !== value)
    );
  };

  //  console.log(selectedSubCategory);
  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Box sx={{ mt: "20px", marginLeft: "20px" }} className="left">
          <Typography sx={{ fontWeight: "400" }} variant="h5" color="initial">
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


        <Box>
          <Typography variant="h5" color="initial">
            Filter by Price
          </Typography>
          <RangeSlider maxprice={maxprice} />
        </Box>

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
                  <Radio onChange={(e) => setSort("asc")} size="small" />
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
    </Box>
  );
};

export default  DrawerFilter;