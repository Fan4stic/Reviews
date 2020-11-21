import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import StartReview from './StartReview.jsx';
import Modal from './Modal.jsx';
import Form from './Form.jsx';
import Stars from './Stars.jsx';
import Pagination from './Pagination.jsx';



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

// const indexOfLastReview = currentPage * reviewsPerPage;
// const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
// const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);


class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      currentReviews: [],
      currentPage: 1,
      reviewsPerPage: 10,
      indexOfFirstReview: 0,
      indexOfLastReview: 10,
      show: false

    };

    this.selectPage = this.selectPage.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

    // this.toggleButton = this.toggleButton.bind(this);
  }

  componentDidMount() {
    axios.get('/api/restaurants/1/reviews')
      .then((info)=> {
        this.setState({reviews: info.data, currentReviews: info.data.slice(0, 10)});
      })
      .catch((err) => console.log(err));
  }

  selectPage(e) {
    // e.preventDefault;
    let start = (e.target.value - 1) * 10;
    let end = (e.target.value) * 10;
    this.setState({currentReviews: this.state.reviews.slice(start, end)});
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }
  // toggleButton(i) {
  //   let rev = this.state.reviews;
  //   rev[i][useful] = rev[i][useful] + 1;
  //   this.setState({ reviews: rev });
  // }




  render() {

    return (
      <div>
        <div style={startRevStyle}>
          <img style={{ width: "148px", height: "68px" }}src="https://s3-us-west-1.amazonaws.com/fec.yelp/yelpStyle/Imageye+-+Styleguide/empty_profile%402x.yji-f52f768da99ad105f2d4ad4190f25c31.png"/>
          <div ><Stars showModal={this.showModal}/></div>
          {this.state.show ? <Modal resname={this.state.reviews[0].resName} handleClose={this.hideModal}>
            {/* <Form reviews={this.state.reviews}/>
            <button style={submitStyling} onClick={this.hideModal}>Post Review</button> */}
          </Modal> : null}
        </div>
        <div>
          <ReviewList toggleButton={this.toggleButton} reviews={this.state.currentReviews}/>
          <Pagination selectPage={this.selectPage} reviewsPerPage={10} totalReviews={this.state.reviews.length} />
        </div>
      </div>
    );
  }
}

export default Reviews;