import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import StartReview from './StartReview.jsx';

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
        <StartReview />
        <ReviewList reviews={this.state.reviews}/>
      </div>
    );
  }
}

export default Reviews;