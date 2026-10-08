import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { baseURL } from "../api/baseURL";
const SignupPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    password: "",
  });

  const naviggate=useNavigate()
  const handleSignupInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setSignupData({ ...signupData, [name]: value });
  };

  //   const get = async () => {
  //     try {
  //       const result = await axios.get(`http://localhost:4000/`);
  //       console.log(result.data.data, "getsignup userData***************");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  // get()

  const handleCreateSignupData = async () => {
    try {
      const result = await axios.post(
        `${baseURL}/createSignup`,
        signupData,
      );
      console.log(result, "*********************");

      console.log("message:", result.data.message);
      naviggate()

    } catch (error) {
      console.log(error);
      console.log("status:", error.response.status);
      console.log("message:", error.response.message);
    }
  };
  return (
    <>
      <div className="common-form">
        <label className="">FullName</label>
        <input
          type="text"
          placeholder="enter fullName"
          value={signupData.fullName}
          name="fullName"
          onChange={handleSignupInput}
        />
        <label>Mobile</label>
        <input
          type="number"
          value={signupData.mobile}
          name="mobile"
          onChange={handleSignupInput}
        />
        <label>Email</label>
        <input
          type="text"
          value={signupData.email}
          name="email"
          onChange={handleSignupInput}
        />
        <label>Password</label>
        <input
          type="password"
          value={signupData.password}
          name="password"
          onChange={handleSignupInput}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          value={signupData.password}
          name="password"
          onChange={handleSignupInput}
        />
        <button className="common-btn" onClick={handleCreateSignupData}>
          Signup
        </button>
      </div>
    </>
  );
};
export default SignupPage;
