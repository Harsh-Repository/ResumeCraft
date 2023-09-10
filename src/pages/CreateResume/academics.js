import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AcademicDetails({ userData, setUserData, prevStep, nextStep }) {
    // const [school, setSchool] = useState({ year: '', description: '' });
    // const [college, setCollege] = useState({ year: '', description: '' });
    // const [university, setUniversity] = useState({
    //     specialization: '',
    //     year: '',
    //     description: '',
    // });

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedUserData = { ...userData };
        updatedUserData.academics[name] = value;

        setUserData(updatedUserData);
    };

    const handlePrevStep = () => {
        prevStep();
    };

    const handleNextStep = () => {
        nextStep();
    };

    return (
        <><h3>Academic Details</h3>
        <Form validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="school" id="academic-1">
                <Form.Label>School</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="School Name"
                    required
                    // onChange={(e) => setSchool({ ...school, name: e.target.value })}
                    name="school1"
                    value={userData.academics.school1}
                    onChange={handleInputChange}
                />
                <Form.Label>Year</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Year"
                    required
                    // onChange={(e) => setSchool({ ...school, year: e.target.value })}
                    name="schoolYear1"
                    value={userData.academics.schoolYear1}
                    onChange={handleInputChange}
                />
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Description"
                    required
                    // onChange={(e) => setSchool({ ...school, description: e.target.value })}
                    name="schoolDescription1"
                    value={userData.academics.schoolDescription1}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="college" id="academic-2">
                <Form.Label>College</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="College Name"
                    required
                    // onChange={(e) => setCollege({ ...college, name: e.target.value })}
                    name="school2"
                    value={userData.academics.school2}
                    onChange={handleInputChange}
                />
                <Form.Label>Year</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Year"
                    required
                    // onChange={(e) => setCollege({ ...college, year: e.target.value })}
                    name="schoolYear2"
                    value={userData.academics.schoolYear2}
                    onChange={handleInputChange}
                />
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Description"
                    required
                    // onChange={(e) => setCollege({ ...college, description: e.target.value })}
                    name="schoolDescription2"
                    value={userData.academics.schoolDescription2}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="university" id="academic-3">
                <Form.Label>University</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="University Name"
                    required
                    // onChange={(e) => setUniversity({ ...university, name: e.target.value })}
                    name="school3"
                    value={userData.academics.school3}
                    onChange={handleInputChange}
                />
                <Form.Label>Specialization</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Specialization"
                    required
                    // onChange={(e) => setUniversity({ ...university, specialization: e.target.value })}
                    name='specialization'
                    value={userData.academics.specialization}
                    onChange={handleInputChange}
                />
                <Form.Label>Year</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Year"
                    required
                    // onChange={(e) => setUniversity({ ...university, year: e.target.value })}
                    name='schoolYear3'
                    value={userData.academics.schoolYear3}
                    onChange={handleInputChange}
                />
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Description"
                    required
                    // onChange={(e) => setUniversity({ ...university, description: e.target.value })}
                    name='schoolDescription3'
                    value={userData.academics.schoolDescription3}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Button variant="secondary" onClick={handlePrevStep}>
                Back
            </Button>
            <Button variant="primary" onClick={handleNextStep}>
                Next
            </Button>
        </Form>
        </>
    );
}

export default AcademicDetails;
