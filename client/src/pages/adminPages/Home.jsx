import React from "react";
import RouteHomeAdmin from "../../routes/RouteHomeAdmin";
import CardForHome from "../../components/CardForHome";

import Grid from "@mui/material/Grid";
import { dataCard } from "../../images";
import { Button } from "@mui/material";

function Home({ setUser }) {
  return (
    <RouteHomeAdmin>
      <>
        <Grid container spacing={3}>
          {dataCard?.map((item) => (
            <CardForHome key={item._id} prop={item} />
          ))}
        </Grid>
        <Button
          onClick={() => setUser({ email: "", password: "" })}
          color="error"
          style={{ color: "#000", backgroundColor: "#fff" }}
          variant="outlined"
          sx={{ my: 1, mx: 1.5 }}
        >
          Logout
        </Button>
      </>
    </RouteHomeAdmin>
  );
}

export default Home;
