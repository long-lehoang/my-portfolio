import { useEffect } from "react";
import { useLocation } from "wouter";
import Hero from "@/components/sections/Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Certification from "./Certification";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  const [location] = useLocation();
  
  // Scroll to section on hash change
  useEffect(() => {
    if (location.startsWith("/#")) {
      const sectionId = location.substring(2);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certification />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
