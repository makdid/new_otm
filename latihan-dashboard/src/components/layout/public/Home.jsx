import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Components from "./SignIn";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";


function Home() {
  const [signIn, toggle] = useState(true);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    const users = [
      { userId: "WijayaPutra", password: "Sambel111" },
      { userId: "Miqdad", password: "Pecel123" },
    ];
  
    const user = users.find(
      (user) => user.userId === userId && user.password === password
    );
  
    if (user) {
      setIsLoggedIn(true);
      navigate("/otm/dashboard-wo");
    } else {
      alert("Waduuh... user id atau password salah bang.");
    }
  };
  

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <img src="../../assets/otmlogo.png" />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField 
          id="outlined-basic" 
          label="User Id"
          variant="outlined"
          />
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField 
          id="outlined-basic" 
          label="Email"
          variant="outlined"
          />
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Components.Button>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <img src="../../assets/otmlogo.png" />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField 
          id="outlined-basic" 
          label="User Id"
          variant="outlined"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          />
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              value={password}
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Typography sx={{ mt: 2, mb: 3, }}>Forgot Password?</Typography>
          <Components.Button onClick={handleLogin}>Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us, please login with your personal info.
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter your personal details and start your journey with us.
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default Home;