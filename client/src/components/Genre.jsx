import React, { useState } from "react";
import { Box, Typography, Checkbox, FormControlLabel } from "@mui/material";

const Genre = () => {
  const [checkedHommes, setCheckedHommes] = useState(false);
  const [checkedFemmes, setCheckedFemmes] = useState(false);

  const handleCheckboxChange = (genre) => {
    if (genre === "hommes") {
      setCheckedHommes(!checkedHommes);
    } else if (genre === "femmes") {
      setCheckedFemmes(!checkedFemmes);
    }
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
        style={{ marginBottom: '22px', textAlign: 'center' }}
      >
        Sélectionnez la catégorie souhaitée
      </Typography>

      <Box
            style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "1rem",
            }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedHommes}
              onChange={() => handleCheckboxChange("hommes")}
              style={{ color: "#1DC9A0" }}
            />
          }
          label={<Typography style={{ fontSize: "36px", fontWeight: "400",  fontFamily:"DM sans" , marginRight: "5rem"}}>Hommes</Typography>}
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={checkedFemmes}
              onChange={() => handleCheckboxChange("femmes")}
              style={{ color: "#1DC9A0" }}
            />
          }
          label={<Typography style={{ fontSize: "36px", fontWeight: "400" ,  fontFamily:"DM sans" }}>Femmes</Typography>}
        />
      </Box>
    </Box>
  );
};

export default Genre;
