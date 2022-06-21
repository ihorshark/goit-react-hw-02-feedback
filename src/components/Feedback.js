import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonClickHandler = e => {
    if (e.currentTarget.name === 'good') {
      this.setState(prevState => {
        return {
          good: prevState.good + 1,
        };
      });
    } else if (e.currentTarget.name === 'neutral') {
      this.setState(prevState => {
        return {
          neutral: prevState.neutral + 1,
        };
      });
    }
    if (e.currentTarget.name === 'bad') {
      this.setState(prevState => {
        return {
          bad: prevState.bad + 1,
        };
      });
    }
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((previousValue, state) => {
      return previousValue + state;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(
      Number((this.state.good / this.countTotalFeedback()) * 100)
    );
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button type="button" name="good" onClick={this.buttonClickHandler}>
          Good
        </button>
        <button type="button" name="neutral" onClick={this.buttonClickHandler}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.buttonClickHandler}>
          Bad
        </button>
        <h1>Statistics</h1>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>
          Positive feedback:{' '}
          {this.countPositiveFeedbackPercentage() > 0
            ? this.countPositiveFeedbackPercentage()
            : 0}
          %
        </p>
      </div>
    );
  }
}

export default Feedback;
