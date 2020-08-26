import React, { Fragment } from "react";
import { Box, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Live from "../Image/live2.png";
import Card from "@material-ui/core/Card";
import { grey } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import { TeamData } from "../data";

const Team = () => {
  return (
    <Box id="team">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2">Meet Our Team</Typography>
      </Box>

      <Grid container spacing={1}>
        {TeamData.map((item, index) => {
          return (
            <Grid item xs={2} key={index} style={{ padding: 10 }}>
              <Card
                style={{
                  marginTop: 10,
                  height: 180,
                  width: "100%",
                  backgroundColor: grey[200],
                }}
              >
                <Box display="flex" flexDirection="column" alignItems="center">
                  <img
                    src={item.image}
                    style={{
                      backgroundColor: "red",
                      borderRadius: 10,
                      margin: 10,
                      width: 80,
                      height: 80,
                    }}
                  ></img>
                </Box>
                <Typography
                  variant="body1"
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    margin: 15,
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="body1"
                  style={{ textAlign: "center", marginTop: -15 }}
                >
                  {item.post}
                </Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Team;
