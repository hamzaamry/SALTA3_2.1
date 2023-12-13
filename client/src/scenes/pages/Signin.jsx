import React from 'react'
import { Box, Typography, TextField, Button } from "@mui/material";

const Signin = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <Box justifyContent="center" alignItems="center" textAlign="center">
        <Typography
          fontFamily="DM sans"
          fontSize="24px"
          fontWeight="700"
          style={{ marginBottom: "3rem", width: "50%" }}
        >
          Bienvenue de nouveau ! Veuillez vous connecter pour profiter de toutes
          les fonctionnalités de Salta3.
        </Typography>
        <Typography>img</Typography>
      </Box>

      {/* Ajout de la ligne de séparation */}
      <div
        style={{
          height: "100%",
          borderRight: "1px solid black",
          margin: "0 2rem",
        }}
      ></div>
      {/* Fin de la ligne de séparation */}

      <Box>
        <TextField
          required
          id="outlined-required"
          label="Adresse mail"
          defaultValue="Saisir le nom de votre publicité"
          style={{ width: "90%", marginTop: "2.5rem" }}
          InputLabelProps={{
            style: {
              fontSize: "20px",
              fontFamily: "DM sans",
              fontWeight: "700",
              marginTop: "-15px",
            },
          }}
        />

        <TextField
          required
          id="outlined-required"
          label="Mot de passe"
          defaultValue="Saisir le nom de votre publicité"
          style={{ width: "90%", marginTop: "2.5rem" }}
          InputLabelProps={{
            style: {
              fontSize: "20px",
              fontFamily: "DM sans",
              fontWeight: "700",
              marginTop: "-15px",
            },
          }}
        />

        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5rem",
          }}
        >
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
              fontWeight: "400",
              p: "10px 40px",
              lineHeight: "28px",
              borderRadius: "8px",
            }}
            //onClick={handleUploadClick}
          >
            Se connecter
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Signin