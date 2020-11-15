import React from 'react';

const ListItem = (props) => (
  <div>
    <img src="https://loremflickr.com/320/240" />
    <span> {props.review.rating} {props.review.reviewDate}</span>
    <br></br>
    <span> {props.review.reviewText}</span>
    <br></br>
  </div>
);

export default ListItem;