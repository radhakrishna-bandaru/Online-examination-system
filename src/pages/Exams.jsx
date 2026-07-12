import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { exams } from "../data/questions";
import ExamCard from "../components/ExamCard";

function Exams() {
  const navigate = useNavigate();

useEffect(() => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (!user) {
    alert("Please login to start the exam.");
    navigate("/login");
  }
}, []);
  return (
    <div className="exam-container">
      <h1>Available Exams</h1>

      <div className="exam-grid">
        {exams.map((exam) => (
          <ExamCard key={exam.id} exam={exam} />
        ))}
      </div>
    </div>
  );
}

export default Exams;