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
        my: "94px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "180px",
          }}
        >
          <a href="https://www.facebook.com/rony.ahmmod.9/" target="_blank">
            <FbLogo />
          </a>
          <a href="https://twitter.com/MDRONYAHMMOD" target="_blank">
            <TwitterLogo />
          </a>
          <a href="https://github.com/ronyahmmod" target="_blank">
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

            letterSpacing: "0.015em",

            /* Gray-4 */

            color: "#6D5C5C",
          }}
        >
          This site is designed and maintained by Md. Rony Ahmmod. Copyright ©
          2022{" "}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
