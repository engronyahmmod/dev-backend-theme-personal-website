import React from "react";
import { Container } from "@mui/material";

function LayoutWraper({ children }) {
  return (
    <Container
      sx={{
        mx: { xs: 0, md: "auto" },
        // mt: { xs: 0, md: "10px" },
        px: { xs: 0, md: "24px" },
      }}
    >
      {children}
    </Container>
  );
}

export default LayoutWraper;
