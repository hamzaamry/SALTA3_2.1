import React from "react";
import EquipeCard from "../EquipeCard/EquipeCard";
import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import team from "../../assets/png/team.png";

const Equipe = () => {

  const StyledLine = styled("div")({
    width: "2px",
    height: "14px",
    flexShrink: 0,
    background: "#F00",
  });

  const equipeData = [
    {
      id: 1,
      image: team,
      name: "Jenny Wilson",
      quote:
        "Contemporary design and well-made products are things that we think everybody should be able to have. It’s the reason we do what we do",
    },
    {
      id: 2,
      image: team,
      name: "Guy Hawkins",
      quote:
        "Together, we challenge ourselves for a better tomorrow by meaningful designs that help live our best life and maintain lasting relevance",
    },
    {
      id: 3,
      image: team,
      name: "Bessie Cooper",
      quote:
        "Our collection is ever-evolving. Yet, it remains consistently relatable and accessible. Our purpose is to inspire and help create the look you want.",
    },

  ];

  return (
    <div>
      <div
        style={{
          padding: "2rem",
          backgroundColor: "#FFF0EE",
          minHeight: "90vh",
        }}
      >
        <Box marginTop="3rem" justifyContent="center" textAlign="center">
          <div
            style={{
              display: "flex",
              justifyContent: "center" ,
              textAlign: "center",
              alignItems: "center",

              marginBottom: "5rem",
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
              Notre equipe
            </Typography>
          </div>
          <Typography
            fontFamily="DM sans"
            fontSize="24px"
            fontWeight="700"
            lineHeight="34px"
            textAlign="center"
            marginBottom="3rem"
          >
            Notre équipe est composée de professionnels passionnés et
            expérimentés, qui mettent leur expertise à votre disposition pour
            vous aider à atteindre vos objectifs
          </Typography>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          marginLeft="5rem"
     
        >
          <Grid container spacing={3}>

            {equipeData.map((membre) => (
              <Grid item key={membre.id} xs={12} sm={6} md={4} lg={4}>
                <EquipeCard
                  image={membre.image}
                  name={membre.name}
                  quote={membre.quote}
                />
              </Grid>
            ))}
          </Grid>
          <Box marginTop="5rem"> 
          <Button
              variant="contained"
              sx={{
                height: '3rem' ,
                color: "white",
                background: "red",
                fontFamily: "DM sans",
                fontSize: "14px",
                fontWeight: "700",
                borderRadius: '1px' ,
              }}
            >
              Nous contacter
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Equipe;
