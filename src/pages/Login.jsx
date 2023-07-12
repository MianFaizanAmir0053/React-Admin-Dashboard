import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/config";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setUser, setLoading, setError } from "../redux/authSlice";

export function Login(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    ></Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const { isLoading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logged = localStorage.getItem("user");
  if (logged) {
    const { email, password } = JSON.parse(logged);
    dispatch(setLoading(true));
    dispatch(setUser({ email, password }));
    dispatch(setLoading(false));
    dispatch(setError(null));
    navigate("/");
  }

  const handleSubmit = (event, { email, password }) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setUser({ email, password }));
        dispatch(setLoading(false));
        dispatch(setError(null));
        localStorage.setItem("user", JSON.stringify({ email, password }));
        console.log(true);
        navigate("/");
      })
      .catch((error) => {
        dispatch(setError(true));
      });
  };

  if (isLoading) {
    return (
      <div className=" text-4xl">
        loading... loadingloadingloadingloadingloadingloadingloading
      </div>
    );
  } else if (error) {
    return <div>error</div>;
  } else {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={(e) =>
                handleSubmit(e, {
                  email: e.target.email.value,
                  password: e.target.password.value,
                })
              }
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                placeholder="faizan123@gmail.com"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                placeholder="faizan123"
                type="password"
                placeholder="faizan123"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
          <Login sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    );
  }
}
