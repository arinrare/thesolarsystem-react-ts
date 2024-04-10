import React from 'react';
import { Link } from "react-router-dom";
import './index.css';

const Navmenu = () => {
       
    return (
        <>
           <div id = "navmenu">
		   		<Link className = "inline" to="/"><img className = "navImage menuHome" src = "/images/navmenu/home_resized.png" alt = "black and white home icon" /></Link>
				<Link className = "inline" to="/solar_system"><img id = "selected" className = "navImage distanceHome" src = "/images/navmenu/distance_resized.png" alt = "black and white distance icon" /></Link>
				<Link className = "inline" to="/orbit"><img className = "navImage orbitHome" src = "/images/navmenu/orbit_resized.png" alt = "black and white orbit icon" /></Link>
				<Link className = "inline" to="/gallery"><img className = "navImage galleryHome" src = "/images/navmenu/gallery_resized.png" alt = "black and white gallery icon" /></Link>		
			</div> 
        </>
    );
}
export default Navmenu;
