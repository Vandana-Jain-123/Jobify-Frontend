import axios from "axios";
import { useState } from "react";
const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const checkLogin = async () => {
    try {
      console.log("LOGIN DATA:", loginData);
      const result = await axios.post(
        `http://localhost:4000/checkLogin/checkLogin`,
        loginData,
      );
      console.log(result, "555555555555555555555");
      console.log("message:", result.data.message);
    } catch (error) {
      console.log("status", error.response.status);
      console.log("message", error.response.data.message);
    }
  };

  return (
    <>
      <div className="common-form">
        <label className="">Email</label>
        <input
          type="text"
          value={loginData.email}
          name="email"
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
        />
        <label>Password</label>
        <input
          type="password"
          value={loginData.password}
          name="password"
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />

        <button className="common-btn" onClick={checkLogin}>
          Login
        </button>
      </div>
    </>
  );
};
export default LoginPage;
