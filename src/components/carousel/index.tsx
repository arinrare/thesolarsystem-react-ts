import React, { useEffect } from 'react';
import './index.css';
import '../../plugins/carousel/jquery.cloud9carousel.js';
import '../../plugins/carousel/jquery.reflection.js';
const $ = require('jquery');

const Carousel = () => {

    useEffect(() =>{
        $('#distance').hide();
        $('.fromto').hide();
        let showcase = $('#showcase'), title = $('#item-title')

        function rendered( carousel: { nearestItem: () => { (): any; new(): any; element: { (): any; new(): any; alt: any; }; }; floatIndex: () => number; } ) {
            title.text( carousel.nearestItem().element.alt || ' ' )
            // Fade in based on proximity of the item
            var c = Math.cos((carousel.floatIndex() % 1) * 2 * Math.PI)
            title.css('opacity', 0.5 + (0.5 * c))
            $('.left').fadeIn(1000);
            $('.right').fadeIn(1000);
        }
        showcase.Cloud9Carousel({
            yOrigin: 42,
            yRadius: 48,
            mirror: {
                gap: 12,
                height: 0.2
            },
            buttonLeft: $('.left'),
            buttonRight: $('.right'),
            autoPlay: 0,
            bringToFront: true,
            onRendered: rendered,
            onLoaded: function() {
                showcase.css( 'visibility', 'visible' )
                showcase.css( 'display', 'none' )
                showcase.fadeIn( 1500 ) 
            }    
        });
      },[])
       
    return (

        <div className='carouselWrapper'>
            <div className = 'showcaseWrapper'>
                <div className='showcaseInnerWrapper'>
                    <button className='left'>←</button>  
                    <div id='showcase'>
                        <img className = 'cloud9-item' src = '/images/planets/sun_resized.png' alt = 'The Sun' width = '260' height = '260' /> 

                        <img className = 'cloud9-item' src = '/images/planets/blank.png' alt = '&nbsp;' width = '200' height = '200' />       
                        
                        <img className = 'cloud9-item' src = '/images/planets/neptune_resized.png' alt = 'Neptune' width = '200' height = '200' />

                        <img className = 'cloud9-item' src = '/images/planets/uranus_resized.png' alt = 'Uranus' width = '200' height = '200' />

                        <img className = 'cloud9-item' src = '/images/planets/saturn_resized.png' alt = 'Saturn' width = '352' height = '200' />
                    
                        <img className = 'cloud9-item' src = '/images/planets/jupiter_resized.png' alt = 'Jupiter' width = '200' height = '200' />
                    
                        <img className = 'cloud9-item' src = '/images/planets/mars_resized.png' alt = 'Mars' width = '200' height = '200' />
                    
                        <img className = 'cloud9-item' src = '/images/planets/earth_resized.png' alt = 'Earth' width = '200' height = '200' />
                    
                        <img className = 'cloud9-item' src = '/images/planets/venus_resized.png' alt = 'Venus' width = '200' height = '200' />

                        <img className = 'cloud9-item' src = '/images/planets/mercury_resized.png' alt = 'Mercury' width = '200' height = '200' />
                        
                        <article className = 'introPanel'>
                            You have landed at the Interplanetary Distance Calculator. Select a planet to take off from, then a planet to land at. You will be propelled there instantly, and a distance in Kilometres of your journey will be recorded. Select another planet to take another journey from this location, or select the reset destination to have your flight path calculations start over.
                        </article>	
                    </div>    
                    <button className='right'>→</button> 
                </div>
            </div>
            <div id = 'distance'>
                <div id = 'distHeading' className = 'inline distance'>Distance Travelled:</div><div id = 'kilometres' className = 'inline distance'></div>
            </div>
            
            <footer id = 'footer'>
				<div className = 'fromto inline'>From:&nbsp;</div><div className = 'inline' id='from-title'></div><div className = 'fromto inline'>To:&nbsp;</div><p className = 'inline' id='item-title'></p>
			</footer>
            <div id = 'distanceTable'>
                <div id = 'km0'>0</div><div id = 'au0'>0</div>
                <div id = 'km1'>57910000</div><div id = 'au1'>0.387</div>
                <div id = 'km2'>108200000</div><div id = 'au2'>0.723</div>
                <div id = 'km3'>149600000</div><div id = 'au3'>1.000</div>
                <div id = 'km4'>227940000</div><div id = 'au4'>1.524</div>
                <div id = 'km5'>778330000</div><div id = 'au5'>5.203</div>
                <div id = 'km6'>1424600000</div><div id = 'au6'>9.523</div>
                <div id = 'km7'>2873550000</div><div id = 'au7'>19.208</div>
                <div id = 'km8'>4501000000</div><div id = 'au8'>30.087</div>
            </div>
            
            
        </div>
    );
}

export default Carousel;