import React from 'react';
import ListItem from './ListItem.jsx';


const ReviewList = (props) => (
  <div>
    <ul>
      {props.reviews.map((review, i) =>
        <ListItem key={review.revID} key={i} review={review} toggleButton={props.toggleButton} />)}
      <hr />
    </ul>
  </div>
);
//could slice the array and map only those... to create pages
export default ReviewList;