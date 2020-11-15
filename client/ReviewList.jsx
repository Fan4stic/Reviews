import React from 'react';
import ListItem from './ListItem.jsx';

const ReviewList = (props) => (
  <div>
    <ul>
      {props.reviews.map((review) =>
        <ListItem key={review.revID} review={review} />)}
    </ul>
  </div>
);

export default ReviewList;