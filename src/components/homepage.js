import React from "react";
import { Box } from "@material-ui/core";
import Nav from "./nav";
import bg1 from "./Image/bg1.png";
import OurService from "./our_Service";
import FeatureItem from "./featuresItem";
import Pricing from "./pricing";
import Fag from "./fag";
import Team from "./Team";

// import MySlider from "./slider";

import { featuredData } from "../data";
import { grey } from "@material-ui/core/colors";
import TopClients from "./topclients";
// import {  } from "../servicedata";

const Homepage = () => {
  return (
    <Box style={{ maxWidth: "100vw", overflow: "hidden" }}>
      <Nav />
      <Box
        display="flex"
        style={{ height: "100vh", maxWidth: "100%", overflow: "hidden" }}
      >
        <img
          src={bg1}
          style={{ width: "100%", maxWidth: "100%", overflow: "hidden" }}
        />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        style={{ height: 600, margin: 20 }}
      >
        <OurService />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        style={{ margin: 20, backgroundColor: grey[100] }}
      >
        {featuredData.map((item, index) => (
          <FeatureItem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            animation={item.animation}
            index={index}
          />
        ))}
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        style={{ height: 600, margin: 20 }}
      >
        <Pricing />
      </Box>
      <Box display="flex" flexDirection="column" style={{ height: 500 }}>
        <Fag />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        style={{ height: 500, padding: 10 }}
      >
        <Team />
      </Box>
      <Box display="flex" flexDirection="column" style={{ height: 500 }}>
        <TopClients />
      </Box>
    </Box>
  );
};

export default Homepage;
