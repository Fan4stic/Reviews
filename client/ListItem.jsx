import React from 'react';

const divStyle = {
  margin: '20px 0px 0px 20px',
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gridTemplateRows: '1fr',
  gridColumnGap: '6px',
  gridTemplateAreas: 'aside section',
  borderTop: '1px solid #f5f5f5',
  borderTopWidth: 'thin',
  padding: '20px 0px 0px 20px',
  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  lineHeight: '20px',
  verticalAlign: 'baseline'
};

const textStyle = {
  textAlign: 'left',
  fontSize: '14px',
  color: '#333',
  padding: '0px',
  margin: '0px',
  lineHeight: '20px',
  fontWeight: '400px'
};

const buttonStyle = {
  margin: '15px 6px 15px 6px',
  padding: '0px 12px',
  height: '30px',
  color: 'gray',
  background: 'white',
  borderRadius: '4px',
  borderColor: 'lightgray',
  borderWidth: 'thin',
  boxShadow: 'none'
};

const avatar = {
  margin: '5px',
  width: '60px',
  height: '60px',
  borderRadius: '4px',
  float: 'left',

};

const asideStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 3fr',
  gridTemplateRows: '1fr',
  gridColumnGap: '2px',
  gridTemplateAreas: 'avatar details',
  margin: '0px',
  padding: '0px',
};

const detailStyle = {
  textAlign: 'left',
  margin: '0px',
  padding: '0px'
};

const reviewPhotoLarge = {
  height: '348px',
  width: '348px',
  borderRadius: '4px'

};
const reviewPhotoSmall = {
  height: '168px',
  width: '168px',
  borderRadius: '4px',
  margin: '4px'
};

const ratingToStars = (rating) => {
  if (rating < 1) {
    return "https://s3-us-west-1.amazonaws.com/fec.yelp/yelpStyle/Imageye+-+Styleguide/yelp_stars/web_and_ios/regular/regular_0.png";
  } else if (rating < 2) {
    return "https://s3-us-west-1.amazonaws.com/fec.yelp/yelpStyle/Imageye+-+Styleguide/yelp_stars/web_and_ios/regular/regular_1.png";
  } else if (rating < 3) {
    return "https://s3-us-west-1.amazonaws.com/fec.yelp/yelpStyle/Imageye+-+Styleguide/yelp_stars/web_and_ios/regular/regular_2.png";
  } else if (rating < 4) {
    return "https://s3-us-west-1.amazonaws.com/fec.yelp/yelpStyle/Imageye+-+Styleguide/yelp_stars/web_and_ios/regular/regular_3.png";
  } else if (rating < 5) {
    return "https://s3-us-west-1.amazonaws.com/fec.yelp/yelpStyle/Imageye+-+Styleguide/yelp_stars/web_and_ios/regular/regular_4.png";
  } else if (rating < 6) {
    return "https://s3-us-west-1.amazonaws.com/fec.yelp/yelpStyle/Imageye+-+Styleguide/yelp_stars/web_and_ios/regular/regular_5.png";
  } else {
    return null;
  }
};

const randInt = (n) => Math.floor(Math.random() * n);
//use 4 to determine how many photos

const photoUrl = (n) => {
  return `https://s3-us-west-1.amazonaws.com/fec.yelp/SamsFood/Imageye+-+Sushi+Sam_s+Edomata+-+Takeout+_+Delivery+-+4522+Photos+_+2320+Reviews+-+Sushi+Bars+-+218+E+3rd+Ave_+San+Mateo_+CA+-+Restaurant+Reviews+-+Phone+Number+-+Menu+-+Yelp/300s+(` + randInt(n) + `).jpg`;
};

const dateStyle = {
  color: '#757280',
  fontSize: '14px',
  verticalAlign: 'top',
  padding: '8px'
};

const smallTextStyle = {
  fontSize: '12px',
  lineHeight: '18px'
};
const starStyle = {
  width: '108px',
  height: '20px'
};
//need to style aside so it shows details to side of image
//add conditional render images to bottom
const ListItem = (props) => (
  <div style={divStyle}>
    <aside style={asideStyle}>
      <img style={avatar} src="https://i.pravatar.cc/100" />
      <div style={detailStyle}>
        <div style={{fontWeight: 'bold', fontSize: '14px'}}>{props.review.userName}</div>
        <div style={{fontSize: '14px'}}>{props.review.city}, {props.review.userState}</div>
        <div style={smallTextStyle}>{props.review.friends} friends</div>
        <div style={smallTextStyle}>{props.review.reviews} reviews</div>
        <div style={{color: '#d32323', fontSize: '14px'}}>{props.review.elite ? "Elite '2020" : null}</div>
      </div>
    </aside>
    <section>
      <img style={starStyle} src={ratingToStars(props.review.rating)}/>
      <span style={dateStyle}>{props.review.reviewDate.slice(5, 7) + '/' + props.review.reviewDate.slice(-2) + '/' + props.review.reviewDate.slice(0, 4)}
      </span>
      <br></br>
      <br></br>
      <div style={textStyle}> {props.review.reviewText}</div>
      <br></br>
      <div>
        {[...Array(randInt(4))].map((pic, i, arr) => {
          return (
            <img key={i} style={((arr.length !== 2) && (i === 0)) ? reviewPhotoLarge : reviewPhotoSmall} src ={photoUrl(17)} />);
        })}
      </div>
      <div>
        <button name="useful" onClick={() => props.toggleButton()} style={buttonStyle}>Useful {props.review.useful}</button>
        <button name="funny" style={buttonStyle}>Funny {props.review.funny}</button>
        <button name="cool" style={buttonStyle}>Cool {props.review.cool}</button>
      </div>
    </section>
  </div>
);

export default ListItem;