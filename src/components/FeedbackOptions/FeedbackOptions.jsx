import { useState } from 'react';
import PropTypes from 'prop-types';
import './Feedback.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  const [activeOptionIdx, setActiveOptionIdx] = useState(null);

  const makeOptionClassName = index => {
    const optionClasses = ['button'];

    if (index === activeOptionIdx) {
      optionClasses.push('button--active');
    }
    return optionClasses.join(' ');
  };

  return (
    <div>
      {options.map((option, index) => {
        return (
          <button
            key={index}
            name={option}
            className={makeOptionClassName(index)}
            onClick={evt => {
              setActiveOptionIdx(index);
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

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
