import React from "react";

export default function Skills(props) {
  if (!Array.isArray(props.skills)) {
    return (
      <div className="academics">
        <h2>Skills</h2>
        <p>No Skills details available.</p>
      </div>
    );
  }

  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        {props.skills.map((skill, index) => (
          <li key={index}>
            <strong>{skill.skillname}:</strong> {renderSkillRating(skill.rating)}
          </li>
        ))}
      </ul>
    </div>
  );
}

function renderSkillRating(rating) {
  const maxRating = 5; 
  const filledStars = Math.min(rating, maxRating);
  const emptyStars = maxRating - filledStars;

  const starIcons = [];

  for (let i = 0; i < filledStars; i++) {
    starIcons.push(<i key={i} className="bx bxs-star"></i>);
  }

  for (let i = 0; i < emptyStars; i++) {
    starIcons.push(<i key={i + filledStars} className="bx bx-star"></i>);
  }

  return starIcons;
}
