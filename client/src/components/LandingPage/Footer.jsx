import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      bgcolor="#000"
      color="#fff"
      padding="2rem"
      textAlign="center"
      fontFamily="DM Sans"
      fontSize="14px"
      fontStyle="normal"
      fontWeight="400"
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography>Acceuil</Typography>
        <Typography>A propos</Typography>
        <Typography>FAQ</Typography>
        <Typography>Contact</Typography>
        <Box>
          <IconButton color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit">
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>
      <Box borderTop="1px solid #40772D" margin="1.5rem 0" padding="1rem 0">
        <Typography style={{ color: "#40772D" }}>
          Copyright © 2023 Dallali Digital Innovation Group All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
