function Dashboard() {

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const results = JSON.parse(localStorage.getItem("results")) || [];

  const myResults = results.filter(
    (r) => r.email === user.email
  );

  const totalExams = myResults.length;

  const highestScore =
    myResults.length > 0
      ? Math.max(...myResults.map((r) => r.score))
      : 0;

  const average =
    myResults.length > 0
      ? (
          myResults.reduce(
            (sum, r) => sum + Number(r.percentage),
            0
          ) / myResults.length
        ).toFixed(2)
      : 0;

  const lastExam =
    myResults.length > 0
      ? myResults[myResults.length - 1].examName
      : "No Exam";

  return (
    <div className="dashboard">

      <h1>Dashboard</h1>

      <div className="dashboard-grid">

        <div className="card">
          <h2>Name</h2>
          <p>{user.name}</p>
        </div>

        <div className="card">
          <h2>Email</h2>
          <p>{user.email}</p>
        </div>

        <div className="card">
          <h2>Total Exams</h2>
          <p>{totalExams}</p>
        </div>

        <div className="card">
          <h2>Highest Score</h2>
          <p>{highestScore}</p>
        </div>

        <div className="card">
          <h2>Average %</h2>
          <p>{average}%</p>
        </div>

        <div className="card">
          <h2>Last Exam</h2>
          <p>{lastExam}</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;