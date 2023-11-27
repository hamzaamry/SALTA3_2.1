import React from "react";
//import datamaps from "./maps/TunisGeo.json";
import {useNavigate} from 'react-router-dom';

import {
  Box,
  Button,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useTheme,
} from "@mui/material";

//import CheckboxTree from "react-checkbox-tree";
//import { TextareaAutosize } from "@mui/base";
//import { useGetGeographyQuery } from "state/api";
import Header from "../../components/Header";
//import { ResponsiveChoropleth } from "@nivo/geo";

//import logo from "../../assets/png/logo 1.png";
//import { AccountCircle } from "@mui/icons-material";


import styled from "styled-components";

const Video = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate("/step1"); 
  }

  const steps = [
    {
      label: "importez votre publicité.",
    },
    {
      label: "selectionez votre audiance",
    },
    {
      label: "personalisez votre critére de ciblage",
    },
    {
      label: "planifiez vore publicité",
    },
    {
      label: "QCM",
    },
    {
      label: "Payer et lancez-vous",
    },
  ];

  const StyledStepLabel = styled.div`
    font-size: 30px;
    font-family: "DM sans";
    color: ${theme.palette.grey[400]};
  `;

  const StyledStepIcon = styled.div`

    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2856AF;
    border-radius: 50%;
    color: ${theme.palette.common.white};
 
  `;

  return (
    <Box m="1.5rem 2.5rem">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Stepper orientation="vertical">
            {steps.map((step, index) => (
              <Step key={index}>
                <StepLabel StepIconComponent={() => <StyledStepIcon>{index + 1}</StyledStepIcon>} id="test2" sx={{ height: '100%', display: 'flex', alignItems: 'flex-start'}}>
                  <StyledStepLabel>{step.label}</StyledStepLabel>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid item xs={9}>
          <Header
            title="Salta3"
            subtitle="Soyez le bienvenue dans l'espace publicitaire Salta3 !"
          />

          <Typography
            color={theme.palette.grey[500]}
            fontFamily="DM sans"
            fontSize="20px"
            style={{ marginBottom: "22px" }}
          >
            Pour importer votre vidéo publicitaire, il vous suffit de suivre
            quelques étapes simples et efficaces.
          </Typography>

          <Typography
            color={theme.palette.grey[500]}
            fontFamily="DM sans"
            fontSize="20px"
            style={{ marginBottom: "22px" }}
          >
            Tout d'abord, sur la première interface, vous pouvez importer votre
            vidéo publicitaire et ajouter des informations basiques telles que
            le nom de la publicité, sa description ciblée, ainsi que vos
            informations de contact pour être facilement joignable.
          </Typography>

          <Typography
            color={theme.palette.grey[500]}
            fontFamily="DM sans"
            fontSize="20px"
            style={{ marginBottom: "22px" }}
          >
            Ensuite, sur la deuxième interface, vous pouvez définir votre
            audience en utilisant des critères tels que la localisation
            géographique, les centres d'intérêts, la tranche d'âge et le genre.
            Avec la troisième interface, vous pouvez classer vos critères de
            ciblage selon leur priorité et choisir la durée pendant laquelle
            l'algorithme de ciblage passe d'une phase à une autre.
          </Typography>

          <Typography
            color={theme.palette.grey[500]}
            fontFamily="DM sans"
            fontSize="20px"
            style={{ marginBottom: "22px" }}
          >
            Vous pouvez également planifier le moment précis où vous souhaitez
            que votre publicité soit diffusée en utilisant le calendrier et
            l'horloge dans la dernière interface.
          </Typography>
          <Typography
            color={theme.palette.grey[500]}
            fontFamily="DM sans"
            fontSize="20px"
            style={{ marginBottom: "22px" }}
          >
            Vous pouvez également sélectionner le nombre de vues que vous
            souhaitez acheter pour votre publicité. Enfin, une interface
            supplémentaire est disponible pour les annonceurs qui souhaitent
            ajouter des quiz ou des questionnaires QCM à leur publicité.
          </Typography>

          <Typography
            color={theme.palette.grey[500]}
            fontFamily="DM sans"
            fontSize="20px"
            style={{ marginBottom: "22px" }}
          >
            Dans cette interface, les annonceurs peuvent écrire des questions
            qui vérifient si les utilisateurs ont bien compris les informations
            clés de la publicité, comme les détails du produit ou du service à
            promouvoir. <br />
            Les données collectées à travers cette interface peuvent être
            utilisées pour évaluer l'efficacité de la publicité et pour aider
            les annonceurs à mieux comprendre leur marché cible.
            <Box xs display="flex" justifyContent="center" alignItems="center">
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
                }}
                onClick={handleUploadClick}
              >
                Demarer
              </Button>
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Video;
