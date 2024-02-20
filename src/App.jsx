// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Component/About/About";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Portfolio from "./Component/Portfolio/Portfolio";
import SocialLinks from "./Component/SocialLinks/SocialLinks";
import Experience from "./Experience/Experience";
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
      <SocialLinks />
    </>
  );
}

export default App;
