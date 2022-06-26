import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import { ReactComponent as LeftArrLogo } from "../assets/images/leftarr-icon.svg";
import { ReactComponent as RightArrLogo } from "../assets/images/rightarr-icon.svg";

const NextArrow = ({ className, style, onClick }) => {
  return (
    <Box
      onClick={onClick}
      style={{ ...style }}
      className={className}
      sx={{
        width: "auto",
        height: "auto",
        display: { xs: "none" },
        "@media (maxWidth: 595px)": { display: "none" },
        // display: "inline-block",
        zIndex: 1000,
        "&::before": {
          fontSize: 0,
        },
      }}
    >
      <RightArrLogo style={{ width: "24px", height: "24px" }} />
    </Box>
  );
};
const PrevArrow = ({ className, style, onClick }) => {
  return (
    <Box
      onClick={onClick}
      style={{ ...style }}
      className={className}
      sx={{
        width: "auto",
        height: "auto",
        display: { xs: "none", md: "block" },
        // display: "inline-block",
        zIndex: 1000,
      }}
    >
      <LeftArrLogo
        style={{
          width: "24px",
          height: "24px",
          "@media (maxWidth: 595px)": { display: "none" },
        }}
      />
    </Box>
  );
};

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <Slider {...settings}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: { xs: 1, md: 0 },
          }}
        >
          {/* Item 1 */}
          <Typography
            component="p"
            sx={{
              textAlign: "center",
              color: "#D7B6A0",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "19px",
              letterSpacing: "0.005em",
              overflow: { xs: "hidden", md: "none" },
              textOverflow: "ellipsis",
              whiteSpace: { xs: "no-wrap", md: "none" },
            }}
          >
            “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.”
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              mt: 2,
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "28px",
              color: "#DBD2BD",
              mb: 1,
            }}
          >
            Felani Mul
          </Typography>
          <Typography
            sx={{
              textAlign: "center",

              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "16px",
              color: "#D7B6A0",
            }}
          >
            CEO CloudBee
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Item 2 */}
          <Typography
            component="p"
            sx={{
              textAlign: "center",
              color: "#D7B6A0",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "19px",
              letterSpacing: "0.005em",
            }}
          >
            “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.”
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              mt: 2,
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "28px",
              color: "#DBD2BD",
              mb: 1,
            }}
          >
            Robert Hush
          </Typography>
          <Typography
            sx={{
              textAlign: "center",

              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "16px",
              color: "#D7B6A0",
            }}
          >
            CEO Doc Fire
          </Typography>
        </Box>
      </Slider>
    );
  }
}
