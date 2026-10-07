import { useState } from "react";
import "./App.css";
import { Button } from "./components/common/Button";
import appRoutes from "../src/routes/AppRoutes";
import { Routes, Route } from "react-router-dom";

function App() {
  // const handleRegister=()=>{
  //   console.log("register user successfully")
  // }

  return (
    <>
      {/* <h1>Jobify Project</h1>
  <Button lableName={"Registerdter"} className={"registerButton"} buttonClick={handleRegister}/> */}
      <Routes>
        {appRoutes.map((route) => {
         return <Route key={route.path} path={route.path} element={route.element} />;
        })}
      </Routes>
    </>
  );
}

export default App;
