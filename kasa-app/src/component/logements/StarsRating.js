import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
    return (
        <div className='starRatingContainer'>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label key={i}>
                        <FaStar className="star"
                            color={ratingValue <= rating ? '#FF6060' : '#e4e5e9'}
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default StarRating;
