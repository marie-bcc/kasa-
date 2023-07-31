import React, { useState } from 'react';
import data from '/Users/marie/Desktop/KASA/kasa-/kasa-app/src/annoncesLogements.json';
import nextImg from '/Users/marie/Desktop/KASA/kasa-/kasa-app/src/Styles/nextImg.png';
import prevImg from '/Users/marie/Desktop/KASA/kasa-/kasa-app/src/Styles/prevImg.png';

const pictures = data.pictures;
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

    return (
        <div className="carousel">
            <button className="carouselButtonPrev" onClick={prevImage}> <img src={prevImg}/> </button>
            <img className="carouselImage" src={pictures[index]}></img>
            <button className="carouselButtonNext" onClick={nextImage}><img src={nextImg}/></button>
        </div>
    )
}

export default Carousel;

