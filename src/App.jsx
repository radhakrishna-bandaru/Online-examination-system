import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Exams from "./pages/Exams";
import Result from "./pages/Result";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Instructions from "./pages/Instructions";
import History from "./pages/History";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructions/:id" element={<Instructions />} />       
        <Route
  path="/exams"
  element={
    <ProtectedRoute>
      <Exams />
    </ProtectedRoute>
  }
/>

<Route
  path="/quiz/:id"
  element={
    <ProtectedRoute>
      <Quiz />
    </ProtectedRoute>
  }
/>
<Route
path="/dashboard"
element={
<ProtectedRoute>
<Dashboard/>
</ProtectedRoute>
}
/>
<Route
  path="/history"
  element={
    <ProtectedRoute>
      <History />
    </ProtectedRoute>
  }
/>

<Route
  path="/result"
  element={
    <ProtectedRoute>
      <Result />
    </ProtectedRoute>
  }
/>
        <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      </Routes>
      <Footer />
    </>
  );
}

export default App;