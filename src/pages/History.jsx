function History() {

  const currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

  const results =
    JSON.parse(localStorage.getItem("results")) || [];

  const myResults = results.filter(
    (item) => item.email === currentUser?.email
  );

  return (

    <div className="history-page">

      <h1>My Exam History</h1>

      {myResults.length === 0 ? (

        <h2>No Exams Attempted Yet</h2>

      ) : (

        myResults.map((exam, index) => (

          <div className="history-card" key={index}>

            <h2>{exam.examName}</h2>

            <p>Score : {exam.score}/{exam.total}</p>

            <p>Percentage : {exam.percentage}%</p>

            <p>Date : {exam.date}</p>

          </div>

        ))

      )}

    </div>

  );

}

export default History;