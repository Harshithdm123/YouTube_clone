import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Dashboard from './dashboard.js';
import Register from './register.js'; // Make sure this file exists

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    console.log('Username:', username);
    console.log('Password:', password);

    // Add logic for authentication here

    // Navigate to the dashboard page
    navigate('/dashboard');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Login Page</h1>
        <form onSubmit={handleLogin} className="login-form">
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <br></br>
          <button type="submit">Login</button>
        </form>
        {/* Add Link to navigate to Register page */}
        <Link to="/register" className="register-link">Register Here</Link>
      </header>
    </div>
  );
}

export default App;
