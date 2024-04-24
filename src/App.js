import React from "react";

import NavBar from "./components/navbar/NavBar";
import Home from "./sections/home/Home";
import Projects from "./sections/projects/Projects";
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <main>
      <NavBar />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
