import { useState } from "react";
import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import ResultsTable from "./Components/ResultsTable";
import { calculateInvestmentResults } from "./util/investment";
import "./index.css";

function App() {
  const [results, setResults] = useState([]);
  const [invalidDuration, setInvalidDuration] = useState(false);

  const handleCalculate = (investmentData) => {
    if (investmentData.duration < 1) {
      setInvalidDuration(true);
      setResults([]);
      return;
    }
    setInvalidDuration(false);
    const calculatedResults = calculateInvestmentResults(investmentData);
    setResults(calculatedResults);
  };

  return (
    <>
      <Header />
      <UserInput onCalculate={handleCalculate} />
      {invalidDuration && (
        <p className="center">Duaration must be at least 1 year.</p>
      )}
      <ResultsTable results={results} />
    </>
  );
}

export default App;
