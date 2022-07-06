import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import LibraryAddSharpIcon from "@mui/icons-material/LibraryAddSharp";
import Stack from "@mui/material/Stack";

import { useSelector } from "react-redux";

import Select from "../selects/Select";
import MultipleSelect from "../selects/MultipleSelect";
import { languages, subjects } from "../constants";

import FileBase from "react-file-base64";

function CreateTeacher() {
  const users = useSelector((state) => state.user);

  const [user, setUser] = useState("");
  const [lang, setLang] = useState("");
  const [subjs, setSubjs] = useState("");
  const [img, setImg] = useState({ url: "", name: "" });

  const teachers = users?.filter((user) => user?.role === "teacher");

  // console.log(img);

  return (
    <React.Fragment>
      <Grid container spacing={3} style={{ maxWidth: "1000px" }}>
        <Grid item xs={8} sm={8}>
          <Select
            data={teachers?.map((user) => {
              return { name: user?.email, id: user?._id };
            })}
            setData={setUser}
            name={"Email"}
          />
        </Grid>

        <Grid
          item
          xs={4}
          sm={4}
          style={{
            width: "100%",
            height: "100%",
            alignSelf: "center",
            justifySelf: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <p style={{ width: 150 }}>Select Image</p>
            <FileBase
              type="image"
              multiple={false}
              onDone={(item) =>
                setImg({ url: item.base64, name: item.file.name })
              }
            />
          </div>
          <div style={{ display: "flex" }}>
            <p style={{ width: 150 }}>Select Passport</p>
            <FileBase
              type="image"
              multiple={false}
              onDone={(item) =>
                setImg({ url: item.base64, name: item.file.name })
              }
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumer"
            name="phoneNumber"
            label="Phone number"
            placeholder="+998 ** ### ## ##"
            fullWidth
            autoComplete="phone-number"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="homenumber"
            name="homenumber"
            label="Home number"
            placeholder="+998 ** ### ## ##"
            fullWidth
            autoComplete="home-number"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="about"
            name="about"
            label="About"
            fullWidth
            variant="outlined"
          />
        </Grid>

        <Grid item xs={6} sm={6}>
          <MultipleSelect
            data={languages
              .sort(function (a, b) {
                return a.language === b.language
                  ? 0
                  : a.language > b.language
                  ? 1
                  : -1;
              })
              .map((lang) => {
                return { id: lang.id, item: lang.language };
              })}
            name={"Language"}
            setData={setLang}
          />
        </Grid>

        <Grid item xs={6} sm={6}>
          <MultipleSelect
            data={subjects
              .sort(function (a, b) {
                return a.subject === b.subject
                  ? 0
                  : a.subject > b.subject
                  ? 1
                  : -1;
              })
              .map((sb) => {
                return { id: sb.id, item: sb.subject };
              })}
            name={"Subjects"}
            setData={setSubjs}
          />
        </Grid>
      </Grid>

      <Stack
        direction="row"
        spacing={2}
        style={{
          width: "100%",
          marginTop: "50px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          style={{ paddingLeft: "20px", paddingRight: "40px" }}
          startIcon={<ClearAllIcon />}
        >
          Cleare All
        </Button>

        <Button
          style={{ paddingLeft: "20px", paddingRight: "40px" }}
          variant="contained"
          endIcon={<LibraryAddSharpIcon />}
        >
          Save
        </Button>
      </Stack>
    </React.Fragment>
  );
}

export default CreateTeacher;
