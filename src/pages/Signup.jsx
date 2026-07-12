import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {

    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (user) => user.email === email
    );

    if (existingUser) {
      alert("Email already exists");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup Successful");

    navigate("/login");
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Create Account</h1>

        <form onSubmit={handleSignup}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

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
            Signup
          </button>

        </form>

        <p>
          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Signup;