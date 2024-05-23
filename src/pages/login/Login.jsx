import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../Store/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
const Login = () => {
  const navigate = useNavigate();
  
  const { loading, error } = useSelector(
    (state) => state.persistedReducer.userSlice
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handelLoginEvent = (e) => {
    e.preventDefault();
    const userCredential = {
      identifier: email,
      password: password,
    };
    dispatch(loginUser(userCredential))
    .then((test) => {
      if(test.type === "user/loginUser/fulfilled") {
        navigate("/")
      }
    })
    .catch((error) => {
      console.log("Error:", error.message);
    });
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

        <button type="submit">
          {loading ? <CircularProgress color="inherit" /> : "Log In"}
        </button>
        {error?.status ? (
          <Alert sx={{ my: "10px" }} severity="error">
            {error.message}
          </Alert>
        ) : null}

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
