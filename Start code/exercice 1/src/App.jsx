import React, {useState} from "react";

export default function App() {
  const [score, setScore] = useState("");


  const getScoreBarStyle = () => {
    // 1- Compute width
    const numericScore = score === "" ? 0 : Number(score);
    const scoreWidth = `${(numericScore / 10) * 100}%`;
    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`;
    if (numericScore <= 2) scoreColor = "Orange";
    else if (numericScore >= 3 && numericScore <= 5) scoreColor = "#9cc54b";
    else if (numericScore >= 6 && numericScore <= 7) scoreColor = "lightGreen"; // 6-7 → Light Green
    else if (numericScore >= 8 && numericScore <= 10) scoreColor = "green"; // 8-10 → Green
    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input 
          type="number"
          min="0" 
          max="10"
          value = {score}
          onChange={(e) => {
            const inputValue = e.target.value;
            setScore(inputValue === "" ? "" : Math.min(10, Math.max(0, Number(inputValue))));
          }}
        />

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
