import React, { Component } from 'react';
import './Feedback.css';

export class FeedbackOptions extends Component {
  state = {
    activeOptionIdx: null,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['button'];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push('button--active');
    }
    return optionClasses.join(' ');
  };

  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div>
        {options.map((option, index) => {
          return (
            <button
              key={index}
              name={option}
              className={this.makeOptionClassName(index)}
              onClick={evt => {
                this.setActiveIdx(index);
                onLeaveFeedback(evt);
              }}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }
}
