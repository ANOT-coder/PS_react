<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add any login validation logic if necessary
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    
    // Simulate successful login
    handleLogin();
    navigate('/home'); // Navigate to Home after successful login
  };

  return (
    <div className="login-box">
      <div className="login-header">
        <header>Login</header>
      </div>
      <div className="input-box">
        <input
          type="text"
          className="input-field"
          placeholder="Email"
          required
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="input-box">
        <input
          type="password"
          className="input-field"
          placeholder="Password"
          required
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="forgot">
        <section>
          <input
            type="checkbox"
            id="check"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          <label htmlFor="check">Remember me</label>
        </section>
        <section>
          <Link to="/forgot-password">Forgot password?</Link>
        </section>
      </div>
      <div className="input-submit">
        <button className="submit-btn" onClick={handleSubmit}>
          Sign In
        </button>
      </div>
      <div className="sign-up-link">
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;
=======
// src/pages/Login.js
import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className="login-box">
      <div className="login-header">
        <header>Login</header>
      </div>
      <div className="input-box">
        <input type="text" className="input-field" placeholder="Email" required />
      </div>
      <div className="input-box">
        <input type="password" className="input-field" placeholder="Password" required />
      </div>
      <div className="forgot">
        <section>
          <input type="checkbox" id="check" />
          <label htmlFor="check">Remember me</label>
        </section>
        <section>
          <Link to="/forgot-password">Forgot password?</Link>
        </section>
      </div>
      <div className="input-submit">
        <button className="submit-btn">Sign In</button>
      </div>
      <div className="sign-up-link">
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;
>>>>>>> origin/main
