import React, { useState } from 'react';
import Stars from './Stars.jsx';

const reviewBoxStyle = {
  height: "101px",
  width: "416px",
  padding: "24px",
  border: "1px",
  backgroundColor: "#f5f5f5",
  borderRadius: "4px"
};

const textStyle = {
  textAlign: "center",
  color: "#00838f"

};
const StartReview = (props) => {


  return (
    <div style={reviewBoxStyle}>
      <Stars showModal={props.showModal}/>
      <hr/>
      <span style={textStyle}>Start your review of restaurant {props.loaded ? props.resName : 'loading'} here</span>
    </div>
  );
};


export default StartReview;