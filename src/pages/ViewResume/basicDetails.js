import React from "react";

export default function PersonalInfo(props) {
  return (
    <div className="personal-info">
      <h2>Personal Information</h2>
      <ul>
        <li>
          <strong>Name:</strong> {props.firstName} {props.lastName}
        </li>
        <li>
          <strong>Email:</strong> {props.email}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
        <li>
          <strong>Current Designation:</strong> {props.currentDesignation}
        </li>
        <li>
          <strong>Phone:</strong> {props.phone}
        </li>
        <li>
          <strong>Website:</strong>{" "}
          <a href={props.website} target="_blank" rel="noopener noreferrer">
            {props.website}
          </a>
        </li>
        <li>
          <strong>About Me:</strong> {props.aboutMe}
        </li>
      </ul>
    </div>
  );
}
