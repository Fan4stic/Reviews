import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <div>
        <textarea id="form" name="makeReview" placeholder="Submit your review here" rows="30" cols="100"/>
        <br/>
      </div>
    );
  }
}

export default Form;