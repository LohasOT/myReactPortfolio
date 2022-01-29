import React from "react";
import Appbar from "./components/Navbar/Appbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About"
import Project from "./components/Project/Project"
import "./App.css"


function App() {
  return (
    <>
    <section>
    <Appbar></Appbar>
    <About></About>
    <Footer></Footer>
    <Project></Project>
    </section >
    </>
  );
}

export default App;
