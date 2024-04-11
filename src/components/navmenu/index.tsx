import React, {useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './index.css';

const Navmenu = () => {
    function handleClick(ID: string) {
            sessionStorage.setItem('currentPage', ID);
    } 

    return (
        <>
            <div id="navmenu">
                <Link onClick={() => handleClick("0")} className= "navlink inline" to="/"><img className="navImage menuHome" src="/images/navmenu/home_resized.png" alt="black and white home icon" /></Link>
                <Link onClick={() => handleClick("1")} className={parseInt(sessionStorage.getItem('currentPage') ?? '1') === 1 ? "navlink inline active" : "navlink inline"} to="/solar_system"><img className="navImage solarsystemHome" src="/images/navmenu/distance_resized.png" alt="black and white distance calculator icon" /></Link>
                <Link onClick={() => handleClick("2")} className={parseInt(sessionStorage.getItem('currentPage') ?? '2') === 2 ? "navlink inline active" : "navlink inline"} to="/orbit"><img className="navImage orbitHome" src="/images/navmenu/orbit_resized.png" alt="black and white orbit icon" /></Link>
                <Link onClick={() => handleClick("3")} className={parseInt(sessionStorage.getItem('currentPage') ?? '3') === 3 ? "navlink inline active" : "navlink inline"} to="/gallery"><img className="navImage galleryHome" src="/images/navmenu/gallery_resized.png" alt="black and white gallery icon" /></Link>
            </div>
        </>
    );
}
export default Navmenu;
