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

const CustomDrawer = ({ state, toggleDrawer }) => {
  const navigate = useNavigate();
  const list = () => (
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
      <Box sx={{ alignSelf: "flex-end", pr: 2 }}>
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
      </List>
    </Box>
  );
  return (
    <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
      {list()}
    </Drawer>
  );
};

export default CustomDrawer;
