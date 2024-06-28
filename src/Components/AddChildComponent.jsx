import React, { useState } from "react";
import ChildComponent from "./ChildComponent.jsx";

export default function AddChildComponent() {
  const [children, setChildren] = useState([]);

  const handleClick = () => {
    setChildren([...children, { id: children.length + 1 }]);
  };

  return (
    <div className="container mt-4">
      <h2>Add Child Component</h2>

      <button className="btn btn-primary mb-3" onClick={handleClick}>
        Add Child
      </button>

      <div>
        {children.map((child) => (
          <ChildComponent key={child.id} number={child.id} />
        ))}
      </div>
    </div>
  );
}
