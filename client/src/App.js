import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import Layout from "./scenes/layout";
import Dashboard from "./scenes/dashboard";
import Profil from "./scenes/profil";
import Video from "./scenes/video";

import Step1 from './scenes/video/steps/Step1'
import Step2 from './scenes/video/steps/Step2'
import Step3 from './scenes/video/steps/Step3'
import Step4 from './scenes/video/steps/Step4'
import Step5 from './scenes/video/steps/Step5'
import Step6 from './scenes/video/steps/Step6'

import Signin from "./scenes/pages/Signin";
import Signup from "./scenes/pages/Signup";



function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings("light")), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/acceuil" replace />} />
              <Route path="/acceuil" element={<Dashboard />} />
              <Route path="/profil" element={<Profil />} />
              <Route path="/ajouter une video" element={<Video />} />

              <Route path="/step1" element={<Step1 />} />
              <Route path="/step2" element={<Step2 />} />
              <Route path="/step3" element={<Step3 />} />
              <Route path="/step4" element={<Step4 />} />
              <Route path="/step5" element={<Step5 />} />
              <Route path="/step6" element={<Step6 />} />

              <Route path="/Signin" element={<Signin />} />
              <Route path="/Signup" element={<Signup />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
