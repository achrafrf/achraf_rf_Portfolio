import React, { useRef } from "react";
import "./style.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Navbar from "./routes/Navbar";
import Service from "./routes/Service";
import ParticlesBackground from "./components/ParticlesBackground";
import "./components/DarkMode.css";

function App() {
  return (
    <> 
    <Navbar />
      <Home />
      <About />
      <Project />
      <Service />
      <Contact />
    </>
  );
}

export default App;