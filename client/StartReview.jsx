import React, { useState } from 'react';
import Stars from './Stars.jsx';

const reviewBoxStyle = {
  minHeight: "101px",
  width: "416px",
  padding: "24px",
  border: "1px",
  backgroundColor: "#f5f5f5",
  borderRadius: "4px",
  // minHeight: '140px'
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
      <div onClick={props.showModal} style={{cursor: "pointer"}}>
        <span style={textStyle}>Start your review of </span>
        <span style={{fontWeight: '900', color: 'teal'}}>{props.loaded ? props.resname : 'loading'}</span>
        <span style={textStyle}> here</span>
      </div>
    </div>
  );
};


export default StartReview;