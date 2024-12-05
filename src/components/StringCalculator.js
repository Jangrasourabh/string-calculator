import React from "react";

export default function StringCalculator() {
  const [input, setInput] = React.useState("");
  const [result, setResult] = React.useState(null);
  const [error, setError] = React.useState(null);

  const handleCalculate = () => {
    setError("");
    try {
      if (input === "") {
        setResult(0);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
      />
      <button onClick={handleCalculate}>Add</button>
      {result !== null && <div>Result: {result}</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}
