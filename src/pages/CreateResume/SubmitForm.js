import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
const { v4: uuidv4 } = require('uuid');

function SubmitForm({ userData, prevStep }) {
  const [submitted, setSubmitted] = useState(false);
  const handlePrevStep = () => {
    prevStep();
  };

  const {
    id,
    firstName,
    lastName,
    email,
    location,
    currentDesignation,
    phone,
    website,
    aboutMe,
    academics,
    professionalExperience,
    certifications,
    projects,
    skills,
  } = userData;

  const handleSubmit = () => {
    const formData = {
      id: uuidv4(),
      firstName,
      lastName,
      email,
      location,
      currentDesignation,
      phone,
      website,
      aboutMe,
      academics,
      professionalExperience,
      certifications,
      projects,
      skills,
    };

    fetch(`/api/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            console.log('Data submitted successfully');
          } else {
            console.error('Error submitting data');
          }
        })
        .catch((error) => {
          console.error('Network error:', error);
        }
    );
    
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Confirmation</h2>
      {submitted ? (
        <p>Your data has been successfully submitted!</p>
      ) : (
        <div>
          {/* Display the form data */}
          <h3>Personal Information:</h3>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>E-mail ID: {email}</p>
          <p>Location: {location}</p>
          <p>Current Designation: {currentDesignation}</p>
          <p>Phone No: {phone}</p>
          <p>Website (Optional): {website}</p>
          <p>About Me: {aboutMe}</p>

          <h3>Academics:</h3>
          {academics &&
            academics.map((academic, index) => (
              <div key={index}>
                <p>School: {academic.school}</p>
                <p>Year: {academic.schoolYear}</p>
                <p>Description: {academic.schoolDescription}</p>
                <hr />
              </div>
            ))}

          <h3>Professional Experience:</h3>
          {professionalExperience &&
            professionalExperience.map((experience, index) => (
              <div key={index}>
                <p>Designation: {experience.designation}</p>
                <p>Organization: {experience.organization}</p>
                <p>Tenure: {experience.tenure}</p>
                <p>Location: {experience.location}</p>
                <p>Description: {experience.description}</p>
                <hr />
              </div>
            ))}

          <h3>Certifications:</h3>
          {certifications &&
            certifications.map((certification, index) => (
              <div key={index}>
                <p>Title: {certification.title}</p>
                <p>Year: {certification.year}</p>
                <p>Description: {certification.description}</p>
                <hr />
              </div>
            ))}

          <h3>Projects:</h3>
          {projects &&
            projects.map((project, index) => (
              <div key={index}>
                <p>Title: {project.title}</p>
                <p>Tenure: {project.tenure}</p>
                <p>URL: {project.url}</p>
                <p>Description: {project.description}</p>
                <hr />
              </div>
            ))}

          <h3>Skills:</h3>
          {skills &&
            skills.map((skill, index) => (
              <div key={index}>
                <p>Skill: {skill.skillname}</p>
                <p>Rating: {skill.rating}</p>
                <hr />
              </div>
            ))}
            <br/>
        <Button variant="secondary" onClick={handlePrevStep}>
          Back
        </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      )}
    </div>
  );
}

export default SubmitForm;
