import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { questions } from "../data/questions";
import Timer from "../components/Timer";
function Quiz() {
  const { id } = useParams();
  let quizQuestions = [];

if (id === "1") quizQuestions = questions.java;
if (id === "2") quizQuestions = questions.python;
if (id === "3") quizQuestions = questions.dbms;
if (id === "4") quizQuestions = questions.aptitude;
if (id === "5") quizQuestions = questions.web;
if (id === "6") quizQuestions = questions.aiml;
if (id === "7") quizQuestions = questions.cyber;
const navigate = useNavigate();
const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
const [visited, setVisited] = useState([0]);
  const nextQuestion = () => {
  if (currentQuestion < quizQuestions.length - 1) {
    const next = currentQuestion + 1;
    setCurrentQuestion(next);
    if (!visited.includes(next)) {
      setVisited([...visited, next]);
    }
  }
};
  const previousQuestion = () => {
  if (currentQuestion > 0) {
    setCurrentQuestion(currentQuestion - 1);
  }
};
const examNames = {
  1: "Java Programming",
  2: "Python Programming",
  3: "DBMS",
  4: "Aptitude",
  5: "Web Development",
  6: "AI & Machine Learning",
  7: "Cyber Security"
};
  const submitExam = () => {

  const confirmSubmit = window.confirm(
    "Are you sure you want to submit the exam?"
  );

  if (!confirmSubmit) return;

  let score = 0;
  let wrongAnswers = [];

  answers.forEach((ans, index) => {

    if (ans === quizQuestions[index].answer) {
      score++;
    } else {
      wrongAnswers.push({
        question: quizQuestions[index].question,
        yourAnswer: ans || "Not Answered",
        correctAnswer: quizQuestions[index].answer,
      });
    }

  });

  localStorage.setItem("score", score);
  localStorage.setItem("total", quizQuestions.length);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  let results = JSON.parse(localStorage.getItem("results")) || [];

  const index = results.findIndex(
    (r) =>
      r.email === currentUser.email &&
      r.examName === examNames[id]
  );

  const newResult = {
    email: currentUser.email,
    examName: examNames[id],
    score: score,
    total: quizQuestions.length,
    percentage: ((score / quizQuestions.length) * 100).toFixed(2),
    date: new Date().toLocaleString(),
  };

  if (index !== -1) {
    results[index] = newResult;
  } else {
    results.push(newResult);
  }

  localStorage.setItem("results", JSON.stringify(results));
  localStorage.setItem(
    "wrongAnswers",
    JSON.stringify(wrongAnswers)
  );

  navigate("/result", { replace: true });

};
if (quizQuestions.length === 0) {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>No questions found for this exam.</h2>
    </div>
  );
}
return (
<div className="exam-page">

<div className="left-panel">

<div className="exam-header">

  <div>
    <h2>{examNames[id]}</h2>

    <p>Online Examination</p>
  </div>

  <div className="timer-box">
    <Timer
  minutes={
    id === "1" ? 30 :
    id === "2" ? 30 :
    id === "3" ? 25 :
    id === "4" ? 20 :
    id === "5" ? 30 :
    id === "6" ? 30 :
    id === "7" ? 10 :
    30
  }
/>
  </div>

</div>

<div className="question-number">
Question {currentQuestion + 1} / {quizQuestions.length}
</div>

<h2 className="question">
{quizQuestions[currentQuestion].question}
</h2>

<div className="options">

{quizQuestions[currentQuestion].options.map((option)=>(
<div
key={option}
className={`option-card ${
answers[currentQuestion] === option ? "selected" : ""
}`}
onClick={() => {
  const temp = [...answers];
  temp[currentQuestion] = option;
  setAnswers(temp);
}}
>

{option}

</div>
))}

</div>

<div className="buttons">

<button
onClick={previousQuestion}
disabled={currentQuestion===0}
>
Previous
</button>

<button
  onClick={nextQuestion}
  disabled={
    currentQuestion === quizQuestions.length - 1 ||
    !answers[currentQuestion]
  }
>
  Next
</button>

</div>

</div>

<div className="right-panel">

<h3>Question Palette</h3>
<p>Total Questions : {quizQuestions.length}</p>
<div className="legend">

  <div>
    <span className="box current-box"></span>
    Current
  </div>

  <div>
    <span className="box answered-box"></span>
    Answered
  </div>

  <div>
    <span className="box notanswered-box"></span>
    Not Answered
  </div>

</div>

<div className="palette">

{quizQuestions.map((q,index)=>(

<button
key={index}
className={`palette-btn
          ${currentQuestion === index ? "current" : ""}
          ${answers[index] ? "answered" : ""}
          ${!answers[index] && currentQuestion !== index ? "notanswered" : ""}
        `}
        onClick={() => setCurrentQuestion(index)}
>

{index+1}

</button>

))}

</div>
<button
className="submit-btn"
disabled={!answers.some(answer => answer)}
onClick={submitExam}
>
Submit Exam
</button>
</div>
 
</div>
);
}
export default Quiz;