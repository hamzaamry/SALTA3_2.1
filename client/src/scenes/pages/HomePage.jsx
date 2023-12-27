import React from 'react'
import Bienvenue from "../../components/LandingPage/Bienvenue"
import RocketPage  from "../../components/LandingPage/RocketPage"
import Services from "../../components/LandingPage/Services"
import Equipe from "../../components/LandingPage/Equipe"
import Contact from "../../components/LandingPage/Contact"

const HomePage = () => {
  return (
    <div>
      <Bienvenue />
      <RocketPage />
      <Services />
      <Equipe />
      <Contact />
    </div>
  )
}

export default HomePage
