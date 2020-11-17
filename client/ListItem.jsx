import React from 'react';

const divStyle = {
  margin: '6px',
  textAlign: 'left',
  fontSize: '14px',
  fontWeight: '400',
  color: '#333',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 4fr',
  gridTemplateRows: '1fr',
  gridColumnGap: '6px',
  gridTemplateAreas: 'aside details section',
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

const avatar = {
  width: '50px',
  height: '50px',
  borderRadius: '4px'
};

const detailStyle = {
  fontSize: '9px',
  textAlign: 'left',
};

//need to style aside so it shows details to side of image
//add conditional render images to bottom
const ListItem = (props) => (
  <div style={divStyle}>
    <aside>
      <img style={avatar} src={props.review.avatar} />
    </aside>
    <section>
      <div style={{fontWeight: 'bold', fontSize: '10px'}}>{props.review.userName}</div>
      <div style={{fontSize: '10px'}}>{props.review.city}, {props.review.userState}</div>
      <div style={detailStyle}>{props.review.friends}</div>
      <div style={detailStyle}>{props.review.reviews}</div>
      <div style={{color: '#d32323', fontSize: '9px'}}>{props.review.elite ? "Elite '2020" : null}</div>
    </section>
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