import { useState } from "react";
import PersonalInfoForm from "./components/PersonalInfoForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import "./styles/App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [educationalInfo, setEducationalInfo] = useState({
    schoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
  });

  const [experienceInfo, setExperienceInfo] = useState({
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEducationSubmitted, setIsEducationSubmitted] = useState(false);
  const [isExperienceSubmitted, setIsExperienceSubmitted] = useState(false);

  return (
    <>
    <h1>CV Builder</h1>
      <PersonalInfoForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
      />
      <EducationForm
        educationalInfo={educationalInfo}
        setEducationalInfo={setEducationalInfo}
        isEducationSubmitted={isEducationSubmitted}
        setIsEducationSubmitted={setIsEducationSubmitted}
      />
      <ExperienceForm
        experienceInfo={experienceInfo}
        setExperienceInfo={setExperienceInfo}
        isExperienceSubmitted={isExperienceSubmitted}
        setIsExperienceSubmitted={setIsExperienceSubmitted}
      />
    </>
  );
}

export default App;
