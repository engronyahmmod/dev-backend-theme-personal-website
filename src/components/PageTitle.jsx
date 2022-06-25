import React from "react";
import { Box, Typography } from "@mui/material";
import { ReactComponent as RightThinArrLogo } from "../assets/images/right-thin-arr-icon.svg";

const PageTitle = ({ title, SVGIcon, ...otherProps }) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", my: "32px" }}
      {...otherProps}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 500,
          fontSize: { xs: "20px", md: "34px" },
          lineHeight: { xs: "23px", md: "39.8px" },
          letterSpacing: "0.0025em",
          color: "#D7B6A0",
          mr: 1,
          pl: 2,
        }}
      >
        {title}
      </Typography>
      {SVGIcon ? SVGIcon : <RightThinArrLogo />}
    </Box>
  );
};

export default PageTitle;
