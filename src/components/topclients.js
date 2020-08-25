import React from "react";
import { Box, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import { grey } from "@material-ui/core/colors";
import { Client } from "../data";

const TopClients = () => {
  return (
    <Box id="client">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2">Our Top Clients</Typography>
      </Box>

      <Grid container spacing={1}>
        {Client.map((item, index) => {
          return (
            <Grid item xs={2} style={{ padding: 10 }}>
              <Box
                display="flex"
                key={index}
                flexDirection="column"
                alignItems="center"
              >
                <Card
                  style={{
                    height: 180,
                    width: "100%",
                    backgroundColor: grey[200],
                  }}
                >
                  <img
                    src={item.image}
                    style={{
                      padding: 10,

                      width: "100%",
                      height: "100%",
                    }}
                  ></img>
                </Card>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default TopClients;
