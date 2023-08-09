import { useState } from "react";
import "./App.css";
import { Navbar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About } from "./container";

function App() {
  return (
    // <div className="App">
    //   <Navbar/>
    //   <div className="content">
    //     <Home/>
    //     <About/>
    //   </div>
    // </div>

    <BrowserRouter basename="/katyyouthhacks-environmental-activist/">
      <div className="App" >
        <Navbar />
        <Routes>
          <Route exact path="/katyyouthhacks-environmental-activist/" element={<Home />} />
          <Route exact path="/katyyouthhacks-environmental-activist/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
