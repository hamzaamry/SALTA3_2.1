import React from "react";
import HorizontalStepper from "../../../components/HorizontalStepper";
import { Typography, Box, Button } from "@mui/material";

import ViewsSlider from "../../../components/ViewsSlider"
import { useNavigate } from "react-router-dom";

const Step3 = () => {

  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate("/step4");
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
          Classement des critères de ciblage
        </Typography>

        <Typography
          fontFamily="DM sans"
          fontSize="25px"
          fontWeight="500"
          style={{ marginBottom: "22px", textAlign: "center" }}
        >
          Classez vos critères de ciblage selon ses priorités
        </Typography>

        <Typography
          fontFamily="DM sans"
          fontSize="30px"
          fontWeight="700"
          style={{ marginBottom: "22px" }}
        >
          phases d’algorithme
        </Typography>

        <Typography
          fontFamily="DM sans"
          fontSize="24px"
          fontWeight="400"
          style={{ marginBottom: "3rem" }}
        >
          Nous avons mis en place un algorithme de ciblage innovant pour vous
          aider à toucher les personnes les plus pertinentes pour votre
          entreprise.
        </Typography>

        <Typography
          fontFamily="DM sans"
          fontSize="24px"
          fontWeight="400"
          style={{ marginBottom: "3rem" }}
        >
          Notre algorithme commence par cibler les individus qui correspondent
          le mieux à vos critères de sélection, puis étend progressivement la
          portée de votre publicité pour toucher un plus large public tout en
          cherchant à identifier les personnes les plus intéressées par votre
          offre.
        </Typography>
        <Typography
          fontFamily="DM sans"
          fontSize="24px"
          fontWeight="400"
          style={{ marginBottom: "3rem" }}
        >
          Nous avons développé plusieurs niveaux de filtrage et de traitement
          pour garantir des résultats optimaux. Ainsi, notre algorithme passe
          automatiquement d'un niveau à l'autre dès que la tâche est accomplie,
          ce qui permet de réduire les coûts et d'optimiser votre retour sur
          investissement.
        </Typography>
        <Typography
          fontFamily="DM sans"
          fontSize="24px"
          fontWeight="400"
          style={{ marginBottom: "3rem" }}
        >
          Cependant, si vous le souhaitez, vous pouvez définir une durée
          spécifique pour chaque phase pour mieux contrôler votre budget et
          obtenir des résultats encore plus précis.
        </Typography>


        
        <Typography
          fontFamily="DM sans"
          fontSize="30px"
          fontWeight="700"
          style={{ marginBottom: "22px" }}
        >
          Nombre de vues 
        </Typography>
        <ViewsSlider />


        <Typography
          fontFamily="DM sans"
          fontSize="30px"
          fontWeight="400"
          style={{ marginBottom: "22px" ,  textAlign: 'center'}}
        >
          Vous aurez au moins 1000 vues sur cette publicité. 
        </Typography>


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
            fontWeight: '500',
            p: "10px 40px",
            borderRadius:'8px',
          }}
          onClick={handleUploadClick}
        >
          Planification
        </Button>
    </Box>

      </Box>
    </Box>
  );
};

export default Step3;
