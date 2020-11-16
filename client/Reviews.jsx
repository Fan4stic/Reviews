import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import StartReview from './StartReview.jsx';
import Modal from './Modal.jsx';
import Form from './Form.jsx';

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
        <StartReview
          toggle={show => <img src="https://loremflickr.com/320/240/person" onClick={show}></img>}
          content={hide => (
            <Modal>
              <Form />
              <button onClick={hide}>Submit Review</button>
            </Modal>
          )}
        />
        <ReviewList reviews={this.state.reviews}/>
      </div>
    );
  }
}

export default Reviews;