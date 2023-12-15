import React from 'react'
import { Box, Typography, Button, Stack } from '@mui/material'

const RocketPage = () => {
  return (
    <div>
      <Stack
        direction="row"
        style={{
          padding: "2rem",
          backgroundColor: "#FFF", 
          minHeight: "90vh",
        }}
      >

        <Box>
         {/* Rocket image */}    
        </Box>


        <Box marginTop="3rem" width="50%" >
            

        <Typography fontFamily="DM sans" fontSize="16px" fontWeight="500" color="#6D6460"  >
        A propos
            </Typography>
            <Typography fontFamily="DM sans" fontSize="40px" fontWeight="700" lineHeight="70px" marginBottom="1.5rem" >
            Bienvenue sur Salta3, nous sommes ravis de vous accueillir !
            </Typography>

            <Typography fontFamily="DM sans" fontSize="16px" fontWeight="400" color="#6D6460" marginBottom="3rem" width="80%" >
            Nous sommes une équipe de personnes créatives engagées à apporter au monde une touche de beauté grâce à nos services. Nous aimons ce que nous faisons et nous le faisons avec passion.
            </Typography>
            <Typography fontFamily="DM sans" fontSize="16px" fontWeight="400" color="#6D6460" marginBottom="3rem" width="80%" >
            Salta3 est l’un des projets développés par « Dallali Digital Innovation Group », une plateforme de diffusion de vidéos publicitaires. 
            </Typography>
            <Typography fontFamily="DM sans" fontSize="16px" fontWeight="400" color="#6D6460" marginBottom="3rem" width="80%" >
            Notre site web, salta3.com, est destiné aux annonceurs pour l’hébergement de leurs annonces, tandis que notre application mobile Salta3 permet de diffuser les publicités en payant les utilisateurs.
            </Typography>

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
              Voir plus
            </Button>

        </Box>
      </Stack>
    </div>
  )
}

export default RocketPage
