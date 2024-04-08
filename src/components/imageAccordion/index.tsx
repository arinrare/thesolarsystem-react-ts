import React from 'react';
import {ReactImageAccordion} from 'react-image-accordion';

const ImageAccordion = () => {
    const accordionData = [
        {
            id: 1,
            title: "Interplanetary Distance Calculator",
            image: "/images/accordionSlider/solar_system.jpg",
            alt: "First slider panel",
            content: "Visit this page for a spin around the Solar System that will calculate your distances travelled as you go. Set your starting point and destination as you see fit!",
            svg: "aa (1).svg",
        },
        {
            id: 2,
            title: "Orbit of the Planets",
            image: "/images/accordionSlider/orbit.jpg",
            alt: "Second slider panel",
            content: "A simulated orbit of the planets around the sun in a proportionally accurate representation of the speeds that the planets orbit. Select a planet to see its position in the Solar System, and get some orbital facts!",
            svg: "aa (2).svg",
        },
        {
            id: 3,
            title: "Gallery",
            image: "/images/accordionSlider/gallery.jpg",
            alt: "Third slider panel",
            content: "A mesmerising gallery of interesting sights in our Solar System. From Earth, to Saturn, to the beautiful Aurora Borealis, see the image alone or keep the mouse moving to discover some interesting facts.",
            svg: "aa (3).svg",
        },
    ];
    const AccordionWidth= "40rem";
    const AccordionHeight= "30rem";
    const ContentSize = [
        "0.5rem",
        "0.8rem",
        "1rem",
        "1.2rem",
        "1.5rem"
      ]

    return (
        <ReactImageAccordion
            accordionData={accordionData}
            AccordionWidth={AccordionWidth}
            AccordionHeight={AccordionHeight}
            ContentSize={ContentSize}
            onClick={(id: 1) => console.log(id)}
            ShowButton={true}
        />
    );
}
export default ImageAccordion;
