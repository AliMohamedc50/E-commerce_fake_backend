import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../Store/user/userSlice";
import { useDispatch } from "react-redux";
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handelLoginEvent = (e) => {
    e.preventDefault();
    const userCredential = {
      identifier: email,
      password: password,
    };
      dispatch(loginUser(userCredential));
  };

  return (
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
        Log in
      </Typography>
      <form onSubmit={handelLoginEvent}>
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
      </form>
      <Typography
        variant="body1"
        color="initial"
        sx={{ color: "blue", my: "8px" }}
      >
        <Link to="/regestration">Click Here to Sign up</Link>
      </Typography>
    </Box>
  );
};

export default Login;
