import React from "react"
import Navbar from "./Components/Navbar"
import Card from "./Components/Card"
import Footer from "./Components/Footer"
import About from "./Components/About"
import Service from "./Components/Service"
function App(){
  return(
    <div>
      <Navbar/>
      <Card/>
      <About/>
      <Service/>
      <Footer/>
    </div>
  )
}
export default App