import React from 'react';
import EquipeCard from '../EquipeCard/EquipeCard';
import { Box , Button , Grid, Typography }  from '@mui/material';

const Equipe = () => {
  const equipeData = [
    {
      id: 1,
      image: 'chemin/vers/image1.jpg',
      name: 'Membre 1',
      quote: 'Citation du Membre 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      image: 'chemin/vers/image2.jpg',
      name: 'Membre 2',
      quote: 'Citation du Membre 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      image: 'chemin/vers/image3.jpg',
      name: 'Membre 3',
      quote: 'Citation du Membre 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 4,
      image: 'chemin/vers/image3.jpg',
      name: 'Membre 3',
      quote: 'Citation du Membre 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },

  ];

  return (
    <div>
      <div style={{
           padding: "2rem",
           backgroundColor: "#FFF0EE", 
           minHeight: "90vh",
      }} >

      
         <Box marginTop="3rem" justifyContent="center" textAlign="center" >
            <Typography fontFamily="DM sans" fontSize="32px" fontWeight="500" color="#6D6460" marginBottom="2rem" >
            Notre equipe
            </Typography>
            <Typography fontFamily="DM sans" fontSize="24px" fontWeight="700" lineHeight="34px" textAlign="center" marginBottom="2rem" >
            Notre équipe est composée de professionnels passionnés et expérimentés, qui mettent leur expertise à votre disposition pour vous aider à atteindre vos objectifs
            </Typography>
            </Box>
           
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="90vh">
      <Grid container spacing={3}  >
        {/* Utilisez map pour créer les six cartes */}
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
          <Box>
          <Button
              variant="contained"
              sx={{
                width: '100%',
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
              Nous contacter
            </Button>
          </Box>
    </Box>
    </div>
    </div>
  );
}

export default Equipe;
