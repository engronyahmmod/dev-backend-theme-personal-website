import React from "react";
import { Box, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      sx={{
        height: {
          xs: "100vh",
          md: 500,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#6D5C5C",
        },
      }}
    >
      <Typography variant="h1" component="div">
        404. Page Not Found. <span role="img" aria-label="emoji">😥</span>
      </Typography>
    </Box>
  );
};

export default NotFound;
