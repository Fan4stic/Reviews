import React, { useState } from 'react';
import Stars from './Stars.jsx';

const reviewBoxStyle = {
  minHeight: "101px",
  width: "416px",
  padding: "24px",
  border: "1px",
  backgroundColor: "#f5f5f5",
  borderRadius: "4px",
  alignContent: "center"
  // minHeight: '140px'
};

const textStyle = {
  textAlign: "center",
  color: "#00838f"

};

const starCenter = {
  textAlign: "center",

};

const StartReview = (props) => {


  return (
    <div style={reviewBoxStyle}>
      <div style={{textAlign: "center"}}>
        <Stars showModal={props.showModal}/>
      </div>
      <hr/>
      <div className="launchReview" onClick={props.showModal} style={{cursor: "pointer"}}>
        <span className="launchReview" >Start your review of </span>
        <span className="launchReview" style={{fontWeight: '900', color: 'teal'}}>{props.loaded ? props.resname : 'loading'}</span>
        <span className="launchReview" > here</span>
      </div>
    </div>
  );
};


export default StartReview;