import React from "react";
import { Box, Button, TextField } from "@mui/material";
import PageTitle from "../components/PageTitle";
import { useFormik } from "formik";

function Hire() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      description: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Box>
      <PageTitle title="Hire me" />
      <Box
        sx={{
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          px: { xs: 1, md: 0 },
        }}
        component="form"
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <TextField
          name="name"
          label="Name"
          placeholder="Place your name here."
          required
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          placeholder="xxxxxxxxx@xxxx.xxx"
          required
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <TextField
          name="description"
          label="Say something"
          multiline
          rows={4}
          required
          placeholder="xxxxxxxxx"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        <Box
          sx={{
            my: 2,
            display: "flex",
            justifyContent: "flex-end",
            maxWidth: "600px",
            gap: "10px",
          }}
        >
          <Button
            variant="contained"
            type="submit"
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
    </Box>
  );
}

export default Hire;
