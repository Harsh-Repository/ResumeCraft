import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './basicDetails.css';

function BasicDetails({ userData, setUserData, prevStep, nextStep }) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        const formData = new FormData(form);
        const newData = {};
        formData.forEach((value, key) => {
            newData[key] = value;
        });
        setUserData({ ...userData, ...newData });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const back = (e) => {
        e.preventDefault();
        prevStep();
    };

    const saveAndContinue = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
        <>
        <h3>Basic Details</h3>
        <Form validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleInputChange}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        name="lastName"
                        value={userData.lastName}
                        onChange={handleInputChange}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationPhone">
                    <Form.Label>Phone:</Form.Label>
                    <Form.Control
                        placeholder="Phone"
                        name="phone"
                        type="number"
                        required
                        minLength={10}
                        maxLength={10}
                        value={userData.phone}
                        onChange={handleInputChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid phone number.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-6" controlId="validationCustomEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        required
                        pattern=".+@?\.com"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter EmailID.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" required name='location' value={userData.location}
                            onChange={handleInputChange} />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>Current Designation</Form.Label>
                <Form.Control type="text" placeholder="Current Designation" required name='currentDesignation' value={userData.currentDesignation}
                            onChange={handleInputChange}/>
                <Form.Control.Feedback type="invalid">
                    Please provide a valid designation.
                </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Website:</Form.Label>
                <Form.Control type="text" placeholder="Website(Optional)" name='website' value={userData.website}
                            onChange={handleInputChange} />
                </Form.Group>
            </Row>
            <Row className="mb-3">  
                <Form.Group as={Col} md="9" controlId="validationCustom06">
                <Form.Label>About me:</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="About Me" required name='aboutMe' value={userData.aboutMe}
                            onChange={handleInputChange}/>
                <Form.Control.Feedback type="invalid">
                    Please provide details.
                </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button variant="secondary" onClick={back}>Back</Button>
            <Button variant="primary" type="submit" onClick={saveAndContinue}>Next</Button>
        </Form>
        </>
    );
}

export default BasicDetails;
