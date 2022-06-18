import React from "react";
import { Box, Typography } from "@mui/material";
import { ReactComponent as RightThinArrLogo } from "../assets/images/right-thin-arr-icon.svg";

const PageTitle = ({ title, SVGIcon }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: "32px" }}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 400,
          fontSize: "34px",
          lineHeight: "39.8px",
          letterSpacing: "0.0025em",
          color: "#D7B6A0",
          mr: 1,
        }}
      >
        {title}
      </Typography>
      {SVGIcon ? SVGIcon : <RightThinArrLogo />}
    </Box>
  );
};

export default PageTitle;
