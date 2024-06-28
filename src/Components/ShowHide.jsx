import React, { useState } from "react";

export default function ShowHideComponent() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <h2>Show Hide Elements</h2>
      {isVisible && (
        <div className="alert alert-info" role="alert">
          <button className="btn btn-secondary" onClick={toggleVisibility}>
            {" "}
            Hello!
          </button>
        </div>
      )}
      <br />
      <button className="btn btn-primary mb-3" onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Text
      </button>
    </>
  );
}
