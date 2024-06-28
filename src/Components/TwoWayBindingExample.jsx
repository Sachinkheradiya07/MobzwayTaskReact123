import React, { useState } from "react";

export default function TwoWayBindingExample() {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2>Two-Way Data Binding Example</h2>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Type something..."
        className="form-control"
      />
      <p>You typed: {text}</p>
    </div>
  );
}
