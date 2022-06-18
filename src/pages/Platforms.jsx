import React from "react";
import { Avatar, Box } from "@mui/material";
import PageTitle from "../components/PageTitle";
import CustomCard from "../components/CustomCard";
import JSLogoUrl from "../assets/images/js-logo.png";
import ReactLogo from "../assets/images/react-logo.png";
import MongoDbLogo from "../assets/images/mongodb-logo.png";
import ExpresJsLogo from "../assets/images/expressjs.png";
import NodeJsLogo from "../assets/images/nodejs-logo.png";
import FirebaseLogo from "../assets/images/firebase-logo.png";
import SassLogo from "../assets/images/sass-logo.png";
import NextJsLogo from "../assets/images/nextjs-logo.png";
import MUILogo from "../assets/images/matarial-ui-logo.png";
import FigmaLogo from "../assets/images/figma-logo.jpg";

function Platforms() {
  return (
    <Box>
      <PageTitle title="Technologies I use" />
      <CustomCard
        imageURL={JSLogoUrl}
        alt="Javascript logo"
        title="Javascript"
        body="JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries."
      />

      <CustomCard
        imageURL={ReactLogo}
        alt="React Logo"
        title="React"
        body="React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies."
      />
      <CustomCard
        imageURL={MongoDbLogo}
        alt="MongoDb Logo"
        title="MongoDB"
        body="MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License which is deemed non-free by several distributions."
      />
      <CustomCard
        imageURL={ExpresJsLogo}
        alt="Express.JS Logo"
        title="Express.JS"
        body="Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js."
      />
      <CustomCard
        imageURL={NodeJsLogo}
        alt="Node.JS Logo"
        title="Node.JS"
        body="Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser."
      />
      <Box
        sx={{
          mt: "40px",
          display: "flex",
          gap: "80px",
          justifyContent: "space-between",
        }}
      >
        <Avatar
          src={FirebaseLogo}
          sx={{ height: "144px", width: "144px" }}
          alt="firebase logo"
        />
        <Avatar
          src={SassLogo}
          sx={{ height: "144px", width: "144px" }}
          alt="sass logo"
        />
        <Avatar
          src={NextJsLogo}
          sx={{ height: "144px", width: "144px" }}
          alt="nextjs logo"
        />
        <Avatar
          src={MUILogo}
          sx={{ height: "144px", width: "144px" }}
          alt="mui logo"
        />
        <Avatar
          src={FigmaLogo}
          sx={{ height: "144px", width: "144px" }}
          alt="figma logo"
        />
      </Box>
    </Box>
  );
}

export default Platforms;
