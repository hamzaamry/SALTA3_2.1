import React from 'react'
import { Box, Typography, Button, Stack } from '@mui/material'

const Bienvenue = () => {
  return (
    <div>
      <Stack
        direction="row"
        style={{
          padding: "2rem",
          backgroundColor: "#FFF0EE", // Ajout de la couleur de fond7
          minHeight: "90vh",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", // Alignez les éléments en haut au lieu du centre
            textAlign: "left", // Alignez le texte à gauche au lieu du centre
            margin: "0", 
            width: "50%",
            marginLeft: "8%"
          }}
        >
          <Box marginTop="3rem" width="80%"  >
            <Typography fontFamily="DM sans" fontSize="32px" fontWeight="500" color="#6D6460"  >
              ads and promotions
            </Typography>
            <Typography fontFamily="DM sans" fontSize="60px" fontWeight="700" lineHeight="70px" marginBottom="1.5rem" >
              We bring attention to your Business.
            </Typography>
            <Typography fontFamily="DM sans" fontSize="18px" fontWeight="400" color="#6D6460" marginBottom="3rem" width="80%" >
              Nous vous proposons des solutions innovantes pour booster votre entreprise.
            </Typography>
          </Box>

          <Stack direction="row" >
            <Button
              variant="contained"
              sx={{
                width: '50%',
                color: "white",
                background: "red",
                fontFamily: "DM sans",
                fontSize: "12px",
                fontWeight: "500",
                p: "8px 25px",
                borderRadius: "8px",
                marginTop: "1rem",
                marginRight:'1rem'
              }}
            >
              Comment ça marche ?
            </Button>
            <Button
              variant="contained"
              sx={{
                width: '50%',
                color: "white",
                background: "red",
                fontFamily: "DM sans",
                fontSize: "12px",
                fontWeight: "500",
                p: "8px 25px",
                borderRadius: "8px",
                marginTop: "1rem",
              }}
            >
              Télecharger
            </Button>
          </Stack>
        </Box>
      </Stack>
    </div>
  )
}

export default Bienvenue
