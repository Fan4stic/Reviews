import React from 'react';
import Stars from './Stars';

const textAreaStyle = {
  outline: 'none',
  border: '0px',
  cursor: 'text'
};

const formStyle = {
  // outline: 'solid',
  border: '1px solid #bbbac0',
  padding: '20px',
  borderColor: 'black',
  borderRadius: '4px',
  margin: ' 20px 0px 25px 0px'

};


class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }


  render() {
    return (
      <div style={formStyle}>
        <span></span>
        <Stars />
        <textarea style={textAreaStyle} id="form" name="makeReview" placeholder="Submit your review here" rows="30" cols="100" value={this.state.text} onChange={this.handleChange}/>
        <br/>
      </div>
    );
  }
}

export default Form;