const EducationForm = ({
  educationalInfo,
  setEducationalInfo,
  isEducationSubmitted,
  setIsEducationSubmitted,
}) => {
  return (
    <div className="educational-form">
      {!isEducationSubmitted ? (
        <>
          <input
            type="text"
            placeholder="School Name"
            value={educationalInfo.schoolName}
            onChange={(e) =>
              setEducationalInfo({
                ...educationalInfo,
                schoolName: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Title of Study"
            value={educationalInfo.titleOfStudy}
            onChange={(e) =>
              setEducationalInfo({
                ...educationalInfo,
                titleOfStudy: e.target.value,
              })
            }
          />

          <input
            type="date"
            placeholder="Date of Study"
            value={educationalInfo.dateOfStudy}
            onChange={(e) =>
              setEducationalInfo({
                ...educationalInfo,
                dateOfStudy: e.target.value,
              })
            }
          />
          <button onClick={() => setIsEducationSubmitted(true)}>Submit</button>
        </>
      ) : (
        <>
          <div className="educational-info-display">
            <h2>Educational Information</h2>
            <p>School Name: {educationalInfo.schoolName}</p>
            <p>Title of Study: {educationalInfo.titleOfStudy}</p>
            <p>Date of Study: {educationalInfo.dateOfStudy}</p>
          </div>
          <button onClick={() => setIsEducationSubmitted(false)}>Edit</button>
        </>
      )}
    </div>
  );
};
export default EducationForm;
