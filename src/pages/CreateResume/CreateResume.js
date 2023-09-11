import React, { useState } from 'react';
import SubmitForm from './SubmitForm';
import AcademicDetails from './academics';
import BasicDetails from './basicDetails';
import Certifications from './certification';
import './createResume.css';
import ProfessionalExperience from './professionalExp';
import Projects from './projects';
import Skills from './skills';

function CreateResume() {
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState({
        // Initialize with default values or empty strings
        firstName: '',
        lastName: '',
        email: '',
        location: '',
        currentDesignation: '',
        phone: '',
        website: '',
        aboutMe: '',
        academics: [
            {
                id: "academics-1",
                school: "",
                schoolYear: "",
                schoolDescription: ""
            },
            {
                id: "academics-2",
                school: "",
                schoolYear: "",
                schoolDescription: ""
            },
            {
                id: "academics-3",
                school: "",
                specialization: "",
                schoolYear: "",
                schoolDescription: ""
            }
        ],
        professionalExperience: [{
            designation: "",
            organization: "",
            tenure: "",
            location: "",
            description: "",
            },
        ],
        certifications: [
            {
              title: "",
              year: "",
              description: "",
            },
        ],
        projects: [
            {
                title: "",
                tenure: "",
                url: "",
                description: "",
            },
        ],
        skills: [
            {
                skillname: "",
                rating: "",
            },
        ],
    });

    const handlePrevStep = () => {
        setStep(step - 1);
    };

    const handleNextStep = () => {
        setStep(step + 1);
    };

    return (
        <div className='resumeForm'>
            {step === 1 && (
                <BasicDetails
                    userData={userData}
                    setUserData={setUserData}
                    prevStep={handlePrevStep}
                    nextStep={handleNextStep}
                />
            )}
            {step === 2 && (
                <AcademicDetails
                    userData={userData}
                    setUserData={setUserData}
                    prevStep={handlePrevStep}
                    nextStep={handleNextStep}
                />
            )}
            {step === 3 && (
                <ProfessionalExperience
                    userData={userData}
                    setUserData={setUserData}
                    prevStep={handlePrevStep}
                    nextStep={handleNextStep}
                />
            )}
            {step === 4 && (
                <Certifications
                    userData={userData}
                    setUserData={setUserData}
                    prevStep={handlePrevStep}
                    nextStep={handleNextStep}
                />
            )}
            {step === 5 && (
                <Projects
                    userData={userData}
                    setUserData={setUserData}
                    prevStep={handlePrevStep}
                    nextStep={handleNextStep}
                />
            )}
            {step === 6 && (
                <Skills
                    userData={userData}
                    setUserData={setUserData}
                    prevStep={handlePrevStep}
                    nextStep={handleNextStep}
                />
            )}
            {step === 7 && (
                <SubmitForm
                    userData={userData}
                    prevStep={handlePrevStep}
                    nextStep={handleNextStep}
                />
            )}
        </div>
    );
}

export default CreateResume;
