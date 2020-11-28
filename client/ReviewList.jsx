import React from 'react';
import ListItem from './ListItem.jsx';


const ReviewList = (props) => (
  <div>
    <ul>
      {props.reviews.map((review, i) =>
        <ListItem key={review.revID} key={i} review={review} toggleButton={props.toggleButton} plus={props.plus} />)}
      <hr />
    </ul>
  </div>
);
export default ReviewList;