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
