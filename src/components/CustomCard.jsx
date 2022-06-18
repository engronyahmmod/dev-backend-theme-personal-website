import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const CustomCard = ({ imageURL, alt, title, body }) => {
  return (
    <Card sx={{ display: "flex", my: "63px" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={imageURL}
        alt={alt}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CustomCard;
