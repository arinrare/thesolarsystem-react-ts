import React from 'react';
import { Link } from "react-router-dom";
import './index.css';
const homeImage = require('../../images/navmenu/home_resized.png');
const distanceImage = require('../../images/navmenu/distance_resized.png');
const orbitImage = require('../../images/navmenu/orbit_resized.png');
const galleryImage = require('../../images/navmenu/gallery_resized.png');

const Navmenu = () => {
    function handleClick(ID: string) {
            sessionStorage.setItem('currentPage', ID);
    } 

    return (
        <>
            <div id="navmenu">
                <Link onClick={() => handleClick("0")} className= "navlink inline" to="/"><img className="navImage menuHome" src={homeImage} alt="black and white home icon" /></Link>
                <Link onClick={() => handleClick("1")} className={parseInt(sessionStorage.getItem('currentPage') ?? '1') === 1 ? "navlink inline active" : "navlink inline"} to="/solar_system"><img className="navImage solarsystemHome" src={distanceImage} alt="black and white distance calculator icon" /></Link>
                <Link onClick={() => handleClick("2")} className={parseInt(sessionStorage.getItem('currentPage') ?? '2') === 2 ? "navlink inline active" : "navlink inline"} to="/orbit"><img className="navImage orbitHome" src={orbitImage} alt="black and white orbit icon" /></Link>
                <Link onClick={() => handleClick("3")} className={parseInt(sessionStorage.getItem('currentPage') ?? '3') === 3 ? "navlink inline active" : "navlink inline"} to="/gallery"><img className="navImage galleryHome" src={galleryImage} alt="black and white gallery icon" /></Link>
            </div>
        </>
    );
}
export default Navmenu;
