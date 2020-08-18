import React, { Fragment } from "react";
import { Box, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Live from "./Image/live2.png";
import Card from "@material-ui/core/Card";
import { grey } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";

const FAG = () => {
  return (
    <Fragment>
      <Box display="flex" style={{ marginTop: 20 }}>
        <Box
          display="flex"
          flexDirection="column"
          flexGrow="1"
          style={{ maxWidth: "50%", minWidth: "50%" }}
        >
          <Typography
            variant="h4"
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Frequently Asked Question?
          </Typography>

          <Typography variant="h6" style={{ textAlign: "center" }}>
            About out Site
          </Typography>

          <Box
            style={{
              marginTop: 10,
              padding: 20,
            }}
          >
            <Typography variant="h6" style={{ textAlign: "center" }}>
              About out Site?
            </Typography>

            <Typography
              display=" flex"
              justifyContent="center"
              variant="body1"
              style={{ textAlign: "center" }}
            >
              Abid A.Sobhan: Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It
              was popularised in
            </Typography>
          </Box>
        </Box>

        <Box
          flexDirection="column"
          flexGrow="1"
          alignItems="center"
          style={{ padding: 10 }}
        >
          <Grid container style={{ width: "100%", overflow: "hidden" }}>
            <Grid item xs={4} style={{ padding: 10 }}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Card
                  style={{
                    height: 180,
                    width: 150,
                    backgroundColor: grey[200],
                  }}
                >
                  <Avatar
                    style={{
                      height: 60,
                      width: 60,
                      justifyContent: "center",
                      marginLeft: "30%",
                      marginTop: 20,
                    }}
                  >
                    <img
                      src={Live}
                      style={{
                        marginTop: 20,
                        width: 40,
                        height: 40,
                      }}
                    ></img>
                  </Avatar>

                  <Typography
                    variant="h4"
                    style={{ textAlign: "center" }}
                  ></Typography>
                  <Typography
                    variant="h6"
                    style={{ textAlign: "center" }}
                  ></Typography>
                  <Typography
                    variant="h5"
                    style={{ textAlign: "center" }}
                  ></Typography>
                  <Typography
                    variant="h5"
                    style={{ textAlign: "center", margin: 50 }}
                  ></Typography>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Fragment>
  );
};

export default FAG;
