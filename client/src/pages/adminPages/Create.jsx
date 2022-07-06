import React from "react";
import RouteHomeAdmin from "../../routes/RouteHomeAdmin";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid, IconButton } from "@mui/material";
import Fingerprint from "@mui/icons-material/Fingerprint";

import CreateTeacher from "../../components/CreateTeacher";
import CreateGroup from "../../components/CreateGroup";
import CreateStudent from "../../components/CreateStudent";

const steps = ["Create Teacher", "Create Group", "Create Student"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <CreateTeacher />;
    case 1:
      return <CreateGroup />;
    case 2:
      return <CreateStudent />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

function Create() {
  const [activeStep, setActiveStep] = React.useState(0);
  return (
    <RouteHomeAdmin>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container component="main" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Stepper
              activeStep={activeStep}
              sx={{ pt: 3, pb: 5 }}
              style={{ minWidth: "1000px" }}
            >
              <Grid
                alignItems={"center"}
                justifyContent={"center"}
                container
                spacing={3}
              >
                {steps.map((label) => (
                  <Grid xs={4} sm={4}>
                    <IconButton
                      aria-label="fingerprint"
                      color="success"
                      style={{
                        color: steps[activeStep] === label ? "blue" : "",
                        fontSize: steps[activeStep] === label ? "28px" : "",
                        width: "100%",
                        justifyContent: "center",
                      }}
                      onClick={() => {
                        if (label === steps[0]) return setActiveStep(0);
                        if (label === steps[1]) return setActiveStep(1);
                        if (label === steps[2]) return setActiveStep(2);
                      }}
                      key={label}
                    >
                      {label}
                    </IconButton>
                  </Grid>
                ))}
              </Grid>
            </Stepper>
            <React.Fragment>{getStepContent(activeStep)}</React.Fragment>
          </Paper>
        </Container>
      </ThemeProvider>
    </RouteHomeAdmin>
  );
}

export default Create;
