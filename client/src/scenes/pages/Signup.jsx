import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Container,
} from "@mui/material";
import Footer from "../../components/LandingPage/Footer";
import { FormControlLabel, Checkbox } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const Signup = () => {
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraClick = () => {
    fileInputRef.current.click();
  };

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
            //marginBottom="-8rem"
          >
            Créer un compte et passer au niveau suivant des publicités
          </Typography>
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
          <form>
            <Typography
              fontFamily="DM sans"
              fontSize="18px"
              fontWeight="700"
              color="red"
            >
              S'inscrire
            </Typography>
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                style={{ width: 80, height: 80, borderRadius: "50%" }}
              />
            ) : (
              <AccountCircleIcon
                sx={{
                  fontSize: 80,
                  color: "gray",
                  cursor: "pointer",
                }}
                onClick={handleCameraClick}
              />
            )}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <Container
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack direction="row">
                <CameraAltIcon
                  sx={{
                    fontSize: 18,
                    color: "red",
                    marginTop: "5px",
                  }}
                />

                <Button
                  sx={{
                    fontSize: "4px",
                    paddingBottom: "2px 2px 2px",
                  }}
                >
                  <Typography
                    fontFamily="DM sans"
                    fontSize="12px"
                    fontWeight="700"
                    color="red"
                    onClick={handleCameraClick}
                  >
                    Photo du compte
                  </Typography>
                </Button>
              </Stack>
            </Container>
            <TextField
              required
              id="outlined-required"
              label="Nom de compte annonceur"
              defaultValue=""
              style={{ width: "60%", marginBottom: "1rem", marginTop: "1rem" }}
              InputLabelProps={{
                style: {
                  fontSize: "12px",
                  fontFamily: "DM sans",
                  fontWeight: "700",
                  marginTop: "-15px",
                },
              }}
              variant="outlined"
            />
            {/* Nom et prénom (dans la même ligne) */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                textAlign: "center",
                margin: "0 auto",
                width: "60%",
                marginBottom: "1rem",
              }}
            >
              <TextField
                required
                id="outlined-required"
                label="Nom"
                defaultValue=""
                style={{ width: "50%", marginRight: "5%" }}
                InputLabelProps={{
                  style: {
                    fontSize: "12px",
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
                style={{ width: "50%" }}
                InputLabelProps={{
                  style: {
                    fontSize: "12px",
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
                  fontSize: "12px",
                  fontFamily: "DM sans",
                  fontWeight: "700",
                  marginTop: "-15px",
                },
              }}
              variant="outlined"
            />
            *
            <TextField
              required
              id="outlined-required"
              label="Numéro de téléphone"
              defaultValue=""
              style={{ width: "60%", marginBottom: "1rem" }}
              InputLabelProps={{
                style: {
                  fontSize: "12px",
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
                  fontSize: "12px",
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
              label="Mot de passe"
              defaultValue=""
              style={{ width: "60%", marginBottom: "1rem" }}
              InputLabelProps={{
                style: {
                  fontSize: "12px",
                  fontFamily: "DM sans",
                  fontWeight: "700",
                  marginTop: "-15px",
                },
              }}
              variant="outlined"
              type="password"
            />
            <TextField
              required
              id="outlined-required"
              label="Confirmer votre mot de passe"
              defaultValue=""
              style={{ width: "60%", marginBottom: "1rem" }}
              InputLabelProps={{
                style: {
                  fontSize: "12px",
                  fontFamily: "DM sans",
                  fontWeight: "700",
                  marginTop: "-15px",
                },
              }}
              variant="outlined"
              type="password"
            />
            <Container
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                margin: "0 auto",
                width: "100%",
              }}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="J’accepte les termes et conditions."
              />

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
              >
                Créer mon compte
              </Button>
            </Container>
          </form>
        </Box>
      </Stack>
      <Footer />
    </div>
  );
};

export default Signup;
