import React from 'react';
import ImageAccordion from '../../components/imageAccordion';
import Footer from '../../components/footer';
import './index.css';


const Home = () => {
  return (
    <>
      <div className="indexTitle">The Solar System</div>
      <ImageAccordion />
      <Footer />
    </>
  );
}
export default Home;