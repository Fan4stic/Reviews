import React from 'react';

const divStyle = {
  margin: '6px',
  textAlign: 'left',
  fontSize: '14px',
  fontWeight: '400',
  color: '#333',
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gridTemplateRows: '1fr',
  gridColumnGap: '18px',
  gridTemplateAreas: 'aside section',
  borderBottom: 'solid',
  borderBottomWidth: 'thin',
  padding:'20px'
};

const buttonStyle = {
  margin: '10px',
  padding: '0px 16px',
  height: '30px',
  color: 'gray',
  background: 'white',
  borderRadius: '4px',
  borderColor: 'lightgray',
  borderWidth: 'thin'
};
//need to style aside so it shows details to side of image
//add conditional render images to bottom
const ListItem = (props) => (
  <div style={divStyle}>
    <aside>
      <img src="https://loremflickr.com/100/100" />
      <div>username</div>
    </aside>
    <section> {props.review.rating} {props.review.reviewDate}
      <br></br>
      <div> {props.review.reviewText}</div>
      <br></br>
      <div>
        <button style={buttonStyle}>Useful {props.review.useful}</button>
        <button style={buttonStyle}>Funny {props.review.funny}</button>
        <button style={buttonStyle}>Cool {props.review.cool}</button>
      </div>
    </section>
  </div>
);

export default ListItem;