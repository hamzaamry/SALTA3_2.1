import React, { useState } from "react";
import HorizontalStepper from "../../../components/HorizontalStepper";
import { Typography, Box, TextField, IconButton, Stack , Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UploadIcon from "@mui/icons-material/Upload";
import Checkbox from "@mui/material/Checkbox";



const Step6 = () => {
  const navigate = useNavigate();

   const handleUploadClick = () => {
    navigate("/step5");
  }; 

  const [correctResponses, setCorrectResponses] = useState([]);

  const [questions, setQuestions] = useState([
    {
      id: 1,
      questionLabel: "Question 1",
      questionDefaultValue: "Saisir votre question et importer image",
      responses: [
        {
          id: 1,
          responseLabel: "Reponse",
          responseDefaultValue: "Saisir le Reponse 1 ou importer image",
        },
      ],
    },
  ]);

  const addQuestionField = () => {
    const newQuestions = [...questions];
    const newQuestionNumber = newQuestions.length + 1;

    newQuestions.push({
      id: newQuestionNumber,
      questionLabel: `Question ${newQuestionNumber}`,
      questionDefaultValue: `Saisir la Question ${newQuestionNumber} et importer image`,
      responses: [
        {
          id: 1,
          responseLabel: "Reponse",
          responseDefaultValue: `Saisir le Reponse 1 pour la Question ${newQuestionNumber} ou importer image`,
        },
      ],
    });

    setQuestions(newQuestions);
  };

  const addResponseField = (questionIndex) => {
    const newQuestions = [...questions];
    const newResponseNumber = newQuestions[questionIndex].responses.length + 1;

    newQuestions[questionIndex].responses.push({
      id: newResponseNumber,
      responseLabel: `Reponse ${newResponseNumber}`,
      responseDefaultValue: `Saisir le Reponse ${newResponseNumber} pour la Question ${
        questionIndex + 1
      } ou importer image`,
    });

    setQuestions(newQuestions);
  };

  return (
    <Box>
      <HorizontalStepper />
      <Box display="flex" flexDirection="column" style={{ marginTop: "4rem" }}>
        <Typography
          fontFamily="DM sans"
          fontSize="30px"
          fontWeight="700"
          style={{ marginBottom: "4rem" }}
        >
          Questions à choix multiples
        </Typography>

        <Box  >
          {questions.map((question, questionIndex) => (
            <div key={question.id} style={{marginTop: '3rem'}} >
              <Stack direction="row" alignItems="center">
                <TextField
                  required
                  id={`question-${question.id}`}
                  label={question.questionLabel}
                  defaultValue={question.questionDefaultValue}
                  style={{
                    marginLeft: "1rem",
                    marginTop: "1rem",
                    width: "80%",
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: "20px",
                      fontFamily: "DM sans",
                      fontWeight: "700",
                      marginTop: "-15px",
                    },
                  }}
                />
                <Box style={{ marginLeft: "1rem", marginTop: "1rem" }}>
                  <IconButton>
                    <UploadIcon
                      style={{ fontSize: "2.5rem", color: "#FF000061" }}
                    />
                  </IconButton>
                </Box>
              </Stack>

              <Typography
                color="#C61232"
                fontFamily="DM sans"
                fontSize="15px"
                fontWeight="400"
                style={{ marginLeft: "1rem", cursor: "pointer" }}
                onClick={addQuestionField}
              >
                + Add another Question
              </Typography>

              <Box>
                <Typography
                  fontFamily="DM sans"
                  fontSize="20px"
                  fontWeight="600"
                  style={{
                    marginBottom: "22px",
                    marginLeft: "5rem",
                    marginTop: "2rem",
                  }}
                >
                  Réponses
                </Typography>

                {question.responses.map((response) => (
                  <div key={response.id} style={{ alignItems: "center" }}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      
                      <TextField
                        required
                        id={`response-${response.id}`}
                        label={response.responseLabel}
                        defaultValue={response.responseDefaultValue}
                        style={{
                          marginLeft: "1rem",
                          marginTop: "1rem",
                          marginBottom: "1.5rem",
                          width: "60%",
                        }}
                        InputLabelProps={{
                          style: {
                            fontSize: "20px",
                            fontFamily: "DM sans",
                            fontWeight: "700",
                            marginTop: "-15px",
                          },
                        }}
                      />
                      <Box style={{ marginLeft: "1rem", marginTop: "1rem" }}>
                        <IconButton>
                          <UploadIcon
                            style={{ fontSize: "2.5rem", color: "#FF000061" }}
                          />
                        </IconButton>
                      </Box>
                      
                  <Checkbox
                  style={{ color: "#1DC9A0" , marginLeft: "2rem" , marginTop: '0.5rem' }}
                    checked={correctResponses.includes(response.id)}
                    onChange={() => {
                     
                      setCorrectResponses((prevResponses) =>
                        prevResponses.includes(response.id)
                          ? prevResponses.filter(
                              (prevResponse) => prevResponse !== response.id
                            )
                          : [...prevResponses, response.id]
                      );
                    }}

                    sx={{
                      transform: "scale(1.7)", 
                    }}

                  />
                    </Stack>
                  </div>
                ))}
              </Box>
              <Typography
                color="#C61232"
                fontFamily="DM sans"
                fontSize="15px"
                fontWeight="400"
                style={{ marginLeft: "12rem", cursor: "pointer" }}
                onClick={() => addResponseField(questionIndex)}
              >
                + Add another QCM
              </Typography>
            </div>
          ))}
        </Box>
      </Box>
      <Box style={{  display: 'flex', justifyContent: 'center', alignItems: 'center' , marginTop:'5rem' }} >
      <Button
          variant="contained"
          sx={{
            mt: 5,
            mb: 5,
            mr: 1,
            color: "white",
            background: "red",
            fontFamily: "DM sans",
            fontSize: "20px",
            fontWeight: '400',
            p: "10px 40px",
            lineHeight: '28px',
            borderRadius:'8px',
          }}
          onClick={handleUploadClick}
        >
          Payer
        </Button>
    </Box>



    </Box>
  );
};

export default Step6;
