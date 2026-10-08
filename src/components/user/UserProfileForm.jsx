import { useState } from "react";
import { baseURL } from "../../api/baseURL";
import axios from "axios";
const UserProfileForm = () => {
  const [userProfileData, setUserProfileData] = useState({
    fullName: "",
    profilePhoto: null,
    mobile: "",
    email: "",
    address: "",
    skills: "",
    resume: null,
    education: {
       schoolOrCollege: "",
      bachelorDegree: "",
    },
    experience:"",
    portfolio: "",
    about: "",
  });

  const createUserProfile = async () => {
    console.log("check")
    try {
      console.log("hello ")
      const result = await axios.post(`${baseURL}/createUserProfile`, userProfileData);
      console.log("message:", result.data.message);

    } catch (error) {
      console.log(error);
      console.log("status:" ,error.status.message)
      console.log("message:" ,error.response.message)
    }
  };

  const handleInputuserProfile = (e) => {
    const { name, value, type, files } = e.target;
    console.log(name, value, "********userprofile data");
    setUserProfileData({
      ...userProfileData,
      ...userProfileData.education,
      [name]: type === "file" ? files[0] : value,
    });
  };
  return (
    <div className="common-page">
      <div className="common-form">
        <h2 className="common-heading">User Profile</h2>

        <label>Full Name</label>
        <input
          type="text"
          value={userProfileData.fullName}
          name="fullName"
          onChange={handleInputuserProfile}
        />

        <label>Profile Photo</label>
        <input
          type="file"
          accept="image/*"
          name="profilePhoto"
          onChange={handleInputuserProfile}
        />

        <label>Mobile</label>
        <input
          type="tel"
          value={userProfileData.mobile}
          name="mobile"
          onChange={handleInputuserProfile}
        />

        <label>Email</label>
        <input
          type="email"
          value={userProfileData.email}
          name="email"
          onChange={handleInputuserProfile}
        />

        <label>Address</label>
        <textarea
          value={userProfileData.address}
          name="address"
          onChange={handleInputuserProfile}
        ></textarea>

        <label>Skills</label>
        <input
          type="text"
          placeholder="React, JavaScript, HTML, CSS"
          value={userProfileData.skills}
          name="skills"
          onChange={handleInputuserProfile}
        />

        <label>Resume</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleInputuserProfile}
        />

        <label>LinkedIn</label>
        <input
          type="url"
          placeholder="LinkedIn profile URL"
          value={userProfileData.linkedIn}
          name="linkedIn"
          onChange={handleInputuserProfile}
        />

        <div className="common-form">
          <label>Education</label>
          <label>schoolOrCollege</label>
          <input
            type="text"
            value={userProfileData.education.schoolOrCollege}
            name="education"
            onChange={handleInputuserProfile}
          />
          <label>BacholorDegrree</label>
          <input
            type="text"
            value={userProfileData.education.bachelorDegree}
            name="education"
            onChange={handleInputuserProfile}
          />
        </div>

        <label>Experience</label>
        <input
          type="text"
          value={userProfileData.experience}
          name="experience"
          onChange={handleInputuserProfile}
        />

        <label>Portfolio</label>
        <input
          type="url"
          placeholder="Portfolio URL"
          value={userProfileData.portfolio}
          name="portfolio"
          onChange={handleInputuserProfile}
        />

        <label>About</label>
        <textarea
          value={userProfileData.about}
          name="about"
          onChange={handleInputuserProfile}
        ></textarea>

        <button className="common-btn" onClick={createUserProfile}>
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfileForm;
