import React, { useState } from 'react';

const BudgetInput = () => {
  // State to hold the user's input for each category
  const [incomeSaved, setIncomeSaved] = useState('');
  const [spentOnWants, setSpentOnWants] = useState('');
  const [spentOnNeeds, setSpentOnNeeds] = useState('');

  // Function to handle changes in the input for each category
  const handleIncomeSavedChange = (event) => {
    setIncomeSaved(event.target.value);
  };

  const handleSpentOnWantsChange = (event) => {
    setSpentOnWants(event.target.value);
  };

  const handleSpentOnNeedsChange = (event) => {
    setSpentOnNeeds(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform further processing or send the data to your backend here
    alert(`Income Saved: $${incomeSaved}\nSpent on Wants: $${spentOnWants}\nSpent on Needs: $${spentOnNeeds}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Amount of Income Saved:
          <input
            type="number"
            value={incomeSaved}
            onChange={handleIncomeSavedChange}
            placeholder="Enter amount"
          />
        </label>

        <label>
          Enter Amount Spent on Wants:
          <input
            type="number"
            value={spentOnWants}
            onChange={handleSpentOnWantsChange}
            placeholder="Enter amount"
          />
        </label>

        <label>
          Enter Amount Spent on Needs:
          <input
            type="number"
            value={spentOnNeeds}
            onChange={handleSpentOnNeedsChange}
            placeholder="Enter amount"
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BudgetInput;
