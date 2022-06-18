import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { ReactComponent as RightThinArrLogo } from "../assets/images/right-thin-arr-icon.svg";
import ResturantAppImageURL from "../assets/images/resturant-app.jpg";
import RealstateAppImageURL from "../assets/images/real-state-app.jpg";

function AllProjects() {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", mt: "32px" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 400,
            fontSize: "34px",
            lineHeight: "39.8px",
            letterSpacing: "0.0025em",
            color: "#D7B6A0",
            mr: 1,
          }}
        >
          Lets follow my stylish projects
        </Typography>
        <RightThinArrLogo />
      </Box>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={4}>
          {/* Item-1 */}
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={ResturantAppImageURL}
              alt="Beautiful Resturant Apll"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Resturent App
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "12px",
                  mt: 2,
                  fontWeight: 400,
                  color: "#6D5C5C",
                  lineHeight: "14px",
                  letterSpacing: "0.004em",
                }}
              >
                Time: 22 JAN 2021 to 22 APR 2021
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          {/* Item-2 */}
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={RealstateAppImageURL}
              alt="Realstate app"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Realstate App
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "12px",
                  mt: 2,
                  fontWeight: 400,
                  color: "#6D5C5C",
                  lineHeight: "14px",
                  letterSpacing: "0.004em",
                }}
              >
                Time: 03 JAN 2021 to 14 APR 2021
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          {/* Item-3 */}
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={ResturantAppImageURL}
              alt="Beautiful Resturant Apll"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Resturent App
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "12px",
                  mt: 2,
                  fontWeight: 400,
                  color: "#6D5C5C",
                  lineHeight: "14px",
                  letterSpacing: "0.004em",
                }}
              >
                Time: 22 JAN 2021 to 22 APR 2021
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          {/* Item-4 */}
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={ResturantAppImageURL}
              alt="Beautiful Resturant Apll"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Resturent App
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "12px",
                  mt: 2,
                  fontWeight: 400,
                  color: "#6D5C5C",
                  lineHeight: "14px",
                  letterSpacing: "0.004em",
                }}
              >
                Time: 22 JAN 2021 to 22 APR 2021
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          {/* Item-5 */}
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={ResturantAppImageURL}
              alt="Beautiful Resturant Apll"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Resturent App
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "12px",
                  mt: 2,
                  fontWeight: 400,
                  color: "#6D5C5C",
                  lineHeight: "14px",
                  letterSpacing: "0.004em",
                }}
              >
                Time: 22 JAN 2021 to 22 APR 2021
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          {/* Item-6 */}
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={ResturantAppImageURL}
              alt="Beautiful Resturant Apll"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Resturent App
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "12px",
                  mt: 2,
                  fontWeight: 400,
                  color: "#6D5C5C",
                  lineHeight: "14px",
                  letterSpacing: "0.004em",
                }}
              >
                Time: 22 JAN 2021 to 22 APR 2021
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          {/* Item-7 */}
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={ResturantAppImageURL}
              alt="Beautiful Resturant Apll"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Resturent App
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "12px",
                  mt: 2,
                  fontWeight: 400,
                  color: "#6D5C5C",
                  lineHeight: "14px",
                  letterSpacing: "0.004em",
                }}
              >
                Time: 22 JAN 2021 to 22 APR 2021
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          {/* Item-8 */}
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={ResturantAppImageURL}
              alt="Beautiful Resturant Apll"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Resturent App
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "12px",
                  mt: 2,
                  fontWeight: 400,
                  color: "#6D5C5C",
                  lineHeight: "14px",
                  letterSpacing: "0.004em",
                }}
              >
                Time: 22 JAN 2021 to 22 APR 2021
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          {/* Item-9 */}
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={ResturantAppImageURL}
              alt="Beautiful Resturant Apll"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Resturent App
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "12px",
                  mt: 2,
                  fontWeight: 400,
                  color: "#6D5C5C",
                  lineHeight: "14px",
                  letterSpacing: "0.004em",
                }}
              >
                Time: 22 JAN 2021 to 22 APR 2021
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* End Grid Container */}
      </Grid>
    </Box>
  );
}

export default AllProjects;
