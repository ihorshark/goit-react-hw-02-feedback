import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  static propTypes = {
    onLeaveFeedback: PropTypes.func,
    options: PropTypes.object,
  };

  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <div>
        <button
          className={s.button}
          type="button"
          name="good"
          onClick={() => onLeaveFeedback('good')}
        >
          Good
        </button>
        <button
          className={s.button}
          type="button"
          name="neutral"
          onClick={() => onLeaveFeedback('neutral')}
        >
          Neutral
        </button>
        <button
          className={s.button}
          type="button"
          name="bad"
          onClick={() => onLeaveFeedback('bad')}
        >
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
