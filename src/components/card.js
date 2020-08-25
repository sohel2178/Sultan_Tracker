import React from "react";

import { Box } from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

import Live from "./Image/review.webp";

const ReviewCard = () => {
  return (
    <Box>
      <Card style={{ maxWidth: 500, maxHeight: 300 }}>
        <Box display="flex" justifyContent="center" style={{ marginTop: 10 }}>
          <img src={Live} style={{ height: "50%", borderRadius: 10 }} />
        </Box>

        <CardHeader title="hello" subheader="September 14, 2016" />
        <CardMedia
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
export default ReviewCard;
