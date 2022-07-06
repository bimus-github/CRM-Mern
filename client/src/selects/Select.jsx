import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

function SelectData({ data, setData, name }) {
  const [item, setItem] = useState("");

  const handleChange = (event) => {
    setItem(event.target.value);
    setData(data?.filter((data) => data?.id === event.target.value)[0].id);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          required
          value={item}
          label={String(name)}
          onChange={handleChange}
        >
          {data?.map((data) => (
            <MenuItem key={data.id} value={data.id}>
              {data?.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectData;
