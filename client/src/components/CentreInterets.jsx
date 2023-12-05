import React, { useState } from 'react';
import { Typography, Checkbox, FormControlLabel } from '@mui/material';

const CentreInterets = () => {
  const [interests, setInterests] = useState({
    sportFitness: false,
    voyagesTourisme: false,
    cuisineGastronomie: false,
    technologieInnovation: false,
    modeBeaute: false,
    musiqueDivertissement: false,
    environnementDeveloppementDurable: false,
    affairesEntrepreneuriat: false,
    animauxNature: false,
    parentaliteEducation: false,
    santeBienEtre: false,
    spiritualiteDeveloppementPersonnel: false,
    automobilesTransport: false,
    loisirsPasseTemps: false,
  });

  const handleCheckboxChange = (interest) => {
    setInterests((prevInterests) => ({
      ...prevInterests,
      [interest]: !prevInterests[interest],
    }));
  };

  return (
    <div>
      <Typography
        fontFamily="DM sans"
        fontSize="25px"
        fontWeight="500"
        style={{ marginBottom: "2rem", textAlign: 'center' }}
      >
        Identifiez les centres d'intérêt associés à votre publicité.
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',
        boxShadow: '1px 3px 5px rgba(0, 0, 0, 0.3)', padding: '16px', borderRadius: '10px',  width: '85%',  margin: 'auto'
    }}>

      <Typography
        fontFamily="DM sans"
        fontSize="25px"
        fontWeight="700"
        style={{ textAlign: 'flex-start' }}
      >
        centres d'intérêt
      </Typography>

        {Object.entries(interests).map(([key, value]) => (
          <FormControlLabel
            key={key}
            control={
              <Checkbox
                checked={value}
                onChange={() => handleCheckboxChange(key)}
                style={{ color: '#1DC9A0' }}
              />
            }
            label={key.replace(/([a-z])([A-Z])/g, '$1 $2')} 
            style={{ 
                marginBottom: '-1rem' , 
                fontFamily: 'DM sans',
                fontSize: '30px' 
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CentreInterets;
