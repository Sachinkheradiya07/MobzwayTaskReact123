import { useState } from "react";

export default function Counter() {
  const [increment, setIncrement] = useState(0);

  const handleIncrement = () => {
    setIncrement(increment + 1);
  };
  const handleDecrement = () => {
    setIncrement(increment - 1);
  };

  return (
    <>
      <h2>Counter</h2>
      <h3>Value: {increment}</h3>
      <button onClick={handleIncrement}>Increment</button>

      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}
