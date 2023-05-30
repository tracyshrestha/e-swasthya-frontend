import React from "react";
import { BrowserRouter, Route, Routes, Router, Navigate } from 'react-router-dom';


import LogIn from "./pages/LogIn";
import SignUp from "./pages/Signup";
import Verify from "./pages/Verify";
import Verified from "./pages/Verified";
import InfoF from "./pages/InfoF";
import InfoFDoc from "./pages/InfoFDoc";
import NotFound from "./pages/NotFound";
import RecoverAccount from "./pages/RecoverAccount";
import ResetPassword from "./pages/ResetPassword";

import Dashboard from "../Dashboard/Dashboard";
import Home from "../Dashboard/UserDashboard/Home";
import DoctorPg from "../Dashboard/UserDashboard/DoctorPg";
import Medication from "../Dashboard/UserDashboard/Medication";
import MedicalHistory from "../Dashboard/UserDashboard/MedicalHistory";
import Appointments from "../Dashboard/UserDashboard/Appointments";
import UserReports from "../Dashboard/UserDashboard/UserReports";

import '../index.css';
import jwtDecode from 'jwt-decode';



function Main() {

  const decodedJWT = {
    isVerified: true,
    isFormFilled: true,
    role: 'PATIENT',
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
          <Route path="/doctorpg" element={<Dashboard><DoctorPg /></Dashboard>} />
        )}

        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/forget" element={<RecoverAccount />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
        {/* for user dashboard but will later make it all render in one place
        aile lai kam chalau code ho! */}
        <Route path="/uhome" element={<Dashboard><Home/></Dashboard>}/>
        <Route path="/medication" element={<Dashboard><Medication/></Dashboard>}/>
        <Route path="/medicalhistory" element={<Dashboard><MedicalHistory/></Dashboard>}/>
        <Route path="/appointments" element={<Dashboard><Appointments/></Dashboard>}/>
        <Route path="/ureports" element={<Dashboard><UserReports/></Dashboard>}/>
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




