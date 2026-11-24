const ExperienceForm = ({
  experienceInfo,
  setExperienceInfo,
  isExperienceSubmitted,
  setIsExperienceSubmitted,
}) => {
  return (
    <div className="experience-form">
      {!isExperienceSubmitted ? (
        <>
          <input
            type="text"
            placeholder="Company Name"
            value={experienceInfo.companyName}
            onChange={(e) =>
              setExperienceInfo({
                ...experienceInfo,
                companyName: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Position Title"
            value={experienceInfo.positionTitle}
            onChange={(e) =>
              setExperienceInfo({
                ...experienceInfo,
                positionTitle: e.target.value,
              })
            }
          />
          <textarea
            placeholder="Main Responsibilities"
            value={experienceInfo.responsibilities}
            onChange={(e) =>
              setExperienceInfo({
                ...experienceInfo,
                responsibilities: e.target.value,
              })
            }
          />
          <input
            type="date"
            placeholder="Start Date"
            value={experienceInfo.startDate}
            onChange={(e) =>
              setExperienceInfo({
                ...experienceInfo,
                startDate: e.target.value,
              })
            }
          />
          <input
            type="date"
            placeholder="End Date"
            value={experienceInfo.endDate}
            onChange={(e) =>
              setExperienceInfo({
                ...experienceInfo,
                endDate: e.target.value,
              })
            }
          />
          <button onClick={() => setIsExperienceSubmitted(true)}>Submit</button>
        </>
      ) : (
        <>
          <div className="experience-info-display">
            <h2>Experience Information</h2>
            <p>Company Name: {experienceInfo.companyName}</p>
            <p>Position Title: {experienceInfo.positionTitle}</p>
            <p>Main Responsibilities: {experienceInfo.responsibilities}</p>
            <p>Start Date: {experienceInfo.startDate}</p>
            <p>End Date: {experienceInfo.endDate}</p>
            <button onClick={() => setIsExperienceSubmitted(false)}>
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default ExperienceForm;
