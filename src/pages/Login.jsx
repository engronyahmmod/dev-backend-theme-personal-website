import React from "react";
import { Box, Button, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { loginWithFacebook } from "../firebase/facebook.auth";
import { loginWithGoogle } from "../firebase/google.auth";
const Login = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", my: "50px" }}>
      <Stack spacing={2} sx={{ maxWidth: 330 }}>
        <Button
          variant="contained"
          startIcon={<FacebookIcon />}
          sx={{ backgroundColor: "#4267B2" }}
          onClick={() => loginWithFacebook()}
        >
          Login with facebook
        </Button>
        <Button
          variant="contained"
          startIcon={<GoogleIcon />}
          sx={{ backgroundColor: "#4285F4" }}
          onClick={() => loginWithGoogle()}
        >
          Login with google
        </Button>
      </Stack>
    </Box>
  );
};

export default Login;
