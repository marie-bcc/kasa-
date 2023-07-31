import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';


function Carousel({ pictures }) {
    const [activeIndex, setActiveIndex] = useState(0);

    function goToNextSlide() {
        let index = activeIndex;
        let slidesLength = pictures.length - 1;

        if (index === slidesLength) {
            index = -1;
        }

        ++index;

        setActiveIndex(index);
    }

    function goToPrevSlide() {
        let index = activeIndex;
        let slidesLength = pictures.length;

        if (index < 1) {
            index = slidesLength;
        }

        --index;

        setActiveIndex(index);
    }

    return (
        <div>
            <button onClick={goToPrevSlide}><FaArrowLeft /></button>
            <button onClick={goToNextSlide}><FaArrowRight /></button>

            {pictures.map((picture, index) => (
                <div
                    className="carousel"
                    key={index}
                    style={{
                        display: index === activeIndex ? "block" : "none",
                    }}
                >
                    <img className="carouselImage" src={picture} alt={`Slide ${index}`} />
                </div>
            ))}
        </div>
    );
}

export default Carousel;

