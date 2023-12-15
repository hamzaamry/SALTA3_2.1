import React from "react";
import { Box, Typography, TextField, Button , Stack } from "@mui/material";
import Footer from "../../components/LandingPage/Footer";
import computer from "../../assets/png/computer.png";
import logo from "../../assets/png/logo.png"
import { Link } from "react-router-dom"

const Signin = () => {
  return (
    <div>
      <Stack
        direction="row"
        style={{
          minHeight: "90vh",
          padding: "2rem",
          
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
            Veuillez vous connecter pour profiter de toutes les fonctionnalités
            de Salta3.
          </Typography>
          <img
            src={computer}
            alt="computer"
            style={{ margin: "auto", width: "100%", marginLeft: "3.5rem" }}
          />
        </Box>

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
          <img src={logo} alt="logo" style={{ width: "25%" }} />
          <Typography
            fontFamily="DM sans"
            fontSize="18px"
            fontWeight="700"
            marginBottom="3rem"
          >
            Se connecter
          </Typography>
          <TextField
            required
            id="outlined-required"
            label="Adresse mail"
            defaultValue="Saisir le nom de votre publicité"
            style={{ width: "60%" }}
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
            style={{ width: "60%", marginTop: "2.5rem" }}
            InputLabelProps={{
              style: {
                fontSize: "20px",
                fontFamily: "DM sans",
                fontWeight: "700",
                marginTop: "-15px",
              },
            }}
          />

          <Typography
            variant="body2"
            component={Link}
            to="/mot-de-passe-oublie"
            style={{
              color: "red",
              marginTop: "1rem",
              textDecoration: "none",
              fontSize: "14px",
              fontFamily: "DM sans",
              fontWeight: "700",
              marginBottom: "-3rem",
            }}
          >
            Mot de passe oublié ?
          </Typography>

          <Box
            style={{
              justifyContent: "center",
              alignItems: "center",
              margin: '5rem'
            }}
          >
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
              }}
              //onClick={handleUploadClick}
            >
              Se connecter
            </Button>

            <Box style={{ marginBottom: "1rem" }}>
              <Typography
                style={{
                  color: "#515151",
                  marginTop: "1rem",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontFamily: "DM sans",
                  fontWeight: "400",
                }}
              >
                Vous n’avez pas de compte?
              </Typography>
              <Typography
                variant="body2"
                component={Link}
                to="/Signup"
                style={{
                  color: "red",
                  fontSize: "16px",
                  fontFamily: "DM sans",
                  fontWeight: "400",
                  textDecoration: "underline",
                }}
              >
                S’identifier
              </Typography>
            </Box>


          </Box>
        </Box>
      </Stack>
      <Footer />
    </div>
  );
};

export default Signin;
