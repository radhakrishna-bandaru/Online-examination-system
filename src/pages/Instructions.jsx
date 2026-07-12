import { Link, useParams } from "react-router-dom";

function Instructions() {
  const { id } = useParams();

  return (
    <div className="instructions">
      <h1>Exam Instructions</h1>

      <ol>
        <li>Read all questions carefully.</li>
        <li>Each question has only one correct answer.</li>
        <li>Use Previous and Next buttons to navigate.</li>
        <li>You can click question numbers in the Question Palette.</li>
        <li>Click Submit Exam after completing all questions.</li>
      </ol>

      <Link to={`/quiz/${id}`}>
  <button>Start Exam</button>
</Link>
    </div>
  );
}

export default Instructions;