import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Academics from "./academics";
import PersonalInfo from "./basicDetails";
import Certifications from "./certification";
import ProfessionalExperience from "./proffessionalExp";
import Projects from "./projects";
import Skills from "./skills";
import "./viewResume.css";

export default function ViewResume() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [academicData, setAcademicData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [certificationsData, setCertificationsData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);


  useEffect(function () {
      fetch(`/api/${id}`)
          .then((res) => res.json())
          .then((data) => {
              setData(data);
              
              // Extract academic data from the dataset
              const extractedAcademicData = data.academics.map((academicItem) => ({
                  school: academicItem.school || "",
                  year: academicItem.schoolYear || "",
                  description: academicItem.schoolDescription || "",
              }));

              setAcademicData(extractedAcademicData);

              // Extract experience data from the dataset
              const extractedExperienceData = data.professionalExperience.map((experienceItem) => ({
                  designation: experienceItem.designation || "",
                  organization: experienceItem.organization || "",
                  tenure: experienceItem.tenure || "",
                  location: experienceItem.location || "",
                  description: experienceItem.description || "",
              }));

              setExperienceData(extractedExperienceData);


              // Extract Projects Data from the dataset
              const extractedProjectsData = data.projects.map((projectsItem) => ({
                  title: projectsItem.title || "",
                  tenure: projectsItem.tenure || "",
                  url: projectsItem.url || "",
                  description: projectsItem.description || "",
              }));

              setProjectsData(extractedProjectsData);

              // Extract Skills Data from the dataset
              const extractedSkillsData = data.skills.map((skillsItem) => ({
                  skillname: skillsItem.skillname || "",
                  rating: skillsItem.rating || "",
              }));

              setSkillsData(extractedSkillsData)
              
              // Extract Certifications Data from the dataset
              const extractedCertificationsData = data.certifications.map((certificationItem) => ({
                  title: certificationItem.title || "",
                  year: certificationItem.year || "",
                  description: certificationItem.description || "",
              }));

              setCertificationsData(extractedCertificationsData);
          })
          .catch((error) => {
              console.error("Error fetching resume data:", error);
          });
  }, [id]);


  return (
    <>
      <h2>Resume:</h2>

      <div className="resume" key={data.id}>
        <PersonalInfo
          firstName={data.firstName}
          lastName={data.lastName}
          email={data.email}
          location={data.location}
          currentDesignation={data.currentDesignation}
          phone={data.phone}
          website={data.website}
          aboutMe={data.aboutMe}
        />

        <Academics items={academicData} />

        <ProfessionalExperience items={experienceData} />

        <Certifications items={certificationsData} />

        <Projects items={projectsData} />

        <Skills skills={skillsData} />
      </div>
    </>
  );
}
