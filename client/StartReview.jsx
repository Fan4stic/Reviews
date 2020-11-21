import React, { useState } from 'react';

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
const StartReview = ({toggle, content}) => {
  const [isShown, setIsShown] = useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  return (
    <div style={reviewBoxStyle}>
      {toggle(show)}
      {isShown && content(hide)}
      <hr/>
      <span style={textStyle}>Start your review of Restaurant here</span>
    </div>
  );
};


export default StartReview;