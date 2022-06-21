import React, { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button type="button" name="good" onClick={console.log(this.props)}>
          Good
        </button>
        <button
          type="button"
          name="neutral"
          //   onClick={this.props.buttonClickHandler()}
        >
          Neutral
        </button>
        <button
          type="button"
          name="bad"
          //   onClick={this.props.buttonClickHandler()}
        >
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
