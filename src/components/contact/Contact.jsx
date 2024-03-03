import React from 'react'

import PinterestIcon from "@mui/icons-material/Pinterest";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Button, Container, TextField, Typography, useMediaQuery } from '@mui/material';
import Stack from "@mui/material/Stack";

const Contact = () => {
  // const matches = useMediaQuery('(max-width:725px)');
  return (
    <Box className='contact' sx={{background: "#1976d2"}}>
        <Container sx={{py: "7px"}}>
          
          <Stack direction={{xs : "column" , sm: "row" }} spacing={{xs : "15px"}} justifyContent="space-between"  alignItems="center">

            <Typography variant="h6" sx={{fontSize:{xs: "20px"}, color: "white", fontWeight: "400"}} color="initial"> BE IN TOUCH WITH US</Typography>
            <Box sx={{display: "flex"}}>
              {/* <input type="text" placeholder='Enter your email'  /> */}
              <TextField sx={{bgcolor:"white", padding: "0px", width: {xs: "180px", md: "300px"}}} id="outlined-basic" variant="outlined" >Enter your email</TextField>
              <Button variant="contained" color="success">join us</Button>
            </Box>
              <div className="icons flex gap-1">
                <PinterestIcon color='white' />
                <GoogleIcon color='white' />
                <TwitterIcon color='white' />
                <InstagramIcon color='white' />
              </div>
          </Stack>
        </Container>
    </Box>
  )
}

export default Contact
