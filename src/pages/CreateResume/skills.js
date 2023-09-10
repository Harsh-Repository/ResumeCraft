import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Skills({ userData, setUserData, prevStep, nextStep }) {
  const [skills, setSkills] = useState(userData.skills || []);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    setSkills(userData.skills || []);
  }, [userData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    setUserData({ ...userData, skills: skills });
    nextStep();
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedSkills = [...skills];
    updatedSkills[index][name] = value;
    setSkills(updatedSkills);

    // Update userData with the new skills data
    const updatedUserData = { ...userData, skills: updatedSkills };
    setUserData(updatedUserData);
  };

  const handlePrevStep = () => {
    prevStep();
  };

  const addSkill = () => {
    if (skills.length < 5) {
      setSkills([
        ...skills,
        {
          id: `skills-${skills.length + 1}`,
          skillname: "",
          rating: "",
        },
      ]);
    }
  };

  const removeSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);

    // Update userData with the new skills data
    const updatedUserData = { ...userData, skills: updatedSkills };
    setUserData(updatedUserData);
  };

  return (
    <div>
      <h3>Skills</h3>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {skills.map((skill, index) => (
          <div key={skill.id}>
            <Form.Group controlId={`skillname${skill.id}`}>
              <Form.Label>Skill</Form.Label>
              <Form.Control
                type="text"
                placeholder="Skill"
                name="skillname"
                value={skill.skillname}
                onChange={(e) => handleInputChange(e, index)}
                required
              />
            </Form.Group>

            <Form.Group controlId={`rating${skill.id}`}>
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="Rating (0-5)"
                required
                name="rating"
                value={skill.rating}
                onChange={(e) => handleInputChange(e, index)}
              />
            </Form.Group>
            <br />
            {skills.length > 1 && (
              <Button variant="danger" onClick={() => removeSkill(index)}>
                Remove
              </Button>
            )}
          </div>
        ))}

        <Form>
          <br />
          {skills.length < 5 && (
            <Button variant="success" onClick={addSkill}>
              Add Skill
            </Button>
          )}
        </Form>
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

export default Skills;
