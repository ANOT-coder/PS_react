import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here, e.g., sending a reset email
    console.log('Email:', email);
  };

  return (
    <div className="login-box">
      <div className="login-header">
        <header>Forgot Password</header>
      </div>
      <div className="input-box">
        <input
          type="email"
          className="input-field"
          placeholder="Enter your email address"
          required
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="input-submit">
        <button className="submit-btn" onClick={handleSubmit}>
          Reset Password
        </button>
      </div>
      <div className="sign-up-link">
        <p>Remembered your password? <Link to="/login">Sign In</Link></p>
      </div>
    </div>
  );
};

export default ForgotPassword;