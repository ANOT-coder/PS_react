import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import IdealPortfolio from './pages/IdealPortfolio';
import InvestmentRecommendation from './pages/InvestmentRecommendation';
import PortfolioChart from './pages/PortfolioChart';
import NavBar from './components/Navbar';
import Signup from './pages/Signup';
import ForgotPassword from './pages/Forgotpassword';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Set logged-in state when login is successful
  };

  return (
    <Router>
      {/* Conditionally render Navbar for logged-in users */}
      {isLoggedIn && <NavBar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected Routes */}
        <Route path="/home" element={isLoggedIn ? <Home /> : <Login handleLogin={handleLogin} />} />
        <Route path="/about" element={isLoggedIn ? <About /> : <Login handleLogin={handleLogin} />} />
        <Route
          path="/investment-recommendation"
          element={isLoggedIn ? <InvestmentRecommendation /> : <Login handleLogin={handleLogin} />}
        />
        <Route path="/ideal-portfolio" element={isLoggedIn ? <IdealPortfolio /> : <Login handleLogin={handleLogin} />} />
        <Route path="/portfolio-chart" element={isLoggedIn ? <PortfolioChart /> : <Login handleLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

export default App;
