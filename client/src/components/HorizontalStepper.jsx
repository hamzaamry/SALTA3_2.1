import React from 'react';
import { Stepper, Step, StepLabel, useTheme, Box } from '@mui/material';
import styled from 'styled-components';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const HorizontalStepper = () => {
  const theme = useTheme();

  const steps = [
    {
      label: 'importez votre publicité.',
    },
    {
      label: 'selectionez votre audiance',
    },
    {
      label: 'personalisez votre critére de ciblage',
    },
    {
      label: 'planifiez vore publicité',
    },
    {
      label: 'QCM',
    },
    {
      label: 'Payer et lancez-vous',
    },
  ];

  const StyledStepLabel = styled.div`
    font-size: 20px;
    font-family: 'DM sans';
    color: ${theme.palette.grey[400]};
    text-align: center;
  `;

  const StyledStepIcon = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => (props.completed ? '#4CAF50' : '#2856AF')};
    border-radius: 50%;
    color: ${theme.palette.common.white};
    flex-direction: column;
  `;

  const CheckIcon = styled(CheckCircleIcon)`
    font-size: 24px;
  `;

  return (
    <Box sx={{ width: '90%' }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel StepIconComponent={() => (
              <StyledStepIcon completed={index === 0}>
                {index === 0 ? <CheckIcon /> : index + 1}
              </StyledStepIcon>
            )}>
              <StyledStepLabel>{step.label}</StyledStepLabel>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default HorizontalStepper;
