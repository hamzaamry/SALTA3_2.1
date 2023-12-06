import React, { useCallback } from "react";
import HorizontalStepper from "../../../components/HorizontalStepper";
import { Typography, Box, TextField, Button } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import MapCard from "../../../components/MapCard";

const Step1 = () => {
  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate("/step2");
  };

  const onDrop = useCallback((acceptedFiles) => {
    console.log("Dropped files:", acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
          Importer
        </Typography>

        <TextField
          required
          id="outlined-required"
          label="Nom de votre compagne"
          defaultValue="Saisir le nom de votre compagne"
          style={{ width: "90%", marginTop: "20px" }}
          InputLabelProps={{
            style: {
              fontSize: "20px",
              fontFamily: "DM sans",
              fontWeight: "700",
              marginTop: "-15px",
            },
          }}
        />
        <Box style={{ display: "flex", marginTop: "2rem" }}>
          <Box
            {...getRootProps()}
            sx={{
              border: `2px dashed ${isDragActive ? "blue" : "black"}`,
              borderRadius: 1,
              padding: 5,
              textAlign: "center",
              marginTop: 2,
              marginRight: 2,
              width: "40%",
              height: "15rem",
            }}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here...</p>
            ) : (
              <p>Importer une Video</p>
            )}
          </Box>

          <TextField
            id="outlined-multiline-static"
            label="Description de votre video"
            multiline
            rows={10}
            defaultValue="Description ..."
            style={{ width: "46.5%", margin: "20px" }}
            InputLabelProps={{
              style: {
                fontSize: "20px",
                fontFamily: "DM sans",
                fontWeight: "700",
                marginTop: "-15px",
              },
            }}
          />
        </Box>
      </Box>
      <TextField
        required
        id="outlined-required"
        label="Nom de votre publicité"
        defaultValue="Saisir le nom de votre publicité"
        style={{ width: "90%", marginTop: "2.5rem" }}
        InputLabelProps={{
          style: {
            fontSize: "20px",
            fontFamily: "DM sans",
            fontWeight: "700",
            marginTop: "-15px",
          },
        }}
      />

      <Box style={{ marginTop: "2.5rem" }}>
        <Typography
          fontFamily="DM sans"
          fontSize="30px"
          fontWeight="700"
          style={{ marginBottom: "22px" }}
        >
          Contact
        </Typography>

        <TextField
          required
          id="outlined-required"
          label="Nom de votre publicité"
          defaultValue="Saisir le nom de votre publicité"
          style={{ width: "90%", marginTop: "1.5rem" }}
          InputLabelProps={{
            style: {
              fontSize: "20px",
              fontFamily: "DM sans",
              fontWeight: "700",
              marginTop: "-15px",
            },
          }}
        />

        <TextField
          required
          id="outlined-required"
          label="Nom de votre publicité"
          defaultValue="Saisir le nom de votre publicité"
          style={{ width: "90%", marginTop: "3rem" }}
          InputLabelProps={{
            style: {
              fontSize: "20px",
              fontFamily: "DM sans",
              fontWeight: "700",
              marginTop: "-15px",
            },
          }}
        />

        <TextField
          required
          id="outlined-required"
          label="Nom de votre publicité"
          defaultValue="Saisir le nom de votre publicité"
          style={{ width: "90%", marginTop: "3rem" }}
          InputLabelProps={{
            style: {
              fontSize: "20px",
              fontFamily: "DM sans",
              fontWeight: "700",
              marginTop: "-15px",
            },
          }}
        />

        <Button
          variant="contained"
          sx={{
            mt: 5,
            mb: 5,
            mr: 1,
            color: "white",
            background: "red",
            fontFamily: "DM sans",
            fontSize: "15px",
            p: "10px 20px",
            borderRadius:'8px',
          }}
          onClick={handleUploadClick}
        >
          Audience
        </Button>
      </Box>
    </Box>
  );
};

export default Step1;
