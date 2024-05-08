import { useState, useEffect } from 'react'
import Description from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
import Notification from '../Notification/Notification'

function App() {
  const [countFeedback, setCountFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("countFeedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (type, value = null) => {
    setCountFeedback((prevCountFeedback) => {
      if (value === null) {
        return {
          ...prevCountFeedback,
          [type]: prevCountFeedback[type] + 1,
        };
      } else {
        return {
          ...prevCountFeedback,
          [type]: value,
        };
      }
    });
  };

  const resetFeedback = () => {
    setCountFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    localStorage.setItem("countFeedback", JSON.stringify(countFeedback));
  }, [countFeedback]);

  const { good, neutral, bad } = countFeedback;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification totalFeedback={totalFeedback} />
      ) : (
        <Feedback
          countFeedback={countFeedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;