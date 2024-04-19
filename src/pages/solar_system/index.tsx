import React from 'react';
import './index.css';
import Navmenu from '../../components/navmenu'
import Carousel from '../../components/carousel';
import Footer from '../../components/footer';

const SolarSystem = () => {
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