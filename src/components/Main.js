import React from "react";
import { BrowserRouter, Route, Routes, Router, Navigate } from 'react-router-dom';
import LogIn from "./pages/LogIn";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Verify from "./pages/Verify";
import Verified from "./pages/Verified";
import DoctorPg from "./pages/DoctorPg";
import InfoF from "./pages/InfoF";
import InfoFDoc from "./pages/InfoFDoc";
import NotFound from "./pages/NotFound";
import '../index.css';
import RecoverAccount from "./pages/RecoverAccount";
import ResetPassword from "./pages/ResetPassword";
import EditProfilePatient from "./pages/EditProfile/EditProfilePatient";
import EditProfileDoctor from "./pages/EditProfile/EditProfileDoctor";
import ArrayInput from "./pages/ArrayInput";
import jwtDecode from 'jwt-decode';



function Main() {

  const decodedJWT = {
    isVerified: true,
    isFormFilled: true,
    role: 'PATIENT',
    // role: 'DOCTOR',
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />

        <Route
          path="/verify"
          element={
            decodedJWT.isVerified ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Verify />
            )
          }
        />

        <Route
          path="/info"
          element={
            decodedJWT.role === 'PATIENT' ? (
              <InfoF />
            ) : (
              decodedJWT.role === 'DOCTOR' ? (
                <InfoFDoc />
              ) : (
                <Navigate to="/dashboard" replace />
              )
            )
          }
        />
        <Route
          path="/editprofile"
          element={
            decodedJWT.role === 'PATIENT' ? (
              <EditProfilePatient />
            ) : (
              decodedJWT.role === 'DOCTOR' ? (
                <EditProfileDoctor />
              ) : (
                <Navigate to="/dashboard" replace />
              )
            )
          }
        />

        <Route
          path="/dashboard"
          element={
            decodedJWT.isVerified && decodedJWT.isFormFilled ? (
              <Dashboard role={decodedJWT.role} />
            ) : (
              <Navigate to="/info" replace />
            )
          }
        />

        {decodedJWT.role === 'PATIENT' && decodedJWT.isVerified && decodedJWT.isFormFilled &&  (
          <Route path="/doctorpg" element={<DoctorPg />} />
        )}

        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/forget" element={<RecoverAccount />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/arrayinput" element={<ArrayInput />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      </BrowserRouter>
  );
}

export default Main;

// function Main() {
//   return <BrowserRouter>
//     <Routes>

//       <Route path="/" element={<LogIn/> } />
//       <Route path="/signup" element={<SignUp/> } />
//       <Route path="/verify" element={<Verify/> } />
//       <Route path="/verified" element={<Verified/> } />
//       <Route path="/forget" element={<RecoverAccount/> } />
//       <Route path="/resetpassword" element={<ResetPassword/> } />
//       <Route path="/doctorpg" element={<DoctorPg/> } />
//       <Route path="/infof" element={<InfoF/> } />
//       <Route path="*" element={<NotFound/> } />

//     </Routes>
//   </BrowserRouter>;
// }
// export default Main;




