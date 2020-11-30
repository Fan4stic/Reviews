import React from 'react';
import style from './style.css';

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

const avatarUrl = (n) => {
  return `https://s3-us-west-1.amazonaws.com/fec.yelp/avatars/avatars/` + randInt(n) + `.jpeg`;
};

const dateStyle = {
  color: '#757280',
  fontSize: '14px',
  verticalAlign: 'top',
  padding: '8px'
};

const smallTextStyle = {
  fontSize: '12px',
  lineHeight: '18px',
};
const starStyle = {
  width: '108px',
  height: '20px'
};

const svgStyle = {
  padding: ' 0px',
  margin: '0px 5px',
  verticalAlign: 'bottom',
  fill: 'rgb(102, 102, 102)'
};

const buttonSVG = {
  padding: ' 0px',
  margin: '0px 5px',
  verticalAlign: 'bottom',

};

const buttonClicked = {
  backgroundColor: 'gray',
  fontWeight: '700',
  color: 'teal'
};
//need to style aside so it shows details to side of image
//add conditional render images to bottom
const ListItem = (props) => (
  <div style={divStyle}>
    <aside style={asideStyle}>
      <img style={avatar} src={avatarUrl(10)} />
      <div style={detailStyle}>
        <div style={{fontWeight: 'bold', fontSize: '14px'}}>{props.review.userName}</div>
        <div style={{fontSize: '14px'}}>{props.review.city}, {props.review.userState}</div>
        <div style={smallTextStyle}>
          <svg style={svgStyle} xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="iconsvg"><g><path d="M7.904 9.43l-2.098 4.697a.901.901 0 01-1.612 0L2.096 9.43a.902.902 0 01.806-1.305h4.196c.67 0 1.105.705.806 1.305zM5 7.375a2 2 0 110-4 2 2 0 010 4z"/><path d="M15.904 9.43l-2.098 4.697a.89.89 0 01-.806.498.89.89 0 01-.806-.498L10.096 9.43a.902.902 0 01.806-1.305h4.195c.67 0 1.106.705.807 1.305zM13 7.375a2 2 0 11.001-4.001A2 2 0 0113 7.375z" opacity=".502"/></g></svg>
          {props.review.friends} friends</div>
        <div style={smallTextStyle}>
          <svg style={svgStyle} xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="iconsvg">
            <path d="M13 3H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1.505 9.643l-2.526-1.551L6.528 12.7 7 9.934 5 7.977l2.766-.404L8.969 4.7l1.265 2.873L13 7.977l-2 1.957.495 2.709z"/>
          </svg>
          {props.review.reviews} reviews
        </div>
        <div style={smallTextStyle}>
          <svg style={svgStyle} xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="iconsvg"><path d="M15 15H3a2 2 0 01-2-2V6a2 2 0 012-2h2a2 2 0 012-2h4a2 2 0 012 2h2a2 2 0 012 2v7a2 2 0 01-2 2zM9 5a4 4 0 100 8 4 4 0 000-8zm0 6.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>
          {props.review.photoCount} photos
        </div>
        <div style={{color: '#ff523d', fontSize: '12px'}}>{props.review.elite ? "Elite '2020" : null}</div>
      </div>
    </aside>
    <section>
      <img style={starStyle} src={ratingToStars(props.review.rating)}/>
      <span style={dateStyle}>{props.review.reviewDate.slice(5, 7) + '/' + props.review.reviewDate.slice(-2) + '/' + props.review.reviewDate.slice(0, 4)}
      </span>
      {/* <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="icon_svg"><path d="M11.23 1A3.77 3.77 0 0115 4.77v6.46A3.77 3.77 0 0111.23 15H4.77a3.77 3.77 0 01-3.43-2.31l-.06-.06a3.61 3.61 0 01-.28-1.4V4.77A3.77 3.77 0 014.77 1h6.46zM3 4.77V11l5.73-5.44a1 1 0 011.38 0L13 8.3V4.77A1.77 1.77 0 0011.23 3H4.77A1.77 1.77 0 003 4.77zM11.23 13A1.77 1.77 0 0013 11.23v-.17l-3.58-3.4L4 12.81c.238.122.502.187.77.19h6.46zM5.02 6.83a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z"/></svg> {randInt(4)} photos
      </div> */}
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
        <button name="useful" className="btn" onClick={(e) => props.toggleButton(e)} >
          <svg style={buttonSVG} xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="iconsvg"><path d="M8 1a7 7 0 110 14A7 7 0 018 1zm0 2a5 5 0 100 10A5 5 0 008 3zM4.785 5.803A3.5 3.5 0 1110 10.06v.74a1.5 1.5 0 01-1.5 1.5h-1A1.5 1.5 0 016 10.8v-.74a3.5 3.5 0 01-1.215-4.257zM8 5.7a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/></svg>
          Useful {props.plus ? props.review.useful + 1 : props.review.useful}
        </button>
        <button name="funny" className="btn">
          <svg style={buttonSVG} xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="iconsvg"><path d="M8 1a7 7 0 110 14A7 7 0 018 1zm0 2a5 5 0 100 10A5 5 0 008 3zm3.43 6a.15.15 0 01.14.18 3.62 3.62 0 01-7.14 0A.15.15 0 014.57 9zm-1.07-2.553c.34.197.55.56.55.953h-2.2a1.1 1.1 0 011.65-.953zM6.19 6.3a1.1 1.1 0 011.1 1.1h-2.2a1.1 1.1 0 011.1-1.1z"/></svg>
          Funny {props.review.funny}
        </button>
        <button name="cool" className="btn">
          <svg style={buttonSVG} xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="iconsvg"><path d="M8 1a7 7 0 110 14A7 7 0 018 1zm0 2a5 5 0 100 10A5 5 0 008 3zm2.58 7.32a.15.15 0 01.16.23A3.43 3.43 0 018 12a3.43 3.43 0 01-2.74-1.42.15.15 0 01.16-.23 9.82 9.82 0 005.16-.03zm1.66-3.66a.26.26 0 01.25.34L12 8.5a1.78 1.78 0 01-1.7 1.21l-.15-.007A1.78 1.78 0 018.62 8.51L8.45 8A.48.48 0 008 7.67l-.086.009A.48.48 0 007.55 8l-.17.5A1.78 1.78 0 015.7 9.71l-.152-.005A1.78 1.78 0 014 8.5L3.51 7a.26.26 0 01.25-.34z"/></svg>
          Cool {props.review.cool}
        </button>
      </div>
    </section>
  </div>
);

export default ListItem;