import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AcademicDetails({ userData, setUserData, prevStep, nextStep }) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Update academic data in userData
      const updatedUserData = { ...userData };
      updatedUserData.academics = [
        {
          id: "academics-1",
          school: form.elements.school1.value,
          schoolYear: form.elements.schoolYear1.value,
          schoolDescription: form.elements.schoolDescription1.value,
        },
        {
          id: "academics-2",
          school: form.elements.school2.value,
          schoolYear: form.elements.schoolYear2.value,
          schoolDescription: form.elements.schoolDescription2.value,
        },
        {
          id: "academics-3",
          school: form.elements.school3.value,
          specialization: form.elements.specialization.value,
          schoolYear: form.elements.schoolYear3.value,
          schoolDescription: form.elements.schoolDescription3.value,
        },
      ];

      setUserData(updatedUserData);
      console.log(updatedUserData)
      nextStep();
    }
    setValidated(true);
  };

  const handlePrevStep = () => {
    prevStep();
  };

  

  return (
    <>
      <h3>Academic Details</h3>
      <Form validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="school1" id="academic-1">
          <Form.Label>School</Form.Label>
          <Form.Control
            type="text"
            placeholder="School Name"
            required
            name="school1"
            defaultValue={userData.academics[0].school}
          />
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="text"
            placeholder="Year"
            required
            name="schoolYear1"
            defaultValue={userData.academics[0].schoolYear}
          />
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Description"
            required
            name="schoolDescription1"
            defaultValue={userData.academics[0].schoolDescription}
          />
        </Form.Group>

        <Form.Group controlId="school2" id="academic-2">
          <Form.Label>College</Form.Label>
          <Form.Control
            type="text"
            placeholder="College Name"
            required
            name="school2"
            defaultValue={userData.academics[1].school}
          />
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="text"
            placeholder="Year"
            required
            name="schoolYear2"
            defaultValue={userData.academics[1].schoolYear}
          />
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Description"
            required
            name="schoolDescription2"
            defaultValue={userData.academics[1].schoolDescription}
          />
        </Form.Group>

        <Form.Group controlId="school3" id="academic-3">
          <Form.Label>University</Form.Label>
          <Form.Control
            type="text"
            placeholder="University Name"
            required
            name="school3"
            defaultValue={userData.academics[2].school}
          />
          <Form.Label>Specialization</Form.Label>
          <Form.Control
            type="text"
            placeholder="Specialization"
            required
            name="specialization"
            defaultValue={userData.academics[2].specialization}
          />
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="text"
            placeholder="Year"
            required
            name="schoolYear3"
            defaultValue={userData.academics[2].schoolYear}
          />
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Description"
            required
            name="schoolDescription3"
            defaultValue={userData.academics[2].schoolDescription}
          />
        </Form.Group>

        <Button variant="secondary" onClick={handlePrevStep}>
          Back
        </Button>
        <Button type="submit" variant="primary">
          Next
        </Button>
      </Form>
    </>
  );
}

export default AcademicDetails;
