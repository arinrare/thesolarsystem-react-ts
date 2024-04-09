import React from 'react';
import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import ImageAccordion from './components/imageAccordion';
import Orbit from './components/orbit';
import Gallery from './components/gallery';

import './indexPage.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="indexTitle">The Solar System</div>
        <ImageAccordion />
        <Routes>
            <Route path="/orbit" element={<Orbit />} />
            <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
