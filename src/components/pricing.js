import React, { Fragment } from "react";
import { Typography, Box } from "@material-ui/core";

import Card from "@material-ui/core/Card";
import Live from "./Image/live2.png";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { grey } from "@material-ui/core/colors";
import { PricingData } from "../data";

const Pricing = () => {
  return (
    <Fragment>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2" style={{ padding: 50 }}>
          {" "}
          Pricing Plans{" "}
        </Typography>
      </Box>

      <Grid container style={{ width: "100%", overflow: "hidden" }}>
        {PricingData.map((item, index) => {
          return (
            <Grid item xs={4} style={{ padding: 10 }}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Card
                  style={{
                    height: 400,
                    width: 275,
                    backgroundColor: "#2A2E43",
                  }}
                >
                  <img
                    src={item.image}
                    style={{
                      width: 100,
                      height: 100,
                      marginLeft: "30%",
                    }}
                  ></img>

                  <Typography
                    variant="h4"
                    style={{ textAlign: "center", color: "#FFFFFF" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{ textAlign: "center", color: "#FFFFFF" }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="h5"
                    style={{ textAlign: "center", color: "#FFFFFF" }}
                  >
                    {item.price}
                  </Typography>
                  <Typography
                    variant="h5"
                    style={{
                      textAlign: "center",
                      margin: 50,
                      color: "#FFFFFF",
                    }}
                  >
                    {item.Subs}
                  </Typography>
                </Card>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
};

export default Pricing;
