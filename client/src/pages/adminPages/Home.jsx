import React from "react";
import RouteHomeAdmin from "../../routes/RouteHomeAdmin";
import CardForHome from "../../components/CardForHome";

import Grid from "@mui/material/Grid";
import { dataCard } from "../../images";

function Home() {
  return (
    <RouteHomeAdmin>
      <Grid container spacing={3}>
        {dataCard?.map((item) => (
          <CardForHome prop={item} />
        ))}
      </Grid>
    </RouteHomeAdmin>
  );
}

export default Home;
