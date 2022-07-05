import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

function CardForHome({ prop }) {
  return (
    <Grid xs={6} lg={4} item>
      <Card sx={{ minWidth: 345 }} xs={8}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image={prop.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {prop.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default CardForHome;
