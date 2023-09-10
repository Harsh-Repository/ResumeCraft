import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Certifications({ userData, setUserData, prevStep, nextStep }) {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    setCertifications(userData.certifications);
  }, [userData]);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    setUserData({ ...userData, certifications });
    nextStep();
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedCertifications = [...certifications];
    updatedCertifications[index][name] = value;
    setCertifications(updatedCertifications);
  };

  const handlePrevStep = () => {
    prevStep();
  };

  const addCertification = () => {
    setCertifications([
      ...certifications,
      { title: "", year: "", description: "" },
    ]);
  };

  const removeCertification = (index) => {
    const updatedCertifications = [...certifications];
    updatedCertifications.splice(index, 1);
    setCertifications(updatedCertifications);
  };

  return (
    <div>
      <h3>Certification Details</h3>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {certifications.map((certification, index) => (
          <div key={index}>
            <Form.Group controlId={`title${index}`}>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                name={`title`}
                value={certification.title}
                onChange={(e) => handleInputChange(e, index)}
                required
              />
            </Form.Group>

            <Form.Group controlId={`year${index}`}>
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                placeholder="Year"
                name={`year`}
                value={certification.year}
                onChange={(e) => handleInputChange(e, index)}
                required
              />
            </Form.Group>

            <Form.Group controlId={`description${index}`}>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Description"
                name={`description`}
                value={certification.description}
                onChange={(e) => handleInputChange(e, index)}
                required
              />
            </Form.Group>
            <br />
            {certifications.length > 1 && (
              <Button variant="danger" onClick={() => removeCertification(index)}>
                Remove
              </Button>
            )}
          </div>
        ))}
        <Button variant="success" onClick={addCertification}>
          Add Certification
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

export default Certifications;
