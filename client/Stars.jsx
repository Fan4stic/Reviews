import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ratingStyle = {
  cursor: "pointer",
  transition: "color 200ms"

};

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);


  return (
    <div>
      {[...Array(5)].map((star, i ) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input style={{display: 'none' }} type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
            <FaStar style={ratingStyle} size={40} key={i} color={ratingValue <= (hover || rating) ? "orange" : "lightGray"} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );

};
export default StarRating;
