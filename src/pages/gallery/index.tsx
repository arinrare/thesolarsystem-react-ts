import React, { useState } from 'react';
import ReactGA from 'react-ga4';
import Navmenu from '../../components/navmenu'; 
import ImageGallery from 'react-image-gallery';
import Footer from '../../components/footer';
import './index.css';
import './image-gallery.scss';

const Gallery = () => {
    React.useEffect(() => {
        document.title = "The Solar System - Gallery";
        ReactGA.send({ hitType: "pageview", page: "/gallery", title: "The Solar System - Gallery Page" });
    }, []);
    
    const images = [
        {
          original: '/images/dig252-react-ts/gallery/aurora_borealis.jpg',
          thumbnail: '/images/dig252-react-ts/gallery/aurora_borealis_thumb.jpg',
          description: "Aurora Borealis: The bright dancing lights of the aurora are actually collisions between electrically charged particles from the sun that enter the earth's atmosphere. The lights are seen above the magnetic poles of the northern and southern hemispheres. They are known as 'Aurora borealis' in the north and 'Aurora australis' in the south.",
        },
        {
            original: '/images/dig252-react-ts/gallery/sun_erupting.jpg',
            thumbnail: '/images/dig252-react-ts/gallery/sun_erupting_thumb.jpg',
            description: "Solar Flare: Though the sun lies 93 million miles (149 million km) from Earth, its unceasing activity assures an impact on our planet far beyond the obvious light and heat. From a constant stream of particles in the form of solar wind to the unpredictable bombardment from solar flares and coronal mass ejections, Earth often feels the effects of its stellar companions.",
        },
        {
            original: '/images/dig252-react-ts/gallery/milky_way.jpg',
            thumbnail: '/images/dig252-react-ts/gallery/milky_way_thumb.jpg',
            description: "The Milky Way: As galaxies go, the Milky Way is a middleweight. The largest galaxy known, IC 1101, has over 100 trillion stars, and other large galaxies can have more than a trillion stars. Smaller galaxies like the aforementioned Large Magellanic Cloud, have about 10 billion stars. The Milky Way has between 200-400 billion stars, but when you look up into the night sky the most you can see from any one point on the Earth is about 2,500.",
        },
        {
            original: '/images/dig252-react-ts/gallery/halleys_comet.jpg',
            thumbnail: '/images/dig252-react-ts/gallery/halleys_comet_thumb.jpg',
            description: "Halley's Comet: Halley's Comet is arguably the most famous comet. It is a 'periodic' comet and returns to Earth's vicinity about every 75 years, making it possible for a human to see it twice in his or her lifetime. The last time it was here was in 1986, and it is projected to return in 2061. The comet is named after English astronomer Edmond Halley, who examined reports of a comet approaching Earth in 1531, 1607 and 1682.",
        },
        {
            original: '/images/dig252-react-ts/gallery/earth_from_space.jpg',
            thumbnail: '/images/dig252-react-ts/gallery/earth_from_space_thumb.jpg',
            description: "Planet Earth: Earth is the third planet from the Sun and is the largest of the terrestrial planets. Unlike the other planets in the solar system that are named after classic deities the Earth's name comes from the Anglo-Saxon word erda which means ground or soil. The Earth was formed approximately 4.54 billion years ago and is the only known planet to support life.",
        },
        {
            original: '/images/dig252-react-ts/gallery/moon-surface.jpg',
            thumbnail: '/images/dig252-react-ts/gallery/moon-surface_thumb.jpg',
            description: "The Moon: The Moon (or Luna) is the Earth's only natural satellite and was formed 4.6 billion years ago around some 30-50 million years after the formation of the solar system. The Moon is in synchronous rotation with Earth meaning the same side is always facing the Earth. The first unmanned mission to the Moon was in 1959 by the Soviet Lunar Program with the first manned landing being Apollo 11 in 1969.",
        },
        {
            original: '/images/dig252-react-ts/gallery/saturns_rings.jpg',
            thumbnail: '/images/dig252-react-ts/gallery/saturns_rings_thumb.jpg',
            description: "Saturn: The rings of Saturn have puzzled astronomers since Galileo Galilei discovered them with his telescope in 1610. Detailed study by the Voyager 1 and Voyager 2 spacecraft in the 1980s only increased the mystery. The rings are believed to be pieces of comets, asteroids or shattered moons that broke up before they reached the planet. Each ring orbits at a different speed around the planet.",
        },
        {
            original: '/images/dig252-react-ts/gallery/apollo17_lunar_roving.jpg',
            thumbnail: '/images/dig252-react-ts/gallery/apollo17_lunar_roving_thumb.jpg',
            description: "Lunar Rover: Measuring 3.1m by 2.3m (wheelbase), three Lunar Rovers were used to ferry scientific equipment, tools, life support consumables, lunar rock samples, and up to two occupants on their Extra-Vehicular Activities over a total of 90km of the Moon's surface. The tool caddy was furnished with: a hammer, a sampling scoop, a brush, and a rake.",
        },
    ];

    const [fullscreen, setFullscreen] = useState('block');

    function fullScreenHandler() {
       
        if (fullscreen === 'block') {
            setFullscreen('none');
            document.querySelectorAll('.image-gallery-description').forEach(function(element) {
                (element as HTMLElement).style.display = 'none';
             });
        }
        else {
            setFullscreen('block');
            document.querySelectorAll('.image-gallery-description').forEach(function(element) {
                (element as HTMLElement).style.display = 'block';
             });
        }
        
    }
    
    return (
        <>
            <Navmenu />

            <div className = 'header'>
                <div className = 'title'>Gallery</div>	
            </div>


            <ImageGallery items={images} onScreenChange={fullScreenHandler} slideDuration={2} />
            <Footer />
        </>
    );
}
export default Gallery;