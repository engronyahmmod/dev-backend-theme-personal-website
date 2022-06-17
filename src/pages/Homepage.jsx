import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { ReactComponent as AppleLogo } from "../assets/images/apple.svg";
import { ReactComponent as IbmLogo } from "../assets/images/ibm.svg";
import { ReactComponent as MailLogo } from "../assets/images/mail-icon.svg";
import WebDevImageUrl from "../assets/images/web-dev.jpg";
import MobileDevImageUrl from "../assets/images/mobile-dev.jpg";
import AppDevImageUrl from "../assets/images/app-dev.jpg";
import UxDegImageUrl from "../assets/images/ux-deg.jpg";
import {
  Banner,
  BannerButton,
  BannerContent,
  BannerTitle,
  LogoContainer,
  CustomButton,
} from "./HomepageStyles";
import Carousel from "../components/Carousel";

function Homepage() {
  return (
    <Box>
      {/* Banner */}
      <Banner>
        <BannerContent>
          <BannerTitle>
            I am manage variety of modern enterprise software projects on behalf
            of clients.
          </BannerTitle>
          <BannerButton>Hire Me</BannerButton>
        </BannerContent>
      </Banner>

      {/* International Icons */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "95px",
          marginTop: "32px",
        }}
      >
        <LogoContainer>
          <AppleLogo /> <span>APPLE</span>
        </LogoContainer>
        <LogoContainer>
          <IbmLogo /> <span>ibm</span>
        </LogoContainer>
        <LogoContainer>
          <AppleLogo /> <span>shopify</span>
        </LogoContainer>
      </Box>

      {/* My Acctivities */}
      <Box sx={{ display: "flex", marginTop: "55px" }}>
        <Box
          sx={{
            flexBasis: "40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {/* Left Side */}
          <Typography
            variant="h3"
            sx={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "34px",
              lineHeight: "40px",
              letterSpacing: "0.0025em",
              color: "#CBA4A4",
              mb: 2,
            }}
          >
            What do I help?
          </Typography>
          <p
            style={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "28px",
              color: "#D7B6A0",
            }}
          >
            I will help you with finding a solution and solve your problem.
          </p>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              mt: 2,
              cursor: "pointer",
            }}
          >
            <MailLogo />
            <span style={{ color: "#8CC0DE" }}>mail.ronyahmmod.com</span>
          </Box>
        </Box>
        <Box
          sx={{
            flexBasis: "60%",
            backgroundColor: "#6D5C5C",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
            padding: "57px 72px",
          }}
        >
          {/* Right Side */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "27px",
            }}
          >
            {/* Activities List */}
            <Box sx={{ display: "flex", gap: "20px" }}>
              {/* Activities List Item 1 */}
              <Box>
                {/* Avatar */}
                <Avatar
                  src={WebDevImageUrl}
                  sx={{ height: "120px", width: "120px" }}
                  alt="Web Dev"
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                {/* Content */}
                <Typography
                  variant="h4"
                  sx={{
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "24px",
                    lineHeight: "28px",
                    color: "#F4BFBF",
                    mb: "14px",
                  }}
                >
                  Web developing
                </Typography>
                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "19px",
                    letterSpacing: "0.005em",
                    color: "#FFE9DA",
                  }}
                >
                  I am building dinamic, robust website using cutting age
                  technology. We understand our respectable clients and fillup
                  there needs.{" "}
                </p>
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: "20px" }}>
              {/* Activities List Item 2 */}
              <Box>
                {/* Avatar */}
                <Avatar
                  src={MobileDevImageUrl}
                  sx={{ height: "120px", width: "120px" }}
                  alt="Web Dev"
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                {/* Content */}
                <Typography
                  variant="h4"
                  sx={{
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "24px",
                    lineHeight: "28px",
                    color: "#F4BFBF",
                    mb: "14px",
                  }}
                >
                  Mobile devloping
                </Typography>
                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "19px",
                    letterSpacing: "0.005em",
                    color: "#FFE9DA",
                  }}
                >
                  I am usign mordern technology to devoloping mobile apps. I
                  have many satisfying clients worlwide.{" "}
                </p>
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: "20px" }}>
              {/* Activities List Item 3 */}
              <Box>
                {/* Avatar */}
                <Avatar
                  src={AppDevImageUrl}
                  sx={{ height: "120px", width: "120px" }}
                  alt="Web Dev"
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                {/* Content */}
                <Typography
                  variant="h4"
                  sx={{
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "24px",
                    lineHeight: "28px",
                    color: "#F4BFBF",
                    mb: "14px",
                  }}
                >
                  Application design
                </Typography>
                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "19px",
                    letterSpacing: "0.005em",
                    color: "#FFE9DA",
                  }}
                >
                  Applicatin design is now a days a chalanging things. Many
                  devolopers this days using old technology. Despite that I am
                  usign modern technology.{" "}
                </p>
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: "20px" }}>
              {/* Activities List Item 4 */}
              <Box>
                {/* Avatar */}
                <Avatar
                  src={UxDegImageUrl}
                  sx={{ height: "120px", width: "120px" }}
                  alt="Web Dev"
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                {/* Content */}
                <Typography
                  variant="h4"
                  sx={{
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "24px",
                    lineHeight: "28px",
                    color: "#F4BFBF",
                    mb: "14px",
                  }}
                >
                  UX/UI design
                </Typography>
                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "19px",
                    letterSpacing: "0.005em",
                    color: "#FFE9DA",
                  }}
                >
                  UX/UI design is not the part of web developent but If any
                  developer want fillup there clients need they must be gain
                  knowledge about that. That’s why I read the project and ensure
                  clients satisfaction.{" "}
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* End of my activities */}

      {/* -------------Small Banner start */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "41px 50px",
          backgroundColor: "#729AB1",
          boxShadow: "2px 3.1px 22px rgba(0,0,0,.3)",
          justifyContent: "space-between",
          mt: "55px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "34px",
            lineHeight: "40px",
            letterSpacing: "0.0025em",
            color: "#FFE9DA",
          }}
        >
          Work hard, successfull client products{" "}
        </Typography>
        <CustomButton>All Projects</CustomButton>
      </Box>
      {/* -------- small banner end-------- */}

      {/* -------- carousel start ------- */}
      <Box sx={{ mt: "58px" }}>
        <p
          style={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "96px",
            lineHeight: "112px",
            /* identical to box height */

            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            letterSpacing: "-0.015em",

            /* Primary Dark */

            color: "#CBA4A4",
          }}
        >
          &ldquo; &rdquo;
        </p>
      </Box>

      <Carousel />
      {/* -------- carousel end --------- */}

      {/* ------ start banner 3 */}
      <Box
        sx={{
          background: "#FFF9E9",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "45px 0px 0px 0px",
          padding: "40px 100px",
          mt: "58px",
        }}
      >
        <Typography
          sx={{
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "48px",
            lineHeight: "56px",
            textAlign: "center",
            color: "#D7B6A0",
          }}
        >
          Let’s make something amzing together start by saying Hi 😀
        </Typography>
      </Box>
      {/* ------ end banner 3 */}
    </Box>
  );
}

export default Homepage;
