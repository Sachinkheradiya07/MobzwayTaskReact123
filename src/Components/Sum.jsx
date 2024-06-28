import { useState } from "react";

export default function () {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [total, setTotal] = useState(0);

  const calTotal = () => {
    const num1 = parseFloat(number1) || 0;
    const num2 = parseFloat(number2) || 0;
    setTotal(num1 + num2);
    setNumber1("");
    setNumber2("");
  };

  const num1 = (e) => {
    setNumber1(e.target.value);
  };
  const num2 = (e) => {
    setNumber2(e.target.value);
  };

  return (
    <>
      <h2>Sum</h2>
      <input
        type="text"
        value={number1}
        placeholder="FirstNumber"
        typeof="number"
        onChange={num1}
      />
      &nbsp; &nbsp;
      <input
        type="text"
        value={number2}
        placeholder="second Number"
        typeof="number"
        onChange={num2}
      />
      &nbsp; &nbsp;
      <button onClick={calTotal}>Sum</button>
      <h3>Total: {total}</h3>
    </>
  );
}
