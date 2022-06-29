import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  IconButton,
  Tooltip,
  Typography,
  Avatar,
  Menu,
  Divider,
  ListItemIcon,
  MenuItem,
} from "@mui/material";
import { MenuItem as MenuItem2 } from "./NavbarStyles";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CustomDrawer from "./CustomDrawer";
import AuthContext from "../contexts/authContext";
import Logout from "@mui/icons-material/Logout";
import { getAuth, signOut } from "firebase/auth";

function Navbar() {
  const [drawerState, setDrawerState] = useState(false);
  const [bounded, setBounded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const auth = getAuth();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
    <AuthContext.Consumer>
      {(currentUser) => {
        // console.log(currentUser);
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

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: "19px" }}>
                  <MenuItem2 onClick={() => navigate("/")}>HOME</MenuItem2>
                  <MenuItem2 onClick={() => navigate("/allprojects")}>
                    ALL PROJECTS
                  </MenuItem2>
                  <MenuItem2 onClick={() => navigate("/platforms")}>
                    PLATFORMS
                  </MenuItem2>
                  <MenuItem2 onClick={() => navigate("/reviews")}>
                    REVIEWS
                  </MenuItem2>
                  <MenuItem2 onClick={() => navigate("/hire")}>HIRE</MenuItem2>
                  {Boolean(currentUser) || (
                    <MenuItem2 onClick={() => navigate("/login")}>
                      LOGIN
                    </MenuItem2>
                  )}
                </Box>
                {Boolean(currentUser) && (
                  <>
                    <Tooltip title="Account Settings">
                      <IconButton
                        onClick={handleClick}
                        size="small"
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        sx={{ ml: 2 }}
                      >
                        <Avatar
                          sx={{ width: 32, height: 32 }}
                          src={currentUser && currentUser.photoURL}
                          alt={currentUser && currentUser.uid}
                        >
                          {currentUser &&
                            currentUser.displayName.charAt(0).toUpperCase()}
                        </Avatar>
                      </IconButton>
                    </Tooltip>

                    <Menu
                      anchorEl={anchorEl}
                      id="account-menu"
                      open={open}
                      onClose={handleClose}
                      onClick={handleClose}
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    >
                      <MenuItem onClick={() => navigate("/me")}>
                        <Avatar /> Profile
                      </MenuItem>
                      <MenuItem onClick={() => navigate("/profile")}>
                        <Avatar /> My account
                      </MenuItem>
                      <Divider />

                      <MenuItem
                        onClick={() => {
                          signOut(auth)
                            .then(() => {
                              console.log("Signout successfull");
                            })
                            .catch((error) => {
                              console.log(error);
                            });
                        }}
                      >
                        <ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                    </Menu>
                  </>
                )}
              </Box>
            </Container>
          </Box>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default Navbar;
