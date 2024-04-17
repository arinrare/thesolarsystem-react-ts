import React from 'react';
import ImageAccordion from '../../components/imageAccordion';
import Footer from '../../components/footer';
import './index.css';


const Home = () => {
    return (
        <>
            <div className="indexTitle">The Solar System</div>
            <div className = "indexIntroContainer">
                <article className = "indexIntroPanel">
                    Welcome to The Solar System, a site that will give you a brief tour of the Sun and planets.<br/><br/>- Calculate distance between planets<br/>- View a proportnially correct simulation of planet orbits.<br/>- Discover an image gallery of space sights.
                </article>	
            
            </div>
            <ImageAccordion />
            <Footer />
        </>
    );
}
export default Home;