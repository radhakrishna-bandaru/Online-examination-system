import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Online Examination System
        </h1>

        <p>
          Attend online exams with a professional and secure examination
          platform. Practice Java, Python, DBMS and Aptitude tests anytime.
        </p>

       <Link to="/exams">
    <button className="hero-btn">
        Start Examination
    </button>
</Link>

      </div>

      <div className="hero-right">

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
          alt="Exam"
        />

      </div>

    </section>
  );
}

export default Hero;