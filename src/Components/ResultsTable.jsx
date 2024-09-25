import React from "react";
import { formatter } from "../util/investment";

function ResultsTable({ results }) {
  if (results.length === 0) {
    return <p className="center">No results to display</p>;
  }

  return (
    <div id="result">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Interest Earned</th>
            <th>End Value</th>
            <th>Annual Investment</th>
          </tr>
        </thead>
        <tbody>
          {results.map((yearData, index) => (
            <tr key={index}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.annualInvestment)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultsTable;
