import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation


const IdealPortfolio = () => {
  const questions = [
    {
      id: 1,
      question: "What type of investments have you tried?",
      options: ["Stock", "Fixed Deposits", "Commodities", "SIP", "Bonds/Debentures"],
    },
    {
      id: 2,
      question: "Up to when can you invest?",
      options: ["Less than 1 year", "1-2 years", "3-5 years", "More than 5 years"],
    },
    {
      id: 3,
      question: "Your feel on short-term fluctuations",
      options: ["Very Uncomfortable", "Somewhat Uncomfortable", "Neutral", "Somewhat Comfortable", "Very Comfortable"],
    },
    {
      id: 4,
      question: "Rate your comfort level with taking financial risks:",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    },
    {
      id: 5,
      question: "Play it safe or take on more risk in pursuit of higher returns?",
      options: ["Play it safe", "Take on some risk", "Takes on moderate risk", "Take on a lot of risk"],
    },
    {
      id: 6,
      question: "What are you hoping to achieve through your investments?",
      options: ["Generating income", "Growing my wealth", "Preserving my capital", "All of the above"],
    },
    {
      id: 7,
      question: "What is your financial goal at the moment?",
      options: ["Save for a purchase", "Long-term wealth", "Short-term gains", "Retirement"],
    },
  ];

  const [responses, setResponses] = useState({});
  const navigate = useNavigate();  // Initialize navigate for programmatic navigation

  const handleChange = (questionId, selectedOption) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: selectedOption,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Responses:", responses);
    // After form submission, navigate to the PortfolioChart page
    navigate('/portfolio-chart');
  };

  return (
    <div className="portfolio-form">
      <h2>Ideal Portfolio Composition Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="questions-container">
          {questions.map((q) => (
            <div key={q.id} className="question-block">
              <h3>{q.question}</h3>
              <div className="options-container">
                {q.options.map((option, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`option-button ${responses[q.id] === option ? 'selected' : ''}`}
                    onClick={() => handleChange(q.id, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default IdealPortfolio;
