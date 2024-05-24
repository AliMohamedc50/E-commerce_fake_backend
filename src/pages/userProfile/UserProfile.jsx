import { Avatar, Box, Container, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

const UserProfile = () => {
      const { user } = useSelector((state) => state.persistedReducer.userSlice);
  return (
    <Container fixed sx={{display:"flex"}}>
      {user && (
        <Tooltip title="Profile" placement="bottom-start">
          <Avatar
            sx={{ bgcolor: "#577D86", width: 80, height: 80, fontSize: 50 }}
          >
            {user.username[0].toUpperCase()}
          </Avatar>
        </Tooltip>
      )}
      <Box sx={{ml:"20px"}}>
        <Typography variant="h5" color="initial" sx={{mt:"10px"}}>

        {user.username}
        </Typography>
        </Box>
    </Container>
  );
}

export default UserProfile
