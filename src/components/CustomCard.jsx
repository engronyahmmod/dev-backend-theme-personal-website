import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const CustomCard = ({ imageURL, alt, title, body }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        my: "30px",
        boxShadow: { xs: "none", md: 1 },
        padding: { xs: "none", md: 0 },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", md: 151 },
          borderRadius: { xs: "0", md: 1 },
          "& .MuiCardMedia-img": {
            borderRadius: { xs: 0, md: 1 },
          },
        }}
        image={imageURL}
        alt={alt}
      />
      <Box
        sx={{ display: "flex", flexDirection: "column", mt: { xs: 1, md: 0 } }}
      >
        <CardContent
          sx={{
            display: { xs: "flex" },
            flexDirection: { xs: "column" },
            justifyContent: "center",
            flex: "1 0 auto",
            py: { xs: 0 },
          }}
        >
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
