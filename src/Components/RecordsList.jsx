import React from "react";

export default function RecordsList() {
  const students = [
    "sachin",
    "shradhha",
    "bhavin",
    "kunal",
    "keval",
    "Aarav",
    "sneha",
  ];

  return (
    <>
      <h2>Array Of Recordes</h2>
      <div>
        {students.map((student, index) => (
          <div key={index}>
            {index + 1}.{student}
          </div>
        ))}
      </div>
    </>
  );
}
