import { Link } from "react-router-dom";
import { FaClock, FaBook, FaLayerGroup } from "react-icons/fa";

function ExamCard({ exam }) {
  const currentUser =
  JSON.parse(localStorage.getItem("currentUser"));

const results =
  JSON.parse(localStorage.getItem("results")) || [];

const lastResult = results.find(
  (r) =>
    r.email === currentUser?.email &&
    r.examName === exam.name
);
  return (
    <div className="exam-card">

      <h2>{exam.name}</h2>

      <div className="exam-info">
        <p><FaBook /> {exam.subject}</p>
        <p><FaClock /> {exam.duration}</p>
        <p><FaLayerGroup /> {exam.questions} Questions</p>
      </div>

      <span className={`difficulty ${exam.difficulty.toLowerCase()}`}>
        {exam.difficulty}
      </span>
      {lastResult && (
  <p className="last-score">
    Last Score : {lastResult.score}/{lastResult.total}
  </p>
)}
      <Link to={`/instructions/${exam.id}`}>
        <button className="start-btn">Start Exam</button>
      </Link>

    </div>
  );
}

export default ExamCard;