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

    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
