import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Projects({ userData, setUserData, prevStep, nextStep }) {
  const [projects, setProjects] = useState(userData.projects || []);

  const handlePrevStep = () => {
    prevStep();
  };

  const addProject = () => {
    setProjects([
      ...projects,
      { title: "", tenure: "", url: "", description: "" },
    ]);
  };

  const removeProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserData({ ...userData, projects });
    nextStep();
  };

  return (
    <div>
      <h3>Projects Details</h3>
      <Form noValidate onSubmit={handleSubmit}>
        {projects.map((project, index) => (
          <div key={index}>
            <Form.Group controlId={`title${index}`}>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                value={project.title}
                onChange={(e) =>
                  handleProjectChange(index, "title", e.target.value)
                }
              />
            </Form.Group>

            <Form.Group controlId={`tenure${index}`}>
              <Form.Label>Tenure</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tenure"
                value={project.tenure}
                onChange={(e) =>
                  handleProjectChange(index, "tenure", e.target.value)
                }
              />
            </Form.Group>

            <Form.Group controlId={`url${index}`}>
              <Form.Label>URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="URL"
                value={project.url}
                onChange={(e) =>
                  handleProjectChange(index, "url", e.target.value)
                }
              />
            </Form.Group>

            <Form.Group controlId={`description${index}`}>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Description"
                value={project.description}
                onChange={(e) =>
                  handleProjectChange(index, "description", e.target.value)
                }
              />
            </Form.Group>
            <br />
            {projects.length > 1 && (
              <Button variant="danger" onClick={() => removeProject(index)}>
                Remove
              </Button>
            )}
          </div>
        ))}
        <Button variant="success" onClick={addProject}>
          Add Project
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

export default Projects;
