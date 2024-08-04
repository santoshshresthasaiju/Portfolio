import React from "react"
import Navbar from "./Components/Navbar"
import Card from "./Components/Card"
import Footer from "./Components/Footer"
import About from "./Components/About"
import Service from "./Components/Service"
import EducationCard from "./Components/EducationCard"
import Project from "./Components/Project"
import Contact from "./Components/Contact"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Chatbox from "./Components/Chatbox/Chatbox"

function App(){
  return(
    <div>
      <Navbar/>
      <Card/>
      <About/>
      <EducationCard/>
      <Service/>
      <Project/>
      <Contact/>
      <Footer/>
      <Chatbox/>
    </div>
  )
}
export default App