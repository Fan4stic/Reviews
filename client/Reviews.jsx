import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import StartReview from './StartReview.jsx';
import Modal from './Modal.jsx';
import Form from './Form.jsx';
import Stars from './Stars.jsx';

const submitStyling = {
  height: '40px',
  width: '166px',
  padding: '0px 16px',
  border: '1px',
  backgroundColor: '#f43939',
  color: '#fff',
  cursor: 'pointer',
  display: 'inline-block',
  textAlign: 'center',
  verticalAlign: 'middle',
  borderRadius: '4px',
  transition: '.8s',
  transitionProperty: 'background-image,background-color,background-position,background-size,border-color,box-shadow',
  font: '500 16px Arial'
};

const startRevStyle = {
  margin: '20px 0px 0px 20px',
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gridTemplateRows: '1fr',
  gridColumnGap: '6px',
  gridTemplateAreas: 'aside section',
  padding: '20px 0px 0px 20px',
  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  lineHeight: '20px',
  verticalAlign: 'baseline'
};


class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };

  }

  componentDidMount() {
    axios.get('/api/restaurants/1/reviews')
      .then((info)=> {
        this.setState({reviews: info.data});
      })
      .catch((err) => console.log(err));
  }



  render() {
    return (
      <div>
        <div style={startRevStyle}>
          <img style={{ width: "148px", height: "68px" }}src="https://s3-us-west-1.amazonaws.com/fec.yelp/yelpStyle/Imageye+-+Styleguide/empty_profile%402x.yji-f52f768da99ad105f2d4ad4190f25c31.png"/>
          <StartReview
            toggle={show => <div onClick={show}><Stars/></div>}
            content={hide => (
              <Modal>
                <Form reviews={this.state.reviews}/>
                <button style={submitStyling} onClick={hide}>Post Review</button>
              </Modal>
            )}
          />
        </div>
        <div>
          <ReviewList reviews={this.state.reviews}/>
        </div>
      </div>
    );
  }
}

export default Reviews;