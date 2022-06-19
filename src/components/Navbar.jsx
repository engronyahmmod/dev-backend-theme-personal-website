import React from "react";
import { Box, Container } from "@mui/material";
import { MenuItem } from "./NavbarStyles";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
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
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          RONY AHMMOD
        </div>

        <Box sx={{ display: "flex", gap: "19px" }}>
          <MenuItem onClick={() => navigate("/")}>HOME</MenuItem>
          <MenuItem onClick={() => navigate("/allprojects")}>
            ALL PROJECTS
          </MenuItem>
          <MenuItem onClick={() => navigate("/platforms")}>PLATFORMS</MenuItem>
          <MenuItem onClick={() => navigate("/reviews")}>REVIEWS</MenuItem>
          <MenuItem onClick={() => navigate("/hire")}>HIRE</MenuItem>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
