import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import mockup from "../../assets/png/mockup.png";
import appstore from "../../assets/png/appstore.png";
import gif from "../../assets/gif/gif.gif";
import { styled } from "@mui/system";

const Bienvenue = () => {


  const StyledLine = styled("div")({
    width: "2px",
    height: "14px",
    flexShrink: 0,
    background: "#F00",
  });
  

  return (
    <div>
      <Stack
        direction="row"
        style={{
          padding: "2rem",
          backgroundColor: "#FFF0EE",
          minHeight: "90vh",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            margin: "0",
            width: "50%",
            marginLeft: "8%",
          }}
        >
          <Box marginTop="3rem" width="100%">
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
                fontSize="32px"
                fontWeight="500"
                color="#6D6460"
                marginLeft="1rem"
              >
                ads and promotions
              </Typography>
            </div>
            <Typography
              fontFamily="DM sans"
              fontSize="60px"
              fontWeight="700"
              lineHeight="70px"
              marginBottom="1.5rem"
            >
              We bring attention to your Business.
            </Typography>
            <Typography
              fontFamily="DM sans"
              fontSize="18px"
              fontWeight="400"
              color="#6D6460"
              marginBottom="3rem"
              width="80%"
            >
              Nous vous proposons des solutions innovantes pour booster votre
              entreprise.
            </Typography>
          </Box>

          <Stack direction="row">
            <Button
              variant="contained"
              sx={{
                width: "40%",
                color: "white",
                background: "red",
                fontFamily: "DM sans",
                fontSize: "14px",
                fontWeight: "700",
                borderRadius: '1px' ,
                marginRight: "1rem"
              }}
            >
              Comment ça marche ?
            </Button>
            <Button
              variant="contained"
              sx={{
                padding: '15px',
                width: "30%",
                color: "#140A05",
                fontFamily: "DM sans",
                fontSize: "14px",
                fontWeight: "700",
                border: '1px solid #6D6460',
                backgroundColor: "#FFF0EE",
                borderRadius: '1px' 
              }}
            >
              Télécharger
            </Button>
          </Stack>

          <Box
            style={{
              position: "absolute",
              bottom: "-10%",
              left: "76%",
              zIndex: 2,
            }}
          >
            <img
              src={gif}
              alt="gif"
              style={{ width: "70%", marginLeft: "1rem", marginBottom: "3rem" }}
            />

            <img src={appstore} alt="App Store" style={{ width: "80%" }} />
          </Box>
        </Box>

        <Box style={{ position: "relative", zIndex: 1 }}>
          <img
            src={mockup}
            alt="Description"
            style={{ width: "100%", marginLeft: "auto", zIndex: 999 }}
          />
          <div
            style={{
              position: "absolute",
              top: "8%",
              right: "5.8%",
              height: "84%",
              width: "245px",
              backgroundColor: "white",
              zIndex: -1,
              borderRadius: "30px",
            }}
          ></div>
        </Box>
      </Stack>
    </div>
  );
};

export default Bienvenue;
