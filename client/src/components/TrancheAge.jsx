import React, { useState } from "react";

import {Box , Typography , Slider  } from "@mui/material";

const TrancheAge = () => {
  const [value, setValue] = useState([13, 70]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%", // Set to 100% of the viewport height
      }}
    >
      <Typography
        fontFamily="DM sans"
        fontSize="25px"
        fontWeight="500"
        style={{ marginBottom: '2rem', textAlign: 'center' }}
      >
        Sélectionnez la tranche d’âge souhaitée.
      </Typography>

      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={13}
        max={70}
        style={{
          color: "#443DF6",
          width: "80%", 
        }}
      />
      <Typography>{`Age Range: ${value[0]} - ${value[1]}`}</Typography>
    </Box>
  );
};

export default TrancheAge;
