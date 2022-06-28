import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/authContext";

const CustomDrawer = ({ state, toggleDrawer }) => {
  const navigate = useNavigate();
  const list = () => (
    <AuthContext.Consumer>
      {(currentUser) => (
        <Box
          sx={{
            width: "100vw",
            padding: "20px 10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box sx={{ alignSelf: "flex-end", pr: 2, mt: 2 }}>
            <ChevronLeftIcon onClick={toggleDrawer(false)} />
          </Box>
          <List
            sx={{
              pl: 3,
            }}
          >
            {["HOME", "ALL PROJECTS", "PLATFORMS", "REVIEWS", "HIRE"].map(
              (text, index) => (
                <ListItem
                  key={index}
                  disablePadding
                  onClick={() =>
                    navigate(
                      text.toLowerCase() === "home"
                        ? "/"
                        : `${
                            "/" +
                            text
                              .toLowerCase()
                              .trim()
                              .split(" ")
                              .reduce((total, cur) => total + cur)
                          }`
                    )
                  }
                >
                  <ListItemButton>
                    <ListItemText primary={text} sx={{ color: "#6D5C5C" }} />
                  </ListItemButton>
                </ListItem>
              )
            )}
            {!Boolean(currentUser) && (
              <ListItem disablePadding onClick={() => navigate("/login")}>
                <ListItemButton>
                  <ListItemText primary="LOGIN" sx={{ color: "#6D5C5C" }} />
                </ListItemButton>
              </ListItem>
            )}
            {Boolean(currentUser) && (
              <ListItem disablePadding onClick={() => navigate("/me")}>
                <ListItemButton>
                  <ListItemText primary="ME" sx={{ color: "#6D5C5C" }} />
                </ListItemButton>
              </ListItem>
            )}
          </List>
        </Box>
      )}
    </AuthContext.Consumer>
  );
  return (
    <Drawer
      anchor="left"
      open={state}
      onClose={toggleDrawer(false)}
      sx={{ zIndex: 5000 }}
    >
      {list()}
    </Drawer>
  );
};

export default CustomDrawer;
