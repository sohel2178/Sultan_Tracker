import React, { Fragment } from "react";
import { Box, Typography } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const FeatureItem = ({ image, title, description, index }) => {
  return (
    <Fragment>
      <Box display="flex" style={{ marginTop: 20 }}>
        <Box
          data-aos="fade-right"
          // data-aos-delay="100"
          display="flex"
          flexGrow="1"
          style={{ maxWidth: "50%", minWidth: "50%" }}
          order={2}
        >
          <img src={image} style={{ width: "80%" }} />
        </Box>

        <Box
          data-aos="fade-left"
          display="flex"
          flexDirection="column"
          flexGrow="1"
          alignItems="center"
          justifyContent="center"
          style={{ padding: 10 }}
          order={index % 2 === 0 ? 3 : 1}
        >
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body1" style={{ marginTop: 10 }}>
            {description}
          </Typography>
        </Box>
      </Box>
    </Fragment>
  );
};

export default FeatureItem;
