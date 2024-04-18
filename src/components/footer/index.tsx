import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Footer = () => {
       
    return (
        <>
            <div className = 'siteFooter'>
				<div className = 'mapHolder inline'>
					<div className = 'mapHeading'>Sitemap</div>
					<Link className = 'mapHome footerText' to='/'>Homepage</Link><br />
                    <Link className = 'map footerText' to='/solar_system'>Solar System</Link><br />
                    <Link className = 'map footerText' to='/orbit'>Solar Orbit</Link><br />
                    <Link className = 'map footerText' to='/gallery'>Gallery</Link>
				</div>
				<div className = 'inline copyrightHolder'>
					<div className = 'nameHolder'>
						<div className = 'footerText'><br/>&copy; Michael Baggott 2024</div>
					</div>
				</div>
			</div>
        </>
    );
}
export default Footer;
