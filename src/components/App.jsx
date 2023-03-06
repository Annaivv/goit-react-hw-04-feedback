import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Layout } from './Layout';
import { Notification } from './Notification';
import { Statistics } from './Statistics';

const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = evt => {
    switch (evt.currentTarget.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalAmount = countTotalFeedback();
    let positivePercent = 0;
    if (good > 0) {
      positivePercent = Math.round((good / totalAmount) * 100);
    }

    return positivePercent;
  };

  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        />

        {good === 0 && neutral === 0 && bad === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Layout>
  );
};

// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };
// {
