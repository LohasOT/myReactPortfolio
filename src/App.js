import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Cat from "./assets/cover/code_cat_hq.mp4";
import "./App.css"


function App() {
  return (
    <>
    <section>
        <video id="video" autoPlay loop muted>
          <source src={Cat} type="video/mp4"/>
        </video>
    <Navbar>
      </Navbar>
    <Footer>
    </Footer>
    </section >
    </>
  );
}

export default App;
