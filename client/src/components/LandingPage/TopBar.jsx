import React from "react";
import { AppBar, Toolbar, Typography, Button, Link } from "@mui/material";

import { useLocation } from "react-router-dom";

const TopBar = () => {
  const location = useLocation(); 

  const isSignupPage = location.pathname === "/Signup";
  const isSigninPage = location.pathname === "/Signin";

  return (
    <AppBar position="static" sx={{ backgroundColor: "#FFF0EE" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "DM Sans",
            fontSize: "15px",
            color: "black",
            textDecoration: "none",
            marginRight: { xs: 2, md: 3 },
          }}
        >
          Salta3
        </Typography>
        <div
          sx={{
            display: "flex",
            justifyContent: "center",
            flex: 1,
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
            marginY: { xs: 1, md: 0 },
          }}
        >
          <Link
            href="#"
            sx={{
              marginX: 1,
              fontFamily: "DM Sans",
              fontSize: "16px",
              color: "black",
              textDecoration: "none",
            }}
          >
            Acceuil
          </Link>
          <Link
            href="#"
            sx={{
              marginX: 1,
              fontFamily: "DM Sans",
              fontSize: "16px",
              color: "black",
              textDecoration: "none",
            }}
          >
            A propos
          </Link>
          <Link
            href="#"
            sx={{
              marginX: 1,
              fontFamily: "DM Sans",
              fontSize: "16px",
              color: "black",
              textDecoration: "none",
            }}
          >
            FAQ
          </Link>
          <Link
            href="#"
            sx={{
              marginX: 1,
              fontFamily: "DM Sans",
              fontSize: "16px",
              color: "black",
              textDecoration: "none",
            }}
          >
            Contact
          </Link>
        </div>
        <div
          sx={{
            display: "flex",
            marginY: { xs: 1, md: 0 },
          }}
        >
          {!isSigninPage && (
            <Button
              color="inherit"
              sx={{
                fontFamily: "DM Sans",
                fontSize: "16px",
                marginLeft: 1,
                backgroundColor: "black",
                color: "white",
              }}
            >
              Se connecter
            </Button>
          )}

          {!isSignupPage && (
            <Button
              color="inherit"
              sx={{
                fontFamily: "DM Sans",
                fontSize: "15px",
                marginLeft: 1,
                backgroundColor: "black",
                color: "white",
              }}
            >
              S’inscrire
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
