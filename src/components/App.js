import React, { Component } from 'react';
// import Feedback from './Feedback';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

class App extends Component {
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
    // const { good, neutral, bad } = this.state;

    return (
      <>
        {/* <Section title={ } /> */}
        <FeedbackOptions
          onLeaveFeedback={this.buttonClickHandler()}
        ></FeedbackOptions>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      </>
    );
  }
}

export default App;
