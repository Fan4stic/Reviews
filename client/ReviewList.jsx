import React from 'react';
import ListItem from './ListItem.jsx';


const ReviewList = (props) => (
  <div>
    <ul>
      <hr/>
      {props.reviews.map((review) =>
        <ListItem key={review.revID} review={review} />)}
      <hr />
    </ul>
  </div>
);

export default ReviewList;