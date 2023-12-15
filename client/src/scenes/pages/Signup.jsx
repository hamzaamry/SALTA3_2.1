import React from "react";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import Footer from "../../components/LandingPage/Footer";
import logo from "../../assets/png/logo.png";
import { Link } from "react-router-dom";
import { FormControlLabel, Checkbox } from "@mui/material";


const Signup = () => {
  return (
    <div>
      <Stack
        direction={{ xs: "column", md: "row" }} 
        justifyContent="center" 
        alignItems="center"
        style={{
          minHeight: "90vh",
          padding: "2rem",
          borderBottom: "1px solid black", 
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            margin: "0 auto",
            width: "50%",
          }}
        >
          {" "}
          <Typography fontFamily="DM sans" fontSize="24px" fontWeight="700">
            Bienvenue de nouveau !
          </Typography>
          <Typography
            fontFamily="DM sans"
            fontSize="24px"
            fontWeight="700"
            marginBottom="-8rem"
          >
            Créer un compte et passer au niveau suivant des publicités
          </Typography>
          <div
            style={{
              width: "1px",
              backgroundColor: "black",
              margin: "0 2rem",
            }}
          ></div>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              margin: "0 auto",
              width: "50%",
            }}
          >
            <form>
              {/* Zone de téléchargement de la photo de profil */}
              <input
                type="file"
                accept="image/*"
                style={{ borderRadius: "50%", marginBottom: "1rem" }}
              />

              {/* Nom de compte annonceur */}
              <TextField
                required
                id="outlined-required"
                label="Nom de compte annonceur"
                defaultValue=""
                style={{ width: "60%", marginBottom: "1rem" }}
                InputLabelProps={{
                  style: {
                    fontSize: "20px",
                    fontFamily: "DM sans",
                    fontWeight: "700",
                    marginTop: "-15px",
                  },
                }}
                variant="outlined"
              />

              {/* Nom et prénom (dans la même ligne) */}
              <div style={{ display: "flex", marginBottom: "1rem" }}>
                <TextField
                  required
                  id="outlined-required"
                  label="Nom"
                  defaultValue=""
                  style={{ width: "45%", marginRight: "5%" }}
                  InputLabelProps={{
                    style: {
                      fontSize: "20px",
                      fontFamily: "DM sans",
                      fontWeight: "700",
                      marginTop: "-15px",
                    },
                  }}
                  variant="outlined"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Prénom"
                  defaultValue=""
                  style={{ width: "45%" }}
                  InputLabelProps={{
                    style: {
                      fontSize: "20px",
                      fontFamily: "DM sans",
                      fontWeight: "700",
                      marginTop: "-15px",
                    },
                  }}
                  variant="outlined"
                />
              </div>

              {/* Domaine d’activité */}
              <TextField
                required
                id="outlined-required"
                label="Domaine d’activité"
                defaultValue=""
                style={{ width: "60%", marginBottom: "1rem" }}
                InputLabelProps={{
                  style: {
                    fontSize: "20px",
                    fontFamily: "DM sans",
                    fontWeight: "700",
                    marginTop: "-15px",
                  },
                }}
                variant="outlined"
              />

              {/* Numéro de téléphone */}
              <TextField
                required
                id="outlined-required"
                label="Numéro de téléphone"
                defaultValue=""
                style={{ width: "60%", marginBottom: "1rem" }}
                InputLabelProps={{
                  style: {
                    fontSize: "20px",
                    fontFamily: "DM sans",
                    fontWeight: "700",
                    marginTop: "-15px",
                  },
                }}
                variant="outlined"
              />

              {/* Adresse mail */}
              <TextField
                required
                id="outlined-required"
                label="Adresse mail"
                defaultValue=""
                style={{ width: "60%", marginBottom: "1rem" }}
                InputLabelProps={{
                  style: {
                    fontSize: "20px",
                    fontFamily: "DM sans",
                    fontWeight: "700",
                    marginTop: "-15px",
                  },
                }}
                variant="outlined"
              />

              {/* Mot de passe */}
              <TextField
                required
                id="outlined-required"
                label="Mot de passe"
                defaultValue=""
                style={{ width: "60%", marginBottom: "1rem" }}
                InputLabelProps={{
                  style: {
                    fontSize: "20px",
                    fontFamily: "DM sans",
                    fontWeight: "700",
                    marginTop: "-15px",
                  },
                }}
                variant="outlined"
                type="password"
              />

              {/* Confirmer votre mot de passe */}
              <TextField
                required
                id="outlined-required"
                label="Confirmer votre mot de passe"
                defaultValue=""
                style={{ width: "60%", marginBottom: "1rem" }}
                InputLabelProps={{
                  style: {
                    fontSize: "20px",
                    fontFamily: "DM sans",
                    fontWeight: "700",
                    marginTop: "-15px",
                  },
                }}
                variant="outlined"
                type="password"
              />

              {/* Checkbox : J’accepte les termes et conditions */}
              <FormControlLabel
                control={<Checkbox />}
                label="J’accepte les termes et conditions."
                style={{ alignSelf: "flex-start", marginLeft: "2rem" }}
              />

              {/* Bouton : Créer mon compte */}
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  background: "red",
                  fontFamily: "DM sans",
                  fontSize: "15px",
                  fontWeight: "500",
                  p: "8px 35px",
                  borderRadius: "8px",
                  marginTop: "1rem",
                }}
                //onClick={handleUploadClick}
              >
                Créer mon compte
              </Button>
            </form>
          </Box>
        </Box>
      </Stack>
      <Footer />
    </div>
  );
};

export default Signup;
