import { Box, Typography } from '@mui/material';
import axios from 'axios';
import React, { useRef, useState } from 'react'
import CustomizedSnackbars from '../../components/alert/Alert';
import { Link } from 'react-router-dom';

const Regestration = () => {
  
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // send to alert
  const [alertText, setAlertText] = useState(null);
  const childRef = useRef(null);
  const [severity, setSeverity] = useState(null);


  const handelLoginEvent = (e) => {
    e.preventDefault();
    const userCredential = {
      email: email,
      username: username,
      password: password,
    };
  axios
    .post("http://localhost:1337/api/auth/local/register", userCredential)
    .then((response) => {
      // Handle success.
      console.log("Well done!");
      console.log("User profile", response.data.user);
      console.log("User token", response.data.jwt);
    childRef.current.handleClick();
    setAlertText("Done")
    setSeverity("info")
    
  })
  .catch((error) => {
    // console.log("An error occurred:", error.response.data.error.message);
    childRef.current.handleClick();
    setSeverity("error");
    setAlertText("An error occurred:" + error.response.data.error.message);
  });}




  return (
    <Box>
      <Box
        className="login-container"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "300px",
          transform: "translate(-50%,-50%)",
        }}
      >
        <form onSubmit={handelLoginEvent}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              mb: "15px",
              color: "#00487a",
              textShadow: "3px 3px 5px #00268f",
            }}
            color="initial"
          >
            Sign up
          </Typography>
          <input
            type="text"
            id="User Name"
            name="User Name"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="User Name"
          />
          <input
            type="text"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Log In</button>
          <Typography
            variant="body1"
            color="initial"
            sx={{ color: "blue", my: "8px" }}
          >
            <Link to="/login">Click Here to Log in</Link>
          </Typography>
        </form>
      </Box>
      <CustomizedSnackbars
        ref={childRef}
        alertText={alertText}
        severity={severity}
      />
    </Box>
  );
}

export default Regestration
