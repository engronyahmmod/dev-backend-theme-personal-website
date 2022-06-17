import React from "react";
import { Box, Container } from "@mui/material";
import { MenuItem } from "./NavbarStyles";

function Navbar() {
  return (
    <Box
      sx={{
        height: "95px",
        backgroundColor: "#6D5C5C",
        display: "flex",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontSize: "34px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "40px",
            letterSpacing: "0.0025em",
            color: "#FFE9DA",
          }}
        >
          RONY AHMMOD
        </div>

        <Box sx={{ display: "flex", gap: "19px" }}>
          <MenuItem>HOME</MenuItem>
          <MenuItem>ALL PROJECTS</MenuItem>
          <MenuItem>PLATFORMS</MenuItem>
          <MenuItem>REVIEWS</MenuItem>
          <MenuItem>HIRE</MenuItem>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
