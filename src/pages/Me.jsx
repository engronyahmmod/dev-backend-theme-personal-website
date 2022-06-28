import React, { useContext } from "react";
import AuthContext from "../contexts/authContext";
import { Avatar, Box, Button, Typography } from "@mui/material";

const Me = () => {
  const currentUser = useContext(AuthContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: { xs: 8, md: 10 },
        maxWidth: { xs: 340, md: 500 },
        mx: "auto",
        py: 2,
        background:
          "linear-gradient(98.57deg, #CBA4A4 -49.95%, #F4BFBF 54.63%, #FFE9DA 172.44%)",
        position: "relative",
        borderRadius: 2,
        boxShadow: 10,
      }}
    >
      <Box sx={{ mt: -6 }}>
        <Avatar
          src={currentUser.photoURL}
          alt={currentUser.uid}
          sx={{ height: 60, width: 60 }}
        >
          {currentUser && currentUser.displayName.charAt(0).toUpperCase()}
        </Avatar>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          my: 1,
          py: 2,
          px: 1,
          minHeight: 150,
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            color: "#6D5C5C",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: { xs: 16, md: 20 },
          }}
        >
          Name: {currentUser.displayName.toUpperCase()}
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: "#6D5C5C",
            fontWeight: "bold",

            fontSize: { xs: 14, md: 16 },
          }}
        >
          Email: {currentUser.email}
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: "#6D5C5C",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: { xs: 14, md: 16 },
          }}
        >
          UID: {currentUser.uid}
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: "#6D5C5C",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: { xs: 14, md: 16 },
          }}
        >
          Email is {currentUser.emailVerified ? "verified" : "not verified"}
        </Typography>
      </Box>
      <Button color="error" variant="contained">
        Delete Account
      </Button>
    </Box>
  );
};

export default Me;
