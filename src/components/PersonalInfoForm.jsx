const PersonalInfoForm = ({
  personalInfo,
  setPersonalInfo,
  isSubmitted,
  setIsSubmitted,
}) => {
  return (
    <div className="personal-info-form">
      {!isSubmitted ? (
        <>
          <input
            type="text"
            placeholder="First Name"
            value={personalInfo.firstName}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, firstName: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Last Name"
            value={personalInfo.lastName}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, lastName: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email"
            value={personalInfo.email}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, email: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Phone"
            value={personalInfo.phone}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, phone: e.target.value })
            }
          />
          <button onClick={() => setIsSubmitted(true)}>Submit</button>
        </>
      ) : (
        <>
          <div className="personal-info-display">
            <h2>Personal Information</h2>
            <p>First Name: {personalInfo.firstName}</p>
            <p>Last Name: {personalInfo.lastName}</p>
            <p>Email: {personalInfo.email}</p>
            <p>Phone: {personalInfo.phone}</p>
          </div>
          <button onClick={() => setIsSubmitted(false)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default PersonalInfoForm;
