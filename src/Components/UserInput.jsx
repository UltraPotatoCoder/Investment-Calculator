import React from "react";
import { useState } from "react";

function UserInput({ onCalculate }) {
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  const handleChange = (e) => {
    setInvestmentData({
      ...investmentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Converting all the fields to numbers
    const data = {
      ...investmentData,
      initialInvestment: +investmentData.initialInvestment,
      annualInvestment: +investmentData.annualInvestment,
      expectedReturn: +investmentData.expectedReturn,
      duration: +investmentData.duration,
    };
    onCalculate(data); // passsing data to the parent component
  };

  return (
    <form id="user-input" onSubmit={handleSubmit}>
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={investmentData.initialInvestment}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={investmentData.annualInvestment}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Expected Return %</label>
          <input
            type="number"
            name="expectedReturn"
            value={investmentData.expectedReturn}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Duration / years</label>
          <input
            type="number"
            name="duration"
            value={investmentData.duration}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="center">
        <button type="submit">Calculate</button>
      </div>
    </form>
  );
}

export default UserInput;
