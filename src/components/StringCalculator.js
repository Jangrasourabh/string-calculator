import React from "react";

export default function StringCalculator() {
  const [input, setInput] = React.useState("");
  const [result, setResult] = React.useState(null);
  const [error, setError] = React.useState(null);

  function add(numbers) {
    if (!numbers) return 0;
    let negatives = [];
    let delimiter = [",", ";", "\n"];

    const numArray = splitByDelimiters(numbers, delimiter)
      .map((num) => {
        if (!num.includes("-")) {
          return num.split("").map((item) => {
            if (!isNaN(item)) {
              return Number(item);
            } else return 0;
          });
        } else return Number(num);
      })
      .flat();

    numArray.forEach((num) => {
      if (num < 0) {
        negatives.push(num);
      }
    });

    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }
    console.log(numArray)
    return numArray.reduce((sum, num) => sum + num, 0);
  }

  function splitByDelimiters(input, delimiters) {
    let result = [input];
    for (const delimiter of delimiters) {
      let temp = [];
      for (const part of result) {
        temp = temp.concat(part.split(delimiter));
      }
      result = temp;
    }
    console.log(result, 'result')
    return result;
  }

  const handleCalculate = () => {
    setError("");
    try {
      const result = add(input);
      setResult(result);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="string_calculator">
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
