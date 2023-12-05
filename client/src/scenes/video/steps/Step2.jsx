import React from "react";
import HorizontalStepper from "../../../components/HorizontalStepper";
import { Typography, Box, Button } from "@mui/material";
import MapCard from "../../../components/MapCard";

import CentreInterets from "../../../components/CentreInterets";
import TrancheAge from "../../../components/TrancheAge";
import Genre from "../../../components/Genre";

import { useNavigate } from "react-router-dom";

const Step2 = () => {

  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate("/step3");
  };



  return (
    <Box>
      <HorizontalStepper />

      <Box style={{ marginTop: "1rem" }}>
        <Box style={{ marginTop: "3rem" }}>
          <Typography
            fontFamily="DM sans"
            fontSize="30px"
            fontWeight="700"
            style={{ marginBottom: "22px" }}
          >
            Filtrage par zone géographique
          </Typography>

          <Typography
            fontFamily="DM sans"
            fontSize="25px"
            fontWeight="500"
            style={{ marginBottom: "22px", textAlign: "center" }}
          >
            Sélectionnez la zone géographique où vous trouvez votre audience.
          </Typography>

          <div style={{ textAlign: "center" }}>
            <MapCard />
          </div>
        </Box>

        <Box style={{ marginTop: "5rem" }}>
          <Typography
            fontFamily="DM sans"
            fontSize="30px"
            fontWeight="700"
            style={{ marginBottom: "3rem" }}
          >
            Filtrage par centres d’intérêts
          </Typography>

          <CentreInterets />
        </Box>

        <Box style={{ marginTop: "5rem" }}>
          <Typography
            fontFamily="DM sans"
            fontSize="30px"
            fontWeight="700"
            style={{ marginBottom: "3rem" }}
          >
            Filtrage par tranche d’age
          </Typography>

          <TrancheAge />
        </Box>

        <Box style={{ marginTop: "5rem" }}>
          <Typography
            fontFamily="DM sans"
            fontSize="30px"
            fontWeight="700"
            style={{ marginBottom: "22px" }}
          >
            Filtrage par genre
          </Typography>
          <Genre />
        </Box>

        <Box style={{ marginTop: "7rem" }}>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              textAlign: "center"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="28"
              viewBox="0 1 30 32"
              fill="none"
              style={{ marginTop: "-1.5rem" , marginLeft: "3rem" }}
            >
              <path
                d="M14.9432 12.2933H18.5262V21.2509H14.9432V12.2933ZM14.9414 23.0424H18.5244V26.6254H14.9414V23.0424Z"
                fill="#C61232"
              />
              <path
                d="M19.9015 1.90258C19.278 0.729145 18.0634 0 16.7341 0C15.4048 0 14.1901 0.729145 13.5667 1.90438L0.420592 26.7401C0.128876 27.2855 -0.0156259 27.8975 0.0013389 28.5158C0.0183037 29.134 0.196149 29.7372 0.517333 30.2658C0.83389 30.7967 1.28345 31.236 1.82164 31.5401C2.35983 31.8442 2.96803 32.0027 3.58619 32H29.882C31.1504 32 32.2987 31.3514 32.9526 30.2658C33.2733 29.737 33.4509 29.1339 33.4678 28.5157C33.4848 27.8976 33.3406 27.2856 33.0494 26.7401L19.9015 1.90258ZM3.58619 28.4169L16.7341 3.58123L29.8909 28.4169H3.58619Z"
                fill="#C61232"
              />
            </svg>

            <Typography
              fontFamily="DM sans"
              fontSize="18px"
              fontWeight="400"
              color="#C61232"
              style={{
                marginBottom: "22px",
                textAlign: "center",
                marginLeft: "3rem",
              }}
            >
              Si vous ignorez cette étape, tous les spectateurs de votre
              publicité auront la même priorité, par défaut.
            </Typography>

       

          </Box>

        

        </Box>

       
      </Box>
    <Box style={{  display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
      <Button
          variant="contained"
          sx={{
            mt: 5,
            mb: 5,
            mr: 1,
            color: "white",
            background: "red",
            fontFamily: "DM sans",
            fontSize: "20px",
            fontWeight: '700',
            p: "10px 40px",
          }}
          onClick={handleUploadClick}
        >
          Ciblage
        </Button>
    </Box>

    </Box>
  );
};

export default Step2;
