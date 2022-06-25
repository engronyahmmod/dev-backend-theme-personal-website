import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import StarBorderPurple500RoundedIcon from "@mui/icons-material/StarBorderPurple500Rounded";

const Review = ({ imageURL, alt, name, rating, review }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        my: { xs: 0, md: "32px" },
        px: { xs: 2, md: 0 },
        py: { xs: 2, md: 0 },
        gap: { xs: "20px", md: "60px" },
      }}
    >
      <Box
        sx={
          {
            // alignSelf: { xs: "center", md: "flex-start" }
          }
        }
      >
        <Avatar
          src={imageURL}
          alt={alt}
          sx={{
            height: "183px",
            width: "177px",
          }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" component="div" sx={{ color: "#D7B6A0" }}>
          {name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              transform: "translateX(-10px)",
            }}
          >
            <StarBorderPurple500RoundedIcon
              fontSize="large"
              sx={{ fill: "#F4BFBF" }}
            />
            <StarBorderPurple500RoundedIcon
              fontSize="large"
              sx={{ fill: "#F4BFBF" }}
            />
            <StarBorderPurple500RoundedIcon
              fontSize="large"
              sx={{ fill: "#F4BFBF" }}
            />
            <StarBorderPurple500RoundedIcon
              fontSize="large"
              sx={{ fill: "#F4BFBF" }}
            />
            <StarBorderPurple500RoundedIcon
              fontSize="large"
              sx={{ fill: "#F4BFBF" }}
            />
          </Box>
          <Typography
            sx={{
              ml: 1,
              fontSize: "20px",
              fontWeight: "bold",
              transform: "translateY(4.3px)",
            }}
            variant="h5"
            color="text.secondary"
          >
            {rating}
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: "#6D5C5C" }}>
          {review}
        </Typography>
      </Box>
    </Box>
  );
};

export default Review;
