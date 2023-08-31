import React, { useState } from 'react';
import nextImg from '../Styles/nextImg.png';
import prevImg from '../Styles/prevImg.png';

const Carousel = ({ pictures }) => {
    const [index, setIndex] = useState(0);

    const nextImage = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= pictures.length ? 0 : newIndex);
    }

    const prevImage = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? pictures.length - 1 : newIndex);
    }

    const hasMultipleImages = pictures.length > 1;

    return (
        <div className="carousel">
            {hasMultipleImages && (
                <button className="carouselButtonPrev" onClick={prevImage}>
                    <img src={prevImg}/>
                </button>
            )}
            <img className="carouselImage" src={pictures[index]} alt="carousel" />
            {hasMultipleImages && (
                <button className="carouselButtonNext" onClick={nextImage}>
                    <img src={nextImg}/>
                </button>
            )}
            <div className="positionIndicator">
                {`${index + 1}/${pictures.length}`}
            </div>
        </div>
    )
}

export default Carousel;


