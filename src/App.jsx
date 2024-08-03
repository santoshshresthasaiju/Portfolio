import React from "react"
import Navbar from "./Components/Navbar"
import Card from "./Components/Card"
import Footer from "./Components/Footer"
import About from "./Components/About"
import Service from "./Components/Service"
import EducationCard from "./Components/EducationCard"
import Project from "./Components/Project"
function App(){
  return(
    <div>
      <Navbar/>
      <Card/>
      <About/>
      <EducationCard/>
      <Service/>
      <Project/>
      <Footer/>
    </div>
  )
}
export default App