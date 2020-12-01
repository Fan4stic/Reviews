import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import StartReview from './StartReview.jsx';
import Modal from './Modal.jsx';
import Form from './Form.jsx';
import Stars from './Stars.jsx';
import Pagination from './Pagination.jsx';
import Search from './Search.jsx';
import styles from './style.css';


const wholeContainer = {
  width: '715px'
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
  verticalAlign: 'baseline',
  minHeight: '120px'
};

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
      show: false,
      plusUseful: false,
      plusFunny: false,
      plusCool: false,
      loaded: false

    };

    this.selectPage = this.selectPage.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.toggleFunny = this.toggleFunny.bind(this);
    this.toggleUseful = this.toggleUseful.bind(this);
    this.toggleCool = this.toggleCool.bind(this);

  }

  componentDidMount() {
    axios.get('/api/restaurants/5/reviews')
      .then((info)=> {
        this.setState({reviews: info.data, currentReviews: info.data.slice(0, 10)});
      })
      .then(()=> this.setState({loaded: true}))
      .catch((err) => console.log(err));
  }

  selectPage(e) {
    e.preventDefault();
    let start = (e.target.value - 1) * this.state.reviewsPerPage;
    let end = (e.target.value) * this.state.reviewsPerPage;
    this.setState({currentReviews: this.state.reviews.slice(start, end), currentPage: parseInt(e.target.value)});
    window.scrollTo({
      top: 0
    });
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  toggleFunny(e) {
    e.preventDefault();
    this.setState({ plusFunny: !this.state.plusFunny });
  }

  toggleUseful(e) {
    e.preventDefault();
    this.setState({ plusUseful: !this.state.plusUseful });
  }

  toggleCool(e) {
    e.preventDefault();
    this.setState({ plusCool: !this.state.plusCool });
  }



  render() {
    return (
      <div style={wholeContainer}>
        <Search />
        <div style={startRevStyle}>
          <img style={{ width: "148px", height: "68px" }}src="https://s3-us-west-1.amazonaws.com/fec.yelp/yelpStyle/Imageye+-+Styleguide/empty_profile%402x.yji-f52f768da99ad105f2d4ad4190f25c31.png"/>
          <div >
            <StartReview loaded={this.state.loaded} resname={this.state.loaded ? this.state.reviews[0].resName : 'loading'} showModal={this.showModal} />
            {/* <Stars showModal={this.showModal}/> */}
          </div>
          {this.state.show ? <Modal resname={this.state.reviews[0].resName} handleClose={this.hideModal}>
          </Modal> : null}
        </div>
        <div>
          <ReviewList toggleFunny={this.toggleFunny} toggleCool={this.toggleCool} toggleUseful={this.toggleUseful} reviews={this.state.currentReviews} plusFunny={this.state.plusFunny} plusUseful={this.state.plusUseful} plusCool={this.state.plusCool} />
          <Pagination currentPage={this.state.currentPage} selectPage={this.selectPage} reviewsPerPage={10} totalReviews={this.state.reviews.length} />
        </div>
      </div>
    );
  }
}

export default Reviews;