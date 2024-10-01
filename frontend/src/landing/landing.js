import React, { useState } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './landing.css';

function Landing() {
  const navigate = useNavigate();
  const handleLearnClick = () => {
    navigate('/learn');
  };
  const handleBudgetClick = () => {
    navigate('/budget');


    // API CALL FOR REGISTERING USER
    // axios.post('http://127.0.0.1:5000/register', {
    //   "username": "vlonk",
    //   "password": "test"
    // })
  };

  return (
      <div className="page">
        <div className="extra">
        </div>
          <div className="container">
            Where would you like to start?
        </div>
        <div className="buttons">
          <button onClick={handleLearnClick} className="learnbutton">
            Learn
          </button>
          <button onClick={handleBudgetClick} className="budgetbutton">
            Budget
          </button>
        </div>
      </div>
  );
}
export default Landing;
