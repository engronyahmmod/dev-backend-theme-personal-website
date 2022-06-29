import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { ReactComponent as FbLogo } from "../assets/images/facebook-icon.svg";
import { ReactComponent as TwitterLogo } from "../assets/images/twiter-icon.svg";
import { ReactComponent as GithubLogo } from "../assets/images/github-icon.svg";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        my: { xs: "0", md: "94px" },
        mb: { xs: 2, md: 0 },
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "180px",
            padding: { xs: 2, md: 0 },
          }}
        >
          <a href="https://www.facebook.com/rony.ahmmod.9/" target="_blank" rel="noopener noreferrer">
            <FbLogo />
          </a>
          <a href="https://twitter.com/MDRONYAHMMOD" target="_blank" rel="noopener noreferrer">
            <TwitterLogo />
          </a>
          <a href="https://github.com/ronyahmmod" target="_blank" rel="noopener noreferrer">
            <GithubLogo />
          </a>
        </Box>

        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "14px",
            /* identical to box height */
            textAlign: { xs: "center", md: "left" },

            letterSpacing: "0.015em",

            /* Gray-4 */

            color: "#6D5C5C",
            boxShadow: 1,
            p: 1,
          }}
        >
          This site is designed and maintained by{" "}
          <Typography
            component="span"
            sx={{
              color: "#729AB1",
              textTransform: "uppercase",
              fontSize: "14px",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Eng. Md. Rony Ahmmod
          </Typography>
          . Copyright © 2022{" "}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
