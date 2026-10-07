
const UserProfileForm = () => {
  return (
    <div className="common-page">

      <div className="common-form">

        <h2 className="common-heading">User Profile</h2>

        <label>Full Name</label>
        <input type="text" />

        <label>Profile Photo</label>
        <input type="file" accept="image/*" />

        <label>Mobile</label>
        <input type="tel" />

        <label>Email</label>
        <input type="email" />

        <label>Address</label>
        <textarea></textarea>

        <label>Skills</label>
        <input
          type="text"
          placeholder="React, JavaScript, HTML, CSS"
        />

        <label>Resume</label>
        <input type="file" accept=".pdf,.doc,.docx" />

        <label>LinkedIn</label>
        <input
          type="url"
          placeholder="LinkedIn profile URL"
        />

       

        <label>Education</label>
        <input type="text" />

        <label>Experience</label>
        <input type="text" />

        <label>Portfolio</label>
        <input
          type="url"
          placeholder="Portfolio URL"
        />

        <label>About</label>
        <textarea></textarea>

        <button className="common-btn">
          Save Profile
        </button>

      </div>

    </div>
  );
};

export default UserProfileForm;