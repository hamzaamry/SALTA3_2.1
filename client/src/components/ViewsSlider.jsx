import React, { useState } from "react";
import { Box, Typography, Slider } from "@mui/material";

const VuesSlider = () => {
  const [value, setValue] = useState(1000);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const marks = [
    { value: 500, label: "500" },
    { value: 1000, label: "1000" },
    { value: 5000, label: "5000" },
    { value: 10000, label: "10000" },
    { value: 50000, label: "50000" },
  ];

  return (
    <Box sx={{ marginTop: "2rem" }}>
      <Typography
        fontFamily="DM sans"
        fontSize="25px"
        fontWeight="500"
        style={{ marginBottom: "1rem", textAlign: "center" }}
      >
        Sélectionnez le nombre de vues que vous souhaitez.
      </Typography>

      <Slider
        value={value}
        onChange={handleChange}
        step={1}
        marks={marks}
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => `${value}`}
        aria-labelledby="slider"
        style={{
          color: "#443DF6",
          width: "80%",
          margin: "0 auto",
        }}
      />
      <Typography>{`Selected Views: ${value}`}</Typography>
    </Box>
  );
};

export default VuesSlider;
