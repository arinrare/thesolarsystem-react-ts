import React from 'react';
import './App.css';
import Home from './pages/home';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Orbit from './pages/orbit';
import Gallery from './pages/gallery';
import SolarSystem from './pages/solar_system';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solar_system" element={<SolarSystem />} />
          <Route path="/orbit" element={<Orbit />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
