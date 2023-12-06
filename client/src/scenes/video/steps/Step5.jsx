import React from "react";
import phone from "../../../assets/png/phone.png";
import pc from "../../../assets/png/pc.png";

import HorizontalStepper from "../../../components/HorizontalStepper";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Step5 = () => {

  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate("/step6");
  };


  return (
    <Box>
      <HorizontalStepper />
      <Box style={{ marginTop: "1rem" }}>
        <Typography
          fontFamily="DM sans"
          fontSize="30px"
          fontWeight="700"
          style={{ marginBottom: "8rem" }}
        >
          Questions à choix multiples
        </Typography>

        <Box style={{ display: "flex", alignItems: "center" }}>
          <img src={pc} alt="PC" style={{ width: "25rem", height: "auto" , marginLeft:'2.5rem' }} />

          <Box>
            <Typography
              fontFamily="DM sans"
              fontSize="24px"
              fontWeight="400"
              style={{ marginBottom: "3rem", marginLeft: "3rem", width: "70%" }}
            >
              Il est important de souligner que vous aurez la possibilité
              d'accéder aux statistiques et données des réponses des QCM
              soumises par les utilisateurs de l'application mobile Salta3.
            </Typography>

            <Typography
              fontFamily="DM sans"
              fontSize="24px"
              fontWeight="400"
              style={{ marginBottom: "3rem", marginLeft: "3rem", width: "80%" }}
            >
              Ces informations vous permettront de mener une analyse approfondie
              des résultats, de repérer les tendances et les comportements de
              vos consommateurs et clients, et de prendre des décisions plus
              éclairées pour votre stratégie marketing future.
            </Typography>
          </Box>
        </Box>

        <Box style={{ display: "flex", alignItems: "center" }}>
          <Box>
            <Typography
              fontFamily="DM sans"
              fontSize="24px"
              fontWeight="400"
              style={{ marginBottom: "3rem", marginLeft: "3rem", width: "70%" }}
            >
              Cette transparence et collaboration contribueront à optimiser
              l'impact de vos publicités et à mieux comprendre les besoins de
              votre audience cible.
            </Typography>

            <Typography
              fontFamily="DM sans"
              fontSize="24px"
              fontWeight="400"
              style={{ marginBottom: "3rem", marginLeft: "3rem", width: "80%" }}
            >
              C'est pourquoi nous vous encourageons vivement à faire preuve de
              créativité lors de l'élaboration de vos questions, afin de
              maximiser la collecte de données.
            </Typography>

            <Typography
              fontFamily="DM sans"
              fontSize="24px"
              fontWeight="400"
              style={{ marginBottom: "3rem", marginLeft: "3rem", width: "80%" }}
            >
              En analysant attentivement les résultats, vous pourrez affiner
              votre stratégie marketing et vous rapprocher davantage de vos
              clients.
            </Typography>
          </Box>

          <img
            src={phone}
            alt="phone"
            style={{ width: "23rem", height: "auto" , marginRight:'6rem' }}
          />
        </Box>

        <Box style={{  display: 'flex', justifyContent: 'center', alignItems: 'center' , marginTop:'5rem' }} >
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
            fontWeight: '400',
            p: "10px 40px",
            lineHeight: '28px',
            borderRadius:'8px',
          }}
          onClick={handleUploadClick}
        >
          Commencer
        </Button>
    </Box>


      </Box>
    </Box>
  );
};

export default Step5;
