import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import service1 from "../../assets/jpg/service1.jpg";
import service2 from "../../assets/jpg/service2.jpg";

const Services = () => {
  return (
    <>
      <Typography
        fontFamily="DM sans"
        fontSize="16px"
        fontWeight="500"
        color="#6D6460"
      >
        A propos
      </Typography>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="90vh"
      >
        <Typography variant="h2" color="red" marginBottom={4}>
          Service Salta3
        </Typography>

        <Stack direction="row" spacing={4} alignItems="center">
          {/* Service 1 */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <img
              src={service1}
              alt="Service 1"
              style={{ width: "18rem", height: "auto" }}
            />

            <Typography variant="h5" fontWeight="bold" marginTop={2}>
              Sélectionnez votre cible.
            </Typography>

            <Typography
              variant="body2"
              color="textSecondary"
              marginTop={1}
              width="60%"
            >
              Vous pouvez sélectionner votre cible selon différents critères
              (Géolocalisation, tranche d'âge, centres d'intérêts, et
              d'autres...).
            </Typography>
          </Box>

          {/* Service 2 */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <img
              src={service2}
              alt="Service 2"
              style={{ width: "18rem", height: "auto" }}
            />

            <Typography variant="h5" fontWeight="bold" marginTop={2}>
              Diffusez votre annonce.
            </Typography>

            <Typography variant="body2" color="textSecondary" marginTop={1}>
              Vous décidez du coût de votre campagne publicitaire.
            </Typography>
          </Box>

          {/* Service 3 */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <img
              src="chemin/vers/image3.jpg"
              alt="Service 3"
              style={{ width: "18rem", height: "auto" }}
            />

            <Typography variant="h5" fontWeight="bold" marginTop={2}>
              Consultez les performances de vos annonces.
            </Typography>

            <Typography
              variant="body2"
              color="textSecondary"
              marginTop={1}
              width="60%"
            >
              Afin d'optimiser votre service, nous fournissons un tableau de
              bord de statistiques.
            </Typography>
          </Box>
        </Stack>

        <Button
          variant="contained"
          sx={{
            width: "20%",
            color: "white",
            background: "red",
            fontFamily: "DM sans",
            fontSize: "12px",
            fontWeight: "500",
            p: "8px 10px",
            borderRadius: "8px",
            marginTop: "1rem",
            marginRight: "1rem",
          }}
        >
          Voir plus
        </Button>
      </Box>
    </>
  );
};

export default Services;
