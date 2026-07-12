import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);

useEffect(() => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  setUser(currentUser);
}, [location]);

  const logout = () => {

    localStorage.removeItem("currentUser");
    localStorage.removeItem("score");
localStorage.removeItem("total");

    alert("Logged Out Successfully");

    setUser(null);
    navigate("/login");

  };

  return (

    <nav className="navbar">

      <h2>ExamPortal</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/exams">Exams</Link>

        {user && <Link to="/result">Result</Link>}

        {user ? (

          <>

            <span className="welcome">
              👋 Welcome, {user.name}
            </span>
            <Link to="/dashboard">
Dashboard
</Link>

            <Link to="/history">
              History
            </Link>

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>

          </>

        ) : (

          <>

            <Link to="/login">
              Login
            </Link>

            <Link to="/signup">
              Signup
            </Link>

          </>

        )}

      </div>

    </nav>

  );

}

export default Navbar;