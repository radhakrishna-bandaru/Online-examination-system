import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Result() {

  const navigate = useNavigate();


useEffect(() => {

  const score = localStorage.getItem("score");

  if (score === null) {
   navigate("/exams", { replace: true });
  }

}, []);
  const score = Number(localStorage.getItem("score")) || 0;
  const total = Number(localStorage.getItem("total")) || 0;
const wrongAnswers =
  JSON.parse(localStorage.getItem("wrongAnswers")) || [];
  const wrong = total - score;
  const percentage = total ? ((score / total) * 100).toFixed(2) : 0;

  return (
    <div className="result-container">

      <div className="result-card">

        <h1>Exam Completed 🎉</h1>

        <div className="result-box">
          <h2>{score} / {total}</h2>
          <p>Your Score</p>
        </div>

        <div className="result-details">

          <div>
            <h3>Correct</h3>
            <p>{score}</p>
          </div>

          <div>
            <h3>Wrong</h3>
            <p>{wrong}</p>
          </div>

          <div>
            <h3>Percentage</h3>
            <p>{percentage}%</p>
          </div>

        </div>

        <h2 className={percentage >= 40 ? "pass" : "fail"}>
          {percentage >= 40 ? "PASS" : "FAIL"}
        </h2>
        <p>
  {percentage >= 40
    ? "Congratulations! You have successfully passed the examination."
    : "Better luck next time. Practice more and try again."}
</p>
{wrongAnswers.length > 0 && (
  <div className="wrong-section">

    <h2>Review Your Mistakes</h2>

    {wrongAnswers.map((item, index) => (
      <div className="wrong-card" key={index}>

        <p>
          <strong>Question:</strong> {item.question}
        </p>

        <p style={{ color: "#ef4444" }}>
          <strong>Your Answer:</strong> {item.yourAnswer}
        </p>

        <p style={{ color: "#22c55e" }}>
          <strong>Correct Answer:</strong> {item.correctAnswer}
        </p>

      </div>
    ))}

  </div>
)}

        <Link to="/exams">
          <button className="back-btn">
            Back to Exams
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Result;