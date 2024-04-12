import React from 'react';
import './index.css';
import '../../plugins/carousel/cloud9.css'
import '../../plugins/carousel/jquery.cloud9carousel.js';
import '../../plugins/carousel/jquery.reflection.js';

const Carousel = () => {
       
    return (

        <div id="wrap">
            <div id = "header">
                <div id = "solarsystemTitle">Interplanetary<br/>Distance Calculator</div>	
            </div>
            
            <div id="showcase" className="noselect">
                <img className = "cloud9-item" src = "/images/planets/sun_resized.png" alt = "The Sun" width = "260" height = "260" />

                <img className = "cloud9-item" src = "/images/planets/blank.png" alt = "" width = "200" height = "200" />
                
                <img className = "cloud9-item" src = "/images/planets/neptune_resized.png" alt = "Neptune" width = "200" height = "200" />

                <img className = "cloud9-item" src = "/images/planets/uranus_resized.png" alt = "Uranus" width = "200" height = "200" />

                <img className = "cloud9-item" src = "/images/planets/saturn_resized.png" alt = "Saturn" width = "352" height = "200" />
               
                <img className = "cloud9-item" src = "/images/planets/jupiter_resized.png" alt = "Jupiter" width = "200" height = "200" />
               
                <img className = "cloud9-item" src = "/images/planets/mars_resized.png" alt = "Mars" width = "200" height = "200" />
              
                <img className = "cloud9-item" src = "/images/planets/earth_resized.png" alt = "Earth" width = "200" height = "200" />
               
                <img className = "cloud9-item" src = "/images/planets/venus_resized.png" alt = "Venus" width = "200" height = "200" />
                
                <img className = "cloud9-item" src = "/images/planets/mercury_resized.png" alt = "Mercury" width = "200" height = "200" />
                <article className = "introPanel">
                    You have landed at the Interplanetary Distance Calculator. Select a planet to take off from, then a planet to land at. You will be propelled there instantly, and a distance in Kilometres of your journey will be recorded. Select another planet to take another journey from this location, or select the reset destination to have your flight path calculations start over.
                </article>	
            
            </div>
            <div id="nav" className="noselect">
                <button className="left">←</button>
                <button className="right">→</button>
                <div id = "distance">
                    <div id = "distHeading" className = "inline distance">Distance Travelled:</div><div id = "kilometres" className = "inline distance"></div>
                </div>
            </div>
            
            
        </div>
    );
}

export default Carousel;