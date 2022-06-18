import React from "react";
import { Box, Button, TextField } from "@mui/material";
import PageTitle from "../components/PageTitle";

function Hire() {
  return (
    <Box>
      <PageTitle title="Hire me" />
      <Box
        sx={{
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
        }}
        component="form"
        autoComplete="off"
      >
        <TextField
          name="name"
          label="Name"
          placeholder="Place your name here."
          required
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          placeholder="xxxxxxxxx@xxxx.xxx"
          required
        />
        <TextField
          name="description"
          label="Say something"
          multiline
          rows={4}
          required
          placeholder="xxxxxxxxx"
        />
      </Box>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          justifyContent: "flex-end",
          maxWidth: "600px",
          gap: "10px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#CBA4A4",
            color: "#FFF0F0",
            "&:hover": {
              color: "#CBA4A4",
              backgroundColor: "#FFF0F0",
            },
          }}
        >
          Submit
        </Button>
        <Button variant="contained" color="error">
          Cancle
        </Button>
      </Box>
    </Box>
  );
}

export default Hire;
