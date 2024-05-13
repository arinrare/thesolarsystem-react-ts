import React, { useState } from 'react';
import ReactGA from 'react-ga4';
import Navmenu from '../../components/navmenu'
import Footer from '../../components/footer'
import './index.css'

const clickCursor = require('../../images/orbit/click_cursor2-resized.png');
const handCursor = require('../../images/orbit/hand_cursor2_resized.png');
const hideShow = require('../../images/orbit/hideshow_resized.png');
const pausePlay = require('../../images/orbit/pauseplay_resized.png');
const reset = require('../../images/orbit/reset_resized.png');

const Orbit = () => {
    
    const [show, setShow] = useState({show: false, class: 'planetListHide'});
    const [planetPanel, setPlanetPanel] = useState({currentState: '', sun: 'planetListHide', mercury: 'planetListHide', venus: 'planetListHide', earth: 'planetListHide', mars: 'planetListHide', jupiter: 'planetListHide', saturn: 'planetListHide', uranus: 'planetListHide', neptune: 'planetListHide'});
    const [playstate, setPlaystate] = useState('animationPause');
    const [planetMouseOver, setPlanetMouseOver] = useState({ currentState: '', sun: '', mercury: '', venus: '', earth: '', mars: '', jupiter: '', saturn: '', uranus: '', neptune: ''});

    React.useEffect(() => {
        document.title = "The Solar System - Orbit";
        ReactGA.send({ hitType: "pageview", page: "/orbit", title: "The Solar System - Orbit Page" });
    }, []);
    
    function handlePlayClick() {
        setPlaystate((prevState) => {
            return prevState === 'animationPause' ? 'animationPlay' : 'animationPause';
        });
    }

    function handleShowClick() {
        setPlanetPanel((prevState) => {
            const newState: any = { ...prevState };
            if (prevState.currentState !== '') {
                newState[prevState.currentState] = 'planetListHide';
                setPlanetPanel((prevState) => ({ ...prevState, ...newState })); 
            }
            return { ...newState };
        });
        setShow((prevState) => {
            return { show: !prevState.show, class: prevState.show ? 'planetListHide' : 'planetListShow' };
        });
    }

    function handlePlanetClick(planet: string) {
        const newState: any = planetPanel;
        if (newState[newState.currentState] === 'planetListShow' && newState.currentState === planet) {
            setPlanetPanel((prevState) => {         
                newState[prevState.currentState] = 'planetListHide';
                newState.currentState = '';
                return { ...newState };
            });
        } else {
            setPlanetPanel(() => {
                if (newState[newState.currentState] === 'planetListShow') {
                    newState[newState.currentState] = 'planetListHide';
                }
                newState.currentState = planet; 
                newState[planet] = 'planetListShow';
                return {...newState};
            });
        }      
    }

    function handleResetClick() {
        Array.from(document.querySelectorAll('.planetImg')).forEach(function(element) {
            (element as HTMLElement).style.animation = 'none';
            console.log((element as HTMLElement).offsetHeight);
            (element as HTMLElement).style.animation = ''; 
        });
        setPlaystate('animationPause');    
    }

    function handlePlanetMouseover(planet: string) {
        setPlanetMouseOver((prevState) => {
            const newState: any = { ...prevState };
            if (newState.currentState === '') {
                newState.currentState = planet;
                newState[planet] = 'planetHighlighted';
            }
            else {
                newState.currentState = planet;
                newState[planet] = 'planetHighlighted';
            }
            return { ...newState };
        });
    }

    function handlePlanetMouseout(planet: string) {
        setPlanetMouseOver((prevState) => {
            const newState: any = { ...prevState };
            newState[planet] = '';
            return { ...newState };
        });
    }

    return (
        <>
            <Navmenu />
             
            <div className = 'header'>
                <div className = 'title'>Solar Orbit of Planets</div>	
            </div>

            <div className = 'orbitIntroContainer'>
					<section className = 'orbitIntroduction'>
						<article className = 'orbitIntroPanel'>
							Welcome to The Solar System, a site that will give you a brief tour of the Earths' Sun and surrounding planets. Explore the space around Earth beginning with the Interplanetary Distance Calculator, select any two planets here and in seconds, measure the distance between them. Then discover a simulation of the orbit of the planets around the Sun. The orbits are displayed at a proportionally correct speed, showing you the differences between the speed of the planets revolving around the Sun. Finally move to the Gallery, where you will be treated to a spectacular view of space themed events and sights.
						</article>	
					</section>
				</div>
            
            <div className='solarWrap'>	
                
                <img className = 'pauseplay' src = {pausePlay} onClick={handlePlayClick}  alt = 'Red Pause/Play button' width = '25' height = '25' />
                <img className = 'reset' src = {reset} onClick={handleResetClick} alt = 'Red Reset button' width = '25' height = '25' />
                <img className = 'showIcon' src = {hideShow} onClick={handleShowClick} alt = 'Click Icon - indicates a hover action for the list of planets' width = '25' height = '25' />
                <aside className = {'planetList ' + show.class}>
                    <div className='sunText planetText' onClick={() => handlePlanetClick('sun')}  onMouseOver={() => handlePlanetMouseover('sun')} onMouseOut={() => handlePlanetMouseout('sun')}>
                        <div className='inline planetNumber'>1</div><div className='inline planet'>The Sun</div>
                    </div>
                    <div className = 'mercuryText planetText' onClick={() => handlePlanetClick('mercury')} onMouseOver={() => handlePlanetMouseover('mercury')} onMouseOut={() => handlePlanetMouseout('mercury')}>
                        <div className = 'inline planetNumber'>2</div><div className = 'inline planet'>Mercury</div>
                    </div>
                    <div className = 'venusText planetText' onClick={() => handlePlanetClick('venus')} onMouseOver={() => handlePlanetMouseover('venus')} onMouseOut={() => handlePlanetMouseout('venus')}>
                        <div className = 'inline planetNumber'>3</div><div  className = 'inline planet'>Venus</div>
                    </div>
                    <div className = 'earthText planetText' onClick={() => handlePlanetClick('earth')} onMouseOver={() => handlePlanetMouseover('earth')} onMouseOut={() => handlePlanetMouseout('earth')}>
                        <div className = 'inline planetNumber'>4</div><div className = 'inline planet'>Earth</div>
                    </div>
                    <div className = 'marsText planetText' onClick={() => handlePlanetClick('mars')} onMouseOver={() => handlePlanetMouseover('mars')} onMouseOut={() => handlePlanetMouseout('mars')}>
                        <div className = 'inline planetNumber'>5</div><div className = 'inline planet'>Mars</div>
                    </div>
                    <div className = 'jupiterText planetText' onClick={() => handlePlanetClick('jupiter')} onMouseOver={() => handlePlanetMouseover('jupiter')} onMouseOut={() => handlePlanetMouseout('jupiter')}>
                        <div className = 'inline planetNumber'>6</div><div className = 'inline planet'>Jupiter</div>
                    </div>
                    <div className = 'saturnText planetText' onClick={() => handlePlanetClick('saturn')} onMouseOver={() => handlePlanetMouseover('saturn')} onMouseOut={() => handlePlanetMouseout('saturn')}>
                        <div className = 'inline planetNumber'>7</div><div className = 'inline planet'>Saturn </div>
                    </div>
                    <div className = 'uranusText planetText' onClick={() => handlePlanetClick('uranus')} onMouseOver={() => handlePlanetMouseover('uranus')} onMouseOut={() => handlePlanetMouseout('uranus')}>
                        <div className = 'inline planetNumber'>8</div><div className = 'inline planet'>Uranus</div>
                    </div>
                    <div className = 'neptuneText planetText' onClick={() => handlePlanetClick('neptune')} onMouseOver={() => handlePlanetMouseover('neptune')} onMouseOut={() => handlePlanetMouseout('neptune')}>
                        <div className = 'inline planetNumber'>9</div><div className = 'inline planet'>Neptune</div>
                    </div>
                </aside>
            
                <img id = 'handIcon' src = {handCursor} alt = 'Hand Icon - indicates a hover action for the list of planets' width = '25' height = '25' />
                <span className='handTooltip'>Hover over a planet name!</span>
                <img id = 'clickIcon' src = {clickCursor} alt = 'Click Icon - indicates a hover action for the list of planets' width = '25' height = '25' />
                <span className='clickTooltip'>Click on a planet name!</span>
                <img id = 'showIconPanel' src = {hideShow} alt = 'Click Icon - indicates a hover action for the list of planets' width = '25' height = '25' />
            
                <img id = 'sun' className = {'sunCenter planetImg ' + playstate + ' ' + planetMouseOver.sun} src = '/images/dig252-react-ts/planets/sun_resized.png' alt = 'The Sun - Stationary' width = '60' height = '60' />
                
                <img id = 'earth' className = {'earthCenter planetImg ' + playstate  + ' ' + planetMouseOver.earth}  src = '/images/dig252-react-ts/planets/earth_resized.png' alt = 'The Earth - In orbit around the Sun' width = '15' height = '15' />
                
                <img id = 'mercury' className = {'mercuryCenter planetImg ' + playstate + ' ' + planetMouseOver.mercury} src = '/images/dig252-react-ts/planets/mercury_resized.png' alt = 'Mercury - In orbit around the Sun' width = '5' height = '5' />
                
                <img id = 'venus' className = {'venusCenter planetImg ' + playstate  + ' ' + planetMouseOver.venus}  src = '/images/dig252-react-ts/planets/venus_resized.png' alt = 'Venus - In orbit around the Sun' width = '14' height = '14' />
                
                <img id = 'mars' className = {'marsCenter planetImg ' + playstate  + ' ' + planetMouseOver.mars} src = '/images/dig252-react-ts/planets/mars_resized.png' alt = 'Mars - In orbit around the Sun' width = '8' height = '8' />
                
                <img id = 'jupiter' className = {'jupiterCenter planetImg ' + playstate + ' ' + planetMouseOver.jupiter} src = '/images/dig252-react-ts/planets/jupiter_resized.png' alt = 'Jupiter - In orbit around the Sun' width = '28' height = '28' />
                
                <img id = 'saturn' className = {'saturnCenter planetImg ' + playstate + ' ' + planetMouseOver.saturn} src = '/images/dig252-react-ts/planets/saturn_resized.png' alt = 'Saturn - In orbit around the Sun' width = '23' height = '23' />
                
                <img id = 'uranus' className = {'uranusCenter planetImg ' + playstate + ' ' + planetMouseOver.uranus}  src = '/images/dig252-react-ts/planets/uranus_resized.png' alt = 'Uranus - In orbit around the Sun' width = '18' height = '18' />
                
                <img id = 'neptune' className = {'neptuneCenter planetImg ' + playstate + ' ' + planetMouseOver.neptune} src = '/images/dig252-react-ts/planets/neptune_resized.png' alt = 'Neptune - In orbit around the Sun' width = '16' height = '16' />
            
                <section className = 'contentPanel'>
                    
                    <article className = {'panel ' + planetPanel.sun}>The sun lies at the heart of the solar system, where it is by far the largest object. It holds 99.8 percent of the solar system's mass and is roughly 109 times the diameter of the Earth — about one million Earths could fit inside the sun. The visible part of the sun is roughly 10,000 degrees F (5,500 degrees C), while temperatures in the core reach more than 27 million degrees F (15 million degrees C), driven by nuclear reactions.</article>
                    
                    <article className =  {'panel ' + planetPanel.mercury}>Mercury is the closest planet to the sun. As such, it circles the sun faster than all the other planets, which is why Romans named it after the swift-footed messenger god Mercury. The orbit of Mercury is the most eccentric of the planets in our Solar System. The planet has an orbital period of 87.969 Earth days. </article>
                    
                    <article className =  {'panel ' + planetPanel.venus}>Venus and Earth are often called twins because they are similar in size, mass, density, composition and gravity. However, the similarities end there. Venus is the hottest world in the solar system. The orbit of Venus is the most circular in the entire Solar System. In mathematical terms, the eccentricity of Venus is less than 0.01. A year on Venus lasts 223 days.</article>
                    
                    <article className =  {'panel ' + planetPanel.earth}>The Earth’s orbit around the Sun has many interesting characteristics. First, the speed of our orbit is 108,000 km/h. The planet travels 940 million km during one orbit. The Earth completes one orbit every 365.242199 mean solar days(that might help explain the need for a leap year). The planet’s distance from the Sun varies as it orbits. Actually, the Earth is never the same distance from the Sun from day to day.</article>
                    
                    <article className =  {'panel ' + planetPanel.mars}>The orbit of Mars is the second most eccentric in the Solar System. Only Mercury’s orbit is more eccentric. It takes Mars approximately 687 Earth days to complete on orbit. The orbit of a planet varies in relation to the gravitational influences of the bodies around it, so the eccentricity can change over time. AS recently as 1.35 million years ago, Mars was in a nearly circular orbit.</article>
                    
                    <article className =  {'panel ' + planetPanel.jupiter}>The orbit of Jupiter, like that of all the planets, is really elliptical instead of circular. At perihelion(closest approach) Jupiter comes within 741 million km, or 4.95 astronomical units(AU), of the Sun. Jupiter is the fifth planet from the Sun, but it is the third brightest object in the night sky here on Earth. Jupiter takes 11.86 Earth years, or 4331 Earth days to complete one orbit.</article>
                    
                    <article className =  {'panel ' + planetPanel.saturn}>The orbit of Saturn lasts 29.7 years. In other words, during the time Saturn completes one full revolution around the Sun, Earth has gone through almost 30 years. The closest point of Saturn’s orbit is called its perihelion. At this point, Saturn is only 1.353 billion km or 9 astronomical units from the Sun (1 AU is the average distance from the Earth to the Sun).</article>
                    
                    <article className =  {'panel ' + planetPanel.uranus}>The orbit of Uranus takes 84.3 year to complete one revolution around the Sun. In other words, 1 Uranian year is 84.3 Earth years. Uranus is unique among the planets in the Solar System because of its axial tilt. While Earth is tilted at a mere 23.5 degrees, Uranus has rolled over completely sideways, with an axial tilt of 99-degrees. This has a significant impact on the planet’s seasons. The north pole of Uranus experiences 42 years of complete darkness, followed by 42 years of sunlight, where the Sun never dips below in the horizon.</article>
                    
                    <article className =  {'panel ' + planetPanel.neptune}>Neptune orbits the Sun at an average distance of 4.5 billion km. One interesting feature about the orbit of Neptune is the fact that Pluto’s very elliptical orbit sometimes brings it closer to the Sun. Back in the days when Pluto was still a planet, it would spend a few decades every orbit closer to the Sun. So Neptune was actually the most distant planet, and Pluto was closer. The last time this happened started in 1979, and ended in 1999. Of course, Pluto isn’t a planet any more, so Neptune’s orbit makes it the most distant planet.</article>
                </section>
            </div>
                
            
            <Footer />
        </>
    );
}
export default Orbit;