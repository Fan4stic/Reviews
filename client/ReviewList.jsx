import React from 'react';
import ListItem from './ListItem.jsx';


const ReviewList = (props) => (
  <div>
    <ul>
      {props.reviews.map((review, i) =>
        <ListItem key={review.revID} review={review} toggleUseful={props.toggleUseful} toggleFunny={props.toggleFunny} toggleCool={props.toggleCool} plusUseful={props.plusUseful} plusFunny={props.plusFunny} plusCool={props.plusCool} />)}
      <hr />
    </ul>
  </div>
);
export default ReviewList;