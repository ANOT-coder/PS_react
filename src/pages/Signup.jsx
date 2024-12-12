import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here, e.g., sending a request to a backend server
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-box">
      <div className="login-header">
        <header>Sign Up</header>
      </div>
      <div className="input-box">
        <input
          type="text"
          className="input-field"
          placeholder="Full Name"
          required
          value={fullName}
          onChange={handleFullNameChange}
        />
      </div>
      <div className="input-box">
        <input
          type="email"
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
      <div className="input-submit">
        <button className="submit-btn" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
      <div className="sign-up-link">
        <p>Already have an account? <Link to="/login">Sign In</Link></p>
      </div>
    </div>
  );
};

export default SignUp;