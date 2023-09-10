import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SubmitForm from '../CreateResume/SubmitForm';
import AcademicDetails from '../CreateResume/academics';
import BasicDetails from '../CreateResume/basicDetails';
import Certifications from '../CreateResume/certification';
import ProfessionalExperience from '../CreateResume/professionalExp';
import Projects from '../CreateResume/projects';
import Skills from '../CreateResume/skills';

function UpdateResume() {
  const { id } = useParams(); 

  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [updateError, setUpdateError] = useState(null);

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  useEffect(() => {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    fetch(`/api/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Resume updated successfully');
          setUpdateSuccess(true);
          setUpdateError(null);
        } else {
          console.error('Error updating resume');
          setUpdateSuccess(false);
          setUpdateError('Error updating resume');
        }
      })
      .catch((error) => {
        console.error(error);
        setUpdateSuccess(false);
        setUpdateError('Error');
      });
  };

  return (
    <div className='resumeForm'>
      <form onSubmit={(e) => e.preventDefault()}>
        {step === 1 && (
          <BasicDetails
            userData={userData}
            setUserData={setUserData}
            prevStep={handlePrevStep}
            nextStep={handleNextStep}
            onChange={handleInputChange}
          />
        )}
        {step === 2 && (
          <AcademicDetails
            userData={userData}
            setUserData={setUserData}
            prevStep={handlePrevStep}
            nextStep={handleNextStep}
            onChange={handleInputChange}
          />
        )}
        {step === 3 && (
          <ProfessionalExperience
            userData={userData}
            setUserData={setUserData}
            prevStep={handlePrevStep}
            nextStep={handleNextStep}
            onChange={handleInputChange}
          />
        )}
        {step === 4 && (
          <Certifications
            userData={userData}
            setUserData={setUserData}
            prevStep={handlePrevStep}
            nextStep={handleNextStep}
            onChange={handleInputChange}
          />
        )}
        {step === 5 && (
          <Projects
            userData={userData}
            setUserData={setUserData}
            prevStep={handlePrevStep}
            nextStep={handleNextStep}
            onChange={handleInputChange}
          />
        )}
        {step === 6 && (
          <Skills
            userData={userData}
            setUserData={setUserData}
            prevStep={handlePrevStep}
            nextStep={handleNextStep}
            onChange={handleInputChange}
          />
        )}
        {step === 7 && (
          <div>
            <SubmitForm
              userData={userData}
              prevStep={handlePrevStep}
              nextStep={handleNextStep}
              onChange={handleInputChange}
            />
            {updateSuccess && <p>Resume updated successfully!</p>}
            {updateError && <p>Error updating resume: {updateError}</p>}
            <button onClick={handleUpdate}>Update Resume</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default UpdateResume;
