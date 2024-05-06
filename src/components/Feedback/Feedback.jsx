
import css from "./Feedback.module.css";

export function Feedback({
    countFeedback: { good, neutral, bad },
    totalFeedback,
    positiveFeedback,
  }) {
    return (
      <div className={css.containerFeedback}>
        <p className={css.feedbackGood}>Good: {good}</p>
        <p className={css.feedbackNeutral}>Neutral: {neutral}</p>
        <p className={css.feedbackBad}>Bad: {bad}</p>
        <p className={css.totalFeedback}>Total: {totalFeedback}</p>
        <p className={css.positiveFeedback}>
          Positive feedback: {positiveFeedback}%
        </p>
      </div>
    );
  }

export default Feedback;