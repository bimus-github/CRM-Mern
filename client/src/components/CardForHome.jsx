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
      <Card sx={{ width: 345, height: 400 }} xs={8}>
        <CardActionArea style={{ width: "100%", height: "100%" }}>
          <CardMedia
            style={{
              width: "100%",
              height: "85%",
            }}
            component="img"
            height="100%"
            image={prop.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <div style={{ fontFamily: "cursive" }}>{prop.name}</div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default CardForHome;
