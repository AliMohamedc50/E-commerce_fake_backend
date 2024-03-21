import { Box } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../Store/user/userSlice'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const handelLoginEvent=(e) =>{
    e.preventdefault();
    let userCredential = {
      email,
      password
    };
    dispatch(loginUser(userCredential));

  }
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
      <form>
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
    </Box>
  );
}

export default Login
