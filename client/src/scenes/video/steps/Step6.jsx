import React, { useState } from "react";
import HorizontalStepper from "../../../components/HorizontalStepper";
import { Typography, Box, TextField, IconButton } from "@mui/material";
//import { useNavigate } from "react-router-dom";
import UploadIcon from "@mui/icons-material/Upload";

const Step6 = () => {
  //const navigate = useNavigate();

 /* const handleUploadClick = () => {
    navigate("/step5");
  }; */


  //add Response Mapping logic
  const [ResponseField, setResponseField] = useState([
    {
      id: 1,
      label: "Reponse",
      defaultValue: "Saisir le Reponse 1 ou importer image",
    },
  ]);

  const addResponseField = () => {
    const newResponseField = [...ResponseField];
    const newFieldNumber = newResponseField.length + 1;

    newResponseField.push({
      id: newFieldNumber,
      label: `Reponse ${newFieldNumber}`,
      defaultValue: `Saisir le Reponse ${newFieldNumber} ou importer image`,
    });

    setResponseField(newResponseField);
  };

  return (
    <Box>
      <HorizontalStepper />

      <Box style={{ marginTop: "1rem" }}>
        <Typography
          fontFamily="DM sans"
          fontSize="30px"
          fontWeight="700"
          style={{ marginBottom: "22px" }}
        >
          Questions à choix multiples
        </Typography>



        {/* QUESTION BOX */}
        <Box>
         
          <Box display="flex" alignItems="center" textAlign="center">
            <TextField
              required
              id="outlined-required"
              label="Question 1"
              defaultValue="Saisir votre question et importer image "
              style={{ flex: 0.9, marginLeft: "1rem", marginTop: "2.5rem" }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                  fontFamily: "DM sans",
                  fontWeight: "700",
                  marginTop: "-15px",
                },
              }}
            />
            <Box style={{ marginLeft: "5rem", marginTop: "2rem" }}>
              <IconButton>
                <UploadIcon style={{ fontSize: "2.5rem", color: "#FF000061" }} />
              </IconButton>
            </Box>
          </Box>
          <Typography
            color="#C61232"
            fontFamily="DM sans"
            fontSize="15px"
            fontWeight="400"
            style={{ marginLeft: "5rem" }}
          >
            + Ajouter une autre Question
          </Typography>
          <Typography
            fontFamily="DM sans"
            fontSize="22px"
            fontWeight="700"
            style={{ marginTop: "3rem", marginLeft: "5rem" }}
          >
            Réponses
          </Typography>
          {ResponseField.map((field) => (
            <Box
              key={field.id}
              display="flex"
              alignItems="center"
              textAlign="center"
              style={{ margin: "auto", width: "50%" }}
            >
              <TextField
                required
                id={`outlined-required-${field.id}`}
                label={field.label}
                defaultValue={field.defaultValue}
                style={{ flex: 1, marginLeft: "1rem", marginTop: "2.5rem" }}
                InputLabelProps={{
                  style: {
                    fontSize: "20px",
                    fontFamily: "DM sans",
                    fontWeight: "700",
                    marginTop: "-15px",
                  },
                }}
              />
              <Box style={{ marginLeft: "5rem", marginTop: "2rem" }}>
                <IconButton>
                  <UploadIcon style={{ fontSize: "2.5rem", color: "#FF000061" }} />
                </IconButton>
              </Box>
            </Box>
          ))}
          <Typography
            color="#C61232"
            fontFamily="DM sans"
            fontSize="15px"
            fontWeight="400"
            style={{ marginLeft: "20rem", cursor: "pointer" }}
            onClick={addResponseField}
          >
            + Ajouter une autre QCM
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Step6;
