import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (!user) {
      alert("Invalid Email or Password");
      return;
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );

    alert("Login Successful");

    navigate("/exams");
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Login</h1>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p>
          Don't have an account?

          <Link to="/signup">
            Signup
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;