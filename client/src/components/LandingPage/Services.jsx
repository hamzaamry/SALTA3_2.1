import React from "react";
import { Box, Typography, Button } from "@mui/material";
import service1 from "../../assets/jpg/service1.png";
import service2 from "../../assets/jpg/service2.png";
import service3 from "../../assets/jpg/services3.png";

import { styled } from "@mui/system";

const Services = () => {
  const StyledTitle = styled(Typography)`
    font-family: "DM sans";
    font-size: 50px;
    font-weight: 600;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      color: #000000;
    }

    span.red {
      color: #ff0000;
    }
  `;

  const StyledLine = styled("div")({
    width: "2px",
    height: "14px",
    flexShrink: 0,
    background: "#F00",
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          marginLeft: "9rem",
          marginBottom: "5rem",
          marginTop: "5rem",
        }}
      >
        <StyledLine />
        <Typography
          fontFamily="DM sans"
          fontSize="32px"
          fontWeight="500"
          color="#6D6460"
          marginLeft="1rem"
        >
          Nos services
        </Typography>
      </div>
      <StyledTitle marginBottom="3rem">
        <span>Service</span> <span className="red">Salta3</span>
      </StyledTitle>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        marginBottom= "5rem"
        alignItems="stretch"
      >
        {/* Service 1 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            flex: 1,
            maxHeight: "100%",
          }}
        >
          <img src={service1} alt="Service 1" style={{ width: "50%" }} />
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
        </div>

        {/* Service 2 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            flex: 1,
            maxHeight: "100%",
          }}
        >
          <img src={service3} alt="Service 2" style={{ width: "65%" }} />
          <Typography variant="h5" fontWeight="bold" marginTop={2}>
            Diffusez votre annonce.
          </Typography>
          <Typography variant="body2" color="textSecondary" marginTop={1}>
            Vous décidez du coût de votre campagne publicitaire.
          </Typography>
        </div>

        {/* Service 3 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            flex: 1,
            marginRight: "2rem",
          }}
        >
          <img src={service2} alt="Service 3" style={{ width: "50%" }} />
          <Typography variant="h5" fontWeight="bold" marginTop={2}>
            Consultez les performances de vos annonces.
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            marginTop={1}
            width="60%"
          >
            Afin d'optimiser votre service, nous fournissons un tableau de bord
            de statistiques.
          </Typography>
        </div>
      </Box>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom:'5rem ',
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: "15%",
            color: "white",
            background: "red",
            fontFamily: "DM sans",
            fontSize: "15px",
            fontWeight: "700",
            borderRadius: "1px",
            height: '3.5rem'
          }}
        >
          Essayer maintenant
        </Button>
      </Box>
    </>
  );
};

export default Services;
