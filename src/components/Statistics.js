import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    return (
      <div>
        <h1>Statistics</h1>
        <p>Good: {this.props.good}</p>
        <p>Neutral: {this.props.neutral}</p>
        <p>Bad: {this.props.bad}</p>
        <p>Total: {this.props.total}</p>
        <p>
          Positive feedback:{' '}
          {this.props.positivePercentage > 0
            ? this.props.positivePercentage
            : 0}
          %
        </p>
      </div>
    );
  }
}

export default Statistics;
