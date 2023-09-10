import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ProfessionalExperience({ userData, setUserData, prevStep, nextStep }) {
  const [experiences, setExperiences] = useState([]);
  
  useEffect(() => {
    setExperiences(userData.professionalExperience);
  }, [userData]);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    setUserData({ ...userData, professionalExperience: experiences });
    nextStep();
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperiences = [...experiences];
    updatedExperiences[index][name] = value;
    setExperiences(updatedExperiences);
  };

  const handlePrevStep = () => {
    prevStep();
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: `experience-${experiences.length + 1}`,
        designation: "",
        organization: "",
        tenure: "",
        location: "",
        description: "",
      },
    ]);
  };

  const removeExperience = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  return (
    <div>
      <h3>Professional Experience</h3>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {experiences.map((professionalExperience, index) => (
          <div key={professionalExperience.id}>
            <Form.Group controlId={`designation${professionalExperience.id}`}>
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                placeholder="Designation"
                name="designation"
                value={professionalExperience.designation}
                onChange={(e) => handleInputChange(e, index)}
                required
              />
            </Form.Group>

            <Form.Group controlId={`organization${professionalExperience.id}`}>
              <Form.Label>Organization</Form.Label>
              <Form.Control
                type="text"
                placeholder="Organization"
                name="organization"
                value={professionalExperience.organization}
                onChange={(e) => handleInputChange(e, index)}
                required
              />
            </Form.Group>

            <Form.Group controlId={`tenure${professionalExperience.id}`}>
              <Form.Label>Tenure</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tenure"
                name="tenure"
                value={professionalExperience.tenure}
                onChange={(e) => handleInputChange(e, index)}
                required
              />
            </Form.Group>

            <Form.Group controlId={`location${professionalExperience.id}`}>
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Location"
                name="location"
                value={professionalExperience.location}
                onChange={(e) => handleInputChange(e, index)}
                required
              />
            </Form.Group>

            <Form.Group controlId={`description${professionalExperience.id}`}>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Description"
                name="description"
                value={professionalExperience.description}
                onChange={(e) => handleInputChange(e, index)}
                required
              />
            </Form.Group>
            <br />
            {experiences.length > 1 && (
              <Button variant="danger" onClick={() => removeExperience(index)}>
                Remove
              </Button>
            )}
          </div>
        ))}
        <Button variant="success" onClick={addExperience}>
          Add Experience
        </Button>
        <br />
        <Button variant="secondary" onClick={handlePrevStep}>
          Back
        </Button>
        <Button variant="primary" type="submit">
          Next
        </Button>
      </Form>
    </div>
  );
}

export default ProfessionalExperience;
