import React, { useState } from "react";

export default function EnableDisable() {
  const [isEnable, setIsEnable] = useState(false);

  const toggleEnable = () => {
    setIsEnable(!isEnable);
  };

  return (
    <>
      <h2>Enable/Disable</h2>
      <button className="btn btn-primary mb-3" onClick={toggleEnable}>
        {isEnable ? "Enable" : "Disable"}
      </button>
      <button className="btn btn-secondary" disabled={isEnable}>
        {isEnable ? "Disabled" : "Enabled"} Button
      </button>
    </>
  );
}
