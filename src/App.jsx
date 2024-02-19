// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Component/About/About";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import SocialLinks from "./Component/SocialLinks/SocialLinks";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <section id='about'>
        <About />
      </section>
      <SocialLinks />
    </>
  );
}

export default App;
