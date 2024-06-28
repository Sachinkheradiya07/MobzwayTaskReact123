import React from "react";

function ChildComponent({ number }) {
  return (
    <div className="alert alert-info" role="alert">
      Child {number}
    </div>
  );
}

export default ChildComponent;
