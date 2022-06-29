import react, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./routes/Hero";
import NotFound from "./routes/NotFound";
import Route1 from "./routes/Route1";
import Route2 from "./routes/Route2";
import Route3 from "./routes/Route3";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Hero />
      <Route2 />
      <Route3 />
      <Route1 />
      {/* <Route3 /> */}
    </div>
  );
}

//  <Routes>
//    <Route path="*" element={<NotFound />} />
//    <Route path="/" element={<Home />} />

//    {/* edit routes and corresponding components */}

//    <Route path="/route1" element={<Route1 />} />
//    <Route path="/route2" element={<Route2 />} />
//  </Routes>;

export default App;
