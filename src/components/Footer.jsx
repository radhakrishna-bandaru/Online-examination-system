import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-section">
        <h2>ExamPortal © 2026</h2>
        <p>
          A secure online examination platform for students to
          practice and attend exams.
        </p>
      </div>

      <div className="footer-section">
        <h3>Quick Links</h3>

        <Link to="/">Home</Link>
        <Link to="/exams">Exams</Link>
        <Link to="/result">Result</Link>
        <Link to="/login">Login</Link>

      </div>

      <div className="footer-section">
        <h3>Contact</h3>

        <p>Email : support@examportal.com</p>
        <p>Phone : +91 9876543210</p>
        <p>Location : India</p>

      </div>

    </footer>
  );
}

export default Footer;