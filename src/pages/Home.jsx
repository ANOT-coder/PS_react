<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';

const Home = () => {
 
  return (
    <div className="home-container">

    <div className="card">
      <h2>Ideal Portfolio Composition</h2>
      <p>Explore the ideal portfolio for your goals.</p>
      <Link to="/ideal-portfolio" className="btn">Go to Ideal Portfolio</Link>
    </div>

    <div className="card">
      <h2>Investment Recommendation</h2>
      <p>Your recommendations for smart investments.</p>
      <Link to="/investment-recommendation" className="btn">Go to Recommendations</Link>
    </div>
    
    <personalbar className='home-header'>
     <Contact/>
    </personalbar>
  </div>
     
  );
};

export default Home;
=======
import React from 'react'

const Home = () => {
  return (
    <div>Home
    <h1>This is the Home page</h1>
    </div>
  )
}

export default Home
>>>>>>> origin/main
