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

    return (
        <div className="carousel">
            <button className="carouselButtonPrev" onClick={prevImage}> <img src={prevImg}/> </button>
            <img className="carouselImage" src={pictures[index]}></img>
            <button className="carouselButtonNext" onClick={nextImage}><img src={nextImg}/></button>
        </div>
    )
}

export default Carousel;

