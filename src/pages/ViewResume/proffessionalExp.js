import React from "react";

export default function ProfessionalExperience(props) {
  if (!Array.isArray(props.items)) {
    return (
      <div className="academics">
        <h2>Professional Experience</h2>
        <p>No Professional Experience data available.</p>
      </div>
    );
  }
  return (
    <div className="professional-experience">
      <h2>Professional Experience</h2>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>
            <strong>Designation:</strong> {item.designation}<br />
            <strong>Organization:</strong> {item.organization}<br />
            <strong>Tenure:</strong> {item.tenure}<br />
            <strong>Location:</strong> {item.location}<br />
            <strong>Description:</strong> {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
