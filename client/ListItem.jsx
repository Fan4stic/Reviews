import React from 'react';

const divStyle = {
  margin: '20px 0px 0px 20px',
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gridTemplateRows: '1fr',
  gridColumnGap: '6px',
  gridTemplateAreas: 'aside section',
  borderBottom: 'solid',
  borderBottomWidth: 'thin',
  padding:'0px'
};

const textStyle = {
  textAlign: 'left',
  fontSize: '14px',
  color: '#333',
  padding: '0px',
  margin: '0px'
};

const buttonStyle = {
  margin: '5px',
  padding: '0px 12px',
  height: '30px',
  color: 'gray',
  background: 'white',
  borderRadius: '4px',
  borderColor: 'lightgray',
  borderWidth: 'thin'
};

const avatar = {
  margin: '5px',
  width: '60px',
  height: '60px',
  borderRadius: '4px',
  float: 'left',

};

const detailStyle = {
  fontSize: '12px',
  textAlign: 'left',
};

//need to style aside so it shows details to side of image
//add conditional render images to bottom
const ListItem = (props) => (
  <div style={divStyle}>
    <aside>
      <img style={avatar} src={props.review.avatar} />
      <div style={{fontWeight: 'bold', fontSize: '14px'}}>{props.review.userName}</div>
      <div style={{fontSize: '14px'}}>{props.review.city}, {props.review.userState}</div>
      <div style={detailStyle}>{props.review.friends}</div>
      <div style={detailStyle}>{props.review.reviews}</div>
      <div style={{color: '#d32323', fontSize: '14px'}}>{props.review.elite ? "Elite '2020" : null}</div>
    </aside>
    <section> {props.review.rating} {props.review.reviewDate}
      <br></br>
      <div style={textStyle}> {props.review.reviewText}</div>
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