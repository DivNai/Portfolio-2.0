// export default App;
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Stats from "./components/Stats";
import SkillBars from "./components/SkillBars";
import Services from "./components/Services";
import LatestWork from "./components/LatestWork";
import TechIcons from "./components/TechIcons";
import Contact from "./components/ContactForm";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillBars/>
      <TechIcons/>
      <Stats/>
      <Services/>
      <LatestWork/>
      <Contact/>
    </div>
  );
}

export default App;