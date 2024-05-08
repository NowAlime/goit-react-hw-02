import css from "./Options.module.css";


export function Options({ resetFeedback, updateFeedback, totalFeedback }) {
  return (
    <div className={css.buttonList}>
      <button
        className={css.buttonStyle}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={css.buttonStyle}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={css.buttonStyle} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.buttonStyle} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
export default Options;