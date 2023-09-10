import React from "react";

export default function Projects(props) {

  if (!Array.isArray(props.items)) {
    return (
      <div className="academics">
        <h2>Projects</h2>
        <p>No Projects details available.</p>
      </div>
    );
  }

  return (
    <div className="projects">
      <h2>Projects</h2>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>
            <strong>Title:</strong> {item.title}<br />
            <strong>Tenure:</strong> {item.tenure}<br />
            {item.url && (
              <>
                <strong>URL:</strong>{" "}
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.url}
                </a><br />
              </>
            )}
            <strong>Description:</strong> {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
