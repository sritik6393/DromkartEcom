import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setFormData({ name: '', email: '', password: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      console.log("Signup Data:", formData);
      alert("Signup successful!");
    } else {
      console.log("Login Data:", formData);
      alert("Login successful!");
    }
  };

  return (
    <div className="auth-container">
      <h2>{isSignup ? "Sign Up" : "Login"}</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        {isSignup && (
          <>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </>
        )}
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
      </form>
      <p onClick={toggleForm} className="toggle-link">
        {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
      </p>
    </div>
  );
}

export default Login;
