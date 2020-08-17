import React from "react";
import { Box } from "@material-ui/core";
import Nav from "./nav";
import bg1 from "./Image/bg1.png";
import OurService from "./our_Service";
import FeatureItem from "./featuresItem";
import Pricing from "./pricing";

// import MySlider from "./slider";

import { featuredData, ServiceData } from "../data";
// import {  } from "../servicedata";

const Homepage = () => {
  return (
    <div>
      <Nav />
      <Box display="flex" style={{ backgroundColor: "red", height: "100vh" }}>
        <img src={bg1} style={{ width: "100%" }} />
      </Box>

      <Box display="flex" flexDirection="column" style={{ height: 600 }}>
        <OurService />
      </Box>

      <Box display="flex" flexDirection="column">
        {featuredData.map((item, index) => (
          <FeatureItem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            index={index}
          />
        ))}
      </Box>
      <Box display="flex" flexDirection="column" style={{ height: 600 }}>
        <Pricing />
      </Box>
    </div>
  );
};

export default Homepage;
