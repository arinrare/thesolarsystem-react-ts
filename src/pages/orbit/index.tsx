import React, { useState } from 'react';
import Navmenu from '../../components/navmenu'
import Footer from '../../components/footer'
import './index.css'

const clickCursor = require('../../images/orbit/click_cursor2-resized.png');
const handCursor = require('../../images/orbit/hand_cursor2_resized.png');
const hideShow = require('../../images/orbit/hideshow_resized.png');
const pausePlay = require('../../images/orbit/pauseplay_resized.png');
const reset = require('../../images/orbit/reset_resized.png');

const Orbit = () => {
    
    const [running, setRunning] = useState(false);
    const [show, setShow] = useState(false);
    
    function handlePlayClick() {
        setRunning(prevState => {
                return !prevState;
        });
    }

    function handleShowClick() {
        setShow(prevState => {
                return !prevState;
        });
    }
        
    return (
        <>
            <Navmenu />
            
            <div id = "header">
                <div id = "solarsystemTitle">Solar Orbit of Planets</div>	
            </div>

            <div id = "orbitIntroContainer">
					<section id = "orbitIntroduction">
						<article className = "orbitIntroPanel">
							Welcome to The Solar System, a site that will give you a brief tour of the Earths' Sun and surrounding planets. Explore the space around Earth beginning with the Interplanetary Distance Calculator, select any two planets here and in seconds, measure the distance between them. Then discover a simulation of the orbit of the planets around the Sun. The orbits are displayed at a proportionally correct speed, showing you the differences between the speed of the planets revolving around the Sun. Finally move to the Gallery, where you will be treated to a spectacular view of space themed events and sights.
						</article>	
					</section>
				</div>
            
            <div id="wrap">	
                <div id = "solarWrap">
                    <img id = "pauseplay" src = {pausePlay} onClick={handlePlayClick}  alt = "Red Pause/Play button" width = "25" height = "25" />
                    <img id = "reset" src = {reset}  alt = "Red Reset button" width = "25" height = "25" />
                    <img id = "showIcon" src = {hideShow} onClick={handleShowClick} alt = "Click Icon - indicates a hover action for the list of planets" width = "25" height = "25" />
                    <aside id = "planetList" className = "planetList"  style={{ display: show ? "block" : "none" }}>
                        <div>
                            <div className = "inline planetNumber">1</div><div  id = "sunText" className = "inline planet">The Sun</div>
                        </div>
                        <div>
                            <div className = "inline planetNumber">2</div><div  id = "mercuryText" className = "inline planet">Mercury</div>
                        </div>
                        <div>
                            <div className = "inline planetNumber">3</div><div  id = "venusText" className = "inline planet">Venus</div>
                        </div>
                        <div>
                            <div className = "inline planetNumber">4</div><div  id = "earthText" className = "inline planet">Earth</div>
                        </div>
                        <div>
                            <div className = "inline planetNumber">5</div><div  id = "marsText" className = "inline planet">Mars</div>
                        </div>
                        <div>
                            <div className = "inline planetNumber">6</div><div  id = "jupiterText" className = "inline planet">Jupiter</div>
                        </div>
                        <div>
                            <div className = "inline planetNumber">7</div><div  id = "saturnText" className = "inline planet">Saturn </div>
                        </div>
                        <div>
                            <div className = "inline planetNumber">8</div><div id = "uranusText" className = "inline planet">Uranus</div>
                        </div>
                        <div>
                            <div className = "inline planetNumber">9</div><div  id = "neptuneText" className = "inline planet">Neptune</div>
                        </div>
                    </aside>
                
                    <img id = "handIcon" src = {handCursor} alt = "Hand Icon - indicates a hover action for the list of planets" width = "25" height = "25" />
                    <span className="handTooltip">Hover over a planet name!</span>
                    <img id = "clickIcon" src = {clickCursor} alt = "Click Icon - indicates a hover action for the list of planets" width = "25" height = "25" />
                    <span className="clickTooltip">Click on a planet name!</span>
                    <img id = "showIconPanel" src = {hideShow} alt = "Click Icon - indicates a hover action for the list of planets" width = "25" height = "25" />
                
                    <img id = "sun" className = "sunCenter planetImg" style={{ animationPlayState: running ? "running" : "paused" }} src = "/images/planets/sun_resized.png" alt = "The Sun - Stationary" width = "60" height = "60" />
                    
                    <img id = "earth" className = "earthCenter planetImg" style={{ animationPlayState: running ? "running" : "paused" }} src = "/images/planets/earth_resized.png" alt = "The Earth - In orbit around the Sun" width = "15" height = "15" />
                    
                    <img id = "mercury" className = "mercuryCenter planetImg" style={{ animationPlayState: running ? "running" : "paused" }} src = "/images/planets/mercury_resized.png" alt = "Mercury - In orbit around the Sun" width = "5" height = "5" />
                    
                    <img id = "venus" className = "venusCenter planetImg" style={{ animationPlayState: running ? "running" : "paused" }} src = "/images/planets/venus_resized.png" alt = "Venus - In orbit around the Sun" width = "14" height = "14" />
                   
                    <img id = "mars" className = "marsCenter planetImg" style={{ animationPlayState: running ? "running" : "paused" }} src = "/images/planets/mars_resized.png" alt = "Mars - In orbit around the Sun" width = "8" height = "8" />
                   
                    <img id = "jupiter" className = "jupiterCenter planetImg" style={{ animationPlayState: running ? "running" : "paused" }} src = "/images/planets/jupiter_resized.png" alt = "Jupiter - In orbit around the Sun" width = "28" height = "28" />
                    
                    <img id = "saturn" className = "saturnCenter planetImg" style={{ animationPlayState: running ? "running" : "paused" }} src = "/images/planets/saturn_resized.png" alt = "Saturn - In orbit around the Sun" width = "23" height = "23" />
                    
                    <img id = "uranus" className = "uranusCenter planetImg" style={{ animationPlayState: running ? "running" : "paused" }} src = "/images/planets/uranus_resized.png" alt = "Uranus - In orbit around the Sun" width = "18" height = "18" />
                    
                    <img id = "neptune" className = "neptuneCenter planetImg" style={{ animationPlayState: running ? "running" : "paused" }} src = "/images/planets/neptune_resized.png" alt = "Neptune - In orbit around the Sun" width = "16" height = "16" />
                
                    <section className = "contentPanel">
                        
                        <article className = "panel" id = "sunPanel">The sun lies at the heart of the solar system, where it is by far the largest object. It holds 99.8 percent of the solar system's mass and is roughly 109 times the diameter of the Earth — about one million Earths could fit inside the sun. The visible part of the sun is roughly 10,000 degrees F (5,500 degrees C), while temperatures in the core reach more than 27 million degrees F (15 million degrees C), driven by nuclear reactions.</article>
                        
                       
                        <article className = "panel" id = "mercuryPanel">Mercury is the closest planet to the sun. As such, it circles the sun faster than all the other planets, which is why Romans named it after the swift-footed messenger god Mercury. The orbit of Mercury is the most eccentric of the planets in our Solar System. The planet has an orbital period of 87.969 Earth days. </article>
                        
                        <article className = "panel" id = "venusPanel">Venus and Earth are often called twins because they are similar in size, mass, density, composition and gravity. However, the similarities end there. Venus is the hottest world in the solar system. The orbit of Venus is the most circular in the entire Solar System. In mathematical terms, the eccentricity of Venus is less than 0.01. A year on Venus lasts 223 days.</article>
                        
                        <article className = "panel" id = "earthPanel">The Earth’s orbit around the Sun has many interesting characteristics. First, the speed of our orbit is 108,000 km/h. The planet travels 940 million km during one orbit. The Earth completes one orbit every 365.242199 mean solar days(that might help explain the need for a leap year). The planet’s distance from the Sun varies as it orbits. Actually, the Earth is never the same distance from the Sun from day to day.</article>
                       
                        <article className = "panel" id = "marsPanel">The orbit of Mars is the second most eccentric in the Solar System. Only Mercury’s orbit is more eccentric. It takes Mars approximately 687 Earth days to complete on orbit. The orbit of a planet varies in relation to the gravitational influences of the bodies around it, so the eccentricity can change over time. AS recently as 1.35 million years ago, Mars was in a nearly circular orbit.</article>
                        
                        <article className = "panel" id = "jupiterPanel">The orbit of Jupiter, like that of all the planets, is really elliptical instead of circular. At perihelion(closest approach) Jupiter comes within 741 million km, or 4.95 astronomical units(AU), of the Sun. Jupiter is the fifth planet from the Sun, but it is the third brightest object in the night sky here on Earth. Jupiter takes 11.86 Earth years, or 4331 Earth days to complete one orbit.</article>
                       
                        <article className = "panel" id = "saturnPanel">The orbit of Saturn lasts 29.7 years. In other words, during the time Saturn completes one full revolution around the Sun, Earth has gone through almost 30 years. The closest point of Saturn’s orbit is called its perihelion. At this point, Saturn is only 1.353 billion km or 9 astronomical units from the Sun (1 AU is the average distance from the Earth to the Sun).</article>
                       
                        <article className = "panel" id = "uranusPanel">The orbit of Uranus takes 84.3 year to complete one revolution around the Sun. In other words, 1 Uranian year is 84.3 Earth years. Uranus is unique among the planets in the Solar System because of its axial tilt. While Earth is tilted at a mere 23.5 degrees, Uranus has rolled over completely sideways, with an axial tilt of 99-degrees. This has a significant impact on the planet’s seasons. The north pole of Uranus experiences 42 years of complete darkness, followed by 42 years of sunlight, where the Sun never dips below in the horizon.</article>
                        
                        <article className = "panel" id = "neptunePanel">Neptune orbits the Sun at an average distance of 4.5 billion km. One interesting feature about the orbit of Neptune is the fact that Pluto’s very elliptical orbit sometimes brings it closer to the Sun. Back in the days when Pluto was still a planet, it would spend a few decades every orbit closer to the Sun. So Neptune was actually the most distant planet, and Pluto was closer. The last time this happened started in 1979, and ended in 1999. Of course, Pluto isn’t a planet any more, so Neptune’s orbit makes it the most distant planet.</article>
                    </section>
                </div>
                
            </div>
            <Footer />
        </>
    );
}
export default Orbit;