import React, { useState } from 'react';

const IncomeInput = () => {
  // State to hold the user's input
  const [income, setIncome] = useState('');

  // Function to handle changes in the input
  const handleInputChange = (event) => {
    setIncome(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`This month's income: $${income}`);
    // You can further process or send the income data to your backend here
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter This Month's Income:
          <input
            type="number"
            value={income}
            onChange={handleInputChange}
            placeholder="Enter income"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default IncomeInput;
