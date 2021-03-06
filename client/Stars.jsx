import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

// const reviewBoxStyle = {
//   height: "101px",
//   width: "416px",
//   padding: "24px",
//   border: "1px",
//   backgroundColor: "#f5f5f5",
//   borderRadius: "4px"
// };

// const textStyle = {
//   textAlign: "center",
//   color: "#00838f"
// };

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

const StarRating = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div >
      {[...Array(5)].map((star, i ) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input style={{display: 'none' }} type="radio" name="rating" value={ratingValue} onClick={() => {
              setRating(ratingValue);
              props.showModal();
            }} />
            <FaStar style={ratingStyle} size={40} key={i} color={ratingValue <= (hover || rating) ? updateColor(hover || rating) : "lightgray"} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <br></br>
      {/* <hr /> */}
      {/* <span style={textStyle}>Start your review of Restaurant</span> */}
    </div>
  );

};
export default StarRating;
