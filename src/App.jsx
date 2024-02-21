// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Component/About/About";
import Experience from "./Component/Experience/Experience";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Portfolio from "./Component/Portfolio/Portfolio";
import SocialLinks from "./Component/SocialLinks/SocialLinks";
import Contact from "./Component/Contact/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <section id="about">
        <About />
      </section>
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </>
  );
}

export default App;
