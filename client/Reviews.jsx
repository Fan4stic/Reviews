import React from 'react';
import axios from 'axios';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews:[]
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
        <h3> Reviewsssssssss</h3>
      </div>
    );
  }
}

export default Reviews;