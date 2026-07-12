import { exams } from "../data/questions";
import { Link } from "react-router-dom";

function ExamPreview() {
  return (
    <section className="preview">

      <h2>Available Exams</h2>

      <div className="preview-grid">

        {exams.map((exam) => (
          <div key={exam.id} className="preview-card">

            <h3>{exam.name}</h3>

            <p><strong>Subject:</strong> {exam.subject}</p>
            <p><strong>Duration:</strong> {exam.duration}</p>
            <p><strong>Questions:</strong> {exam.questions}</p>

            <Link to="/exams">
              <button>View Exam</button>
            </Link>

          </div>
        ))}

      </div>

    </section>
  );
}

export default ExamPreview;