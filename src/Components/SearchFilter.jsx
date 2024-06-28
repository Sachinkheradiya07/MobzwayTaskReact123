import React, { useState } from "react";

export default function RecordsList() {
  const students = [
    "Sachin",
    "Shradha",
    "Bhavin",
    "Kunal",
    "Keval",
    "Aarav",
    "Sneha",
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div>
        {filteredStudents.map((student, index) => (
          <div key={index}>
            {index + 1}. {student}
          </div>
        ))}
      </div>
    </>
  );
}
