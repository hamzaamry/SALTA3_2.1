import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import fleshPreviewImage from "../../assets/png/flesh-preview.png";
import { styled } from "@mui/system";


const RocketPage = () => {

  const StyledLine = styled("div")({
    width: "2px",
    height: "14px",
    flexShrink: 0,
    background: "#F00",
  });

  return (
    <div >
 
      <Stack
        direction="row"
        style={{
          padding: "2rem",
          backgroundColor: "#FFF",
          minHeight: "90vh",
        }}
      >
        <Box>
          <img
            src={fleshPreviewImage}
            alt="Flesh Preview"
            style={{ width: "150%" }}
          />
        </Box>
        <Box marginTop="15rem" marginLeft="10rem"  width="40%">

        <div
              style={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <StyledLine />
          <Typography
            fontFamily="DM sans"
            fontSize="16px"
            fontWeight="500"
            color="#6D6460"
            marginLeft="1rem"
          >
            A propos
          </Typography>

          </div>

          <Typography
            fontFamily="DM sans"
            fontSize="40px"
            fontWeight="700"
            lineHeight="50px"
            marginBottom="1.5rem"
          >
            Bienvenue sur Salta3, nous sommes ravis de vous accueillir !
          </Typography>

          <Typography
            fontFamily="DM sans"
            fontSize="16px"
            fontWeight="400"
            color="#6D6460"
            marginBottom="1.5rem"
            width="90%"
          >
            Nous sommes une équipe de personnes créatives engagées à apporter au
            monde une touche de beauté grâce à nos services. Nous aimons ce que
            nous faisons et nous le faisons avec passion.
          </Typography>
          <Typography
            fontFamily="DM sans"
            fontSize="16px"
            fontWeight="400"
            color="#6D6460"
            marginBottom="1.5rem"
            width="90%"
          >
            Salta3 est l’un des projets développés par « Dallali Digital
            Innovation Group », une plateforme de diffusion de vidéos
            publicitaires.
          </Typography>
          <Typography
            fontFamily="DM sans"
            fontSize="16px"
            fontWeight="400"
            color="#6D6460"
            marginBottom="3rem"
            width="90%"
          >
            Notre site web, salta3.com, est destiné aux annonceurs pour
            l’hébergement de leurs annonces, tandis que notre application mobile
            Salta3 permet de diffuser les publicités en payant les utilisateurs.
          </Typography>

          <Button
              variant="contained"
              sx={{
                padding: '15px',
                width: "30%",
                color: "white",
                background: "red",
                fontFamily: "DM sans",
                fontSize: "14px",
                fontWeight: "500",
                borderRadius: '1px' ,
              }}
              >
            Voir plus
          </Button>
        </Box>
      </Stack>
    </div>
  );
};

export default RocketPage;
