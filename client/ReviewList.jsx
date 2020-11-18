import React from 'react';
import ListItem from './ListItem.jsx';


const ReviewList = (props) => (
  <div>
    <ul>
      {props.reviews.map((review) =>
        <ListItem key={review.revID} review={review} />)}
      <hr />
    </ul>
  </div>
);
//could slice the array and map only those... to create pages
export default ReviewList;