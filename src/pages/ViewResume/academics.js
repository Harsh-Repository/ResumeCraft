import React from "react";

export default function Academics(props) {
  if (!Array.isArray(props.items)) {
    return (
      <div className="academics">
        <h2>Academics</h2>
        <p>No academic data available.</p>
      </div>
    );
  }

  return (
    <div className="academics">
      <h2>Academics</h2>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>
            <strong>{item.school || item.college || item.university}:</strong>{" "}
            {item.year} - {item.specialization || ""} - {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
