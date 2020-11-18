import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ratingStyle = {
  cursor: "pointer",
  transition: "color 200ms"
};

const updateColor = (rating) => {
  if (rating < 1) {
    return "#e3e0da";
  } else if (rating < 2) {
    return "#dbaa56";
  } else if (rating < 3) {
    return "#e6a435";
  } else if (rating < 4) {
    return "f59218";
  } else if (rating < 5) {
    return "#f5641b";
  } else if (rating < 6) {
    return "#d32323";
  } else {
    return null;
  }
};

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  // color={ratingValue <= (hover || rating) ? "orange" : "lightGray"}
  return (
    <div>
      {[...Array(5)].map((star, i ) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input style={{display: 'none' }} type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
            <FaStar style={ratingStyle} size={40} key={i} color={ratingValue <= (hover || rating) ? updateColor(hover || rating) : "lightgray"} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );

};
export default StarRating;
