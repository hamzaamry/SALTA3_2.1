import { Typography, Box, useTheme } from "@mui/material";
import React from "react";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box sx={{ textAlign: "center" }} >
      <Typography
        variant="h2"
        color={theme.palette.secondary[300]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography 
        variant="h2" 
        color={theme.palette.secondary[300]}
        fontFamily="DM Sans"
        fontWeight="600"
  
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
