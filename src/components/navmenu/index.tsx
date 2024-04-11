import React, {useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './index.css';

const Navmenu = () => {
    
    const [state, setState] = useState([false, false, false, false])

    function handleClick(ID: number) {
        setState(oldState => {
            let stateArray = [false, false, false, false];
            let newArray = [false, false, false, false];
            
            stateArray.forEach((element, index) => {
                if (index === ID) {
                    newArray[index] = true;
                }
            });
            stateArray = newArray
            console.log(stateArray);
            const newState = {...oldState, ...stateArray};
            return newState; 
    
        });
    } 

    useEffect(() => {
        setState(state => ({ ...state, state})); 
    }, []);

        return (
            <>
               <div id = "navmenu">
    		   		<Link onClick = {() => handleClick(0)} className = {state[0] ? "navlink inline active" : "navlink inline"} to="/"><img className = "navImage menuHome" src = "/images/navmenu/home_resized.png" alt = "black and white home icon" /></Link>
                    <Link onClick = {() => handleClick(1)} className = {state[1] ? "navlink inline active" : "navlink inline"} to="/solar_system"><img className = "navImage solarsystemHome" src = "/images/navmenu/distance_resized.png" alt = "black and white distance calculator icon" /></Link>
    				<Link onClick = {() => handleClick(2)} className = {state[2] ? "navlink inline active" : "navlink inline"} to="/orbit"><img className = "navImage orbitHome" src = "/images/navmenu/orbit_resized.png" alt = "black and white orbit icon" /></Link>
    				<Link onClick = {() => handleClick(3)} className = {state[3] ? "navlink inline active" : "navlink inline"} to="/gallery"><img className = "navImage galleryHome" src = "/images/navmenu/gallery_resized.png" alt = "black and white gallery icon" /></Link>		
    			</div> 
            </>
        );
}
export default Navmenu;
