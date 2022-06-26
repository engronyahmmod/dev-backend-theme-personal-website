import React, { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { MenuItem } from "./NavbarStyles";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CustomDrawer from "./CustomDrawer";

function Navbar() {
  const [drawerState, setDrawerState] = useState(false);
  const [bounded, setBounded] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.pageYOffset > 140) {
      setBounded(true);
    } else {
      setBounded(false);
    }
  };
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerState(open);
  };
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: { xs: "55px", md: "95px" },
        backgroundColor: "#6D5C5C",
        display: "flex",
        position: bounded ? "fixed" : "static",
        zIndex: 4000,
        width: bounded ? "100vw" : "auto",
        opacity: bounded ? 0.99 : 1,
        left: bounded ? 0 : "none",
        top: bounded ? 0 : "none",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <MenuIcon
            sx={{
              display: { xs: "block", md: "none" },
              mr: 1,
              color: "#FFE9DA",
              cursor: "pointer",
            }}
            onClick={toggleDrawer(true)}
          />
          <CustomDrawer state={drawerState} toggleDrawer={toggleDrawer} />
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "34px" },
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
          </Typography>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: "19px" }}>
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
