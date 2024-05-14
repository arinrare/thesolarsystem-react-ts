import React from 'react';
import ReactGA from 'react-ga4';
import './index.css';
import Navmenu from '../../components/navmenu'
import Carousel from '../../components/carousel';
import Footer from '../../components/footer';

const SolarSystem = () => {
    React.useEffect(() => {
        document.title = "The Solar System - Distance Calculator";
        ReactGA.send({ hitType: "pageview", page: "/thesolarsystem/distancecalculator", title: "The Solar System - Distance Calculator Page" });
    }, []);

    return (
        <>
            <Navmenu />
            <div className = 'header'>
                <div className = 'title'>Interplanetary<br/>Distance Calculator</div>	
            </div>
            <Carousel />
            <Footer />
        </>
    );
}
export default SolarSystem;