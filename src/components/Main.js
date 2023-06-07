import React from "react";
import { BrowserRouter, Route, Routes, Router, Navigate } from 'react-router-dom';


import LogIn from "./pages/LogIn";
import SignUp from "./pages/Signup";
import Verify from "./pages/VerifyAccPages/Verify";
import Verifye from "./pages/VerifyAccPages/Verifye";
import Verified from "./pages/VerifyAccPages/Verified";
import InfoP from "./pages/InfoPages/InfoPatient";
import InfoFDoc from "./pages/InfoPages/InfoFDoc";
import NotFound from "./pages/NotFound";
import RecoverAccount from "./pages/RecoverPages/RecoverAccount";
import ResetPassword from "./pages/RecoverPages/ResetPassword";
import VerifyResetPasswordLink from "./pages/RecoverPages/VerifyResetPasswordLink";
import EditProfilePatient from "./pages/EditProfile/EditProfilePatient";
import EditProfileDoctor from "./pages/EditProfile/EditProfileDoctor";
import ArrayInput from "./pages/ArrayInput";
import ReportVaccine from "./pages/Reports/ReportVaccine";
import Diagnosis from "./pages/Reports/Diagnosis";
import Prescription from "./pages/Reports/Prescription";
import ReportTest from "./pages/Reports/ReportTest";

import Dashboard from "../Dashboard/Dashboard";
import UserHome from "../Dashboard/UserDashboard/UserHome";
import DoctorPg from "../Dashboard/UserDashboard/DoctorPg";
import Medication from "../Dashboard/UserDashboard/Medication";
import MedicalHistory from "../Dashboard/UserDashboard/MedicalHistory";
import Appointments from "../Dashboard/UserDashboard/Appointments";
import UserReports from "../Dashboard/UserDashboard/UserReports";
import BookAppointment from "../Dashboard/UserDashboard/BookAppointment";

import DoctorHome from "../Dashboard/DoctorDashboard/DoctorHome";
import DocAppointments from "../Dashboard/DoctorDashboard/DocAppointments";
import PatientInfo from "../Dashboard/DoctorDashboard/PatientInfo";

import '../index.css';
import jwt_decode from 'jwt-decode';
import { useParams } from 'react-router-dom';





function Main() {

  const decodedJWT = {
    isVerified: true,
    isFormFilled: true,
    role: 'PATIENT',
    email: 's',
    // role: 'DOCTOR',
  };

  // // Retrieve the JWT token from local storage
  // const token = localStorage.getItem("jwt");

  // // Decode the JWT token
  // const decodedJWT = jwt_decode(token);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route
          path="/verify"
          element={
            decodedJWT.email !== '' ? (
              decodedJWT.isVerified ? (
                decodedJWT.isFormFilled ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <Navigate to="/info" replace />
                )
              ) : (
                <Verify />
              )
            ) : null
          }
        />
        <Route
          path="/info"
          element={
            decodedJWT.role === 'PATIENT' && decodedJWT.isVerified ? (
              <InfoP />
            ) : (
              decodedJWT.role === 'DOCTOR' && decodedJWT.isVerified ? (
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

        {decodedJWT.role === 'PATIENT' && decodedJWT.isVerified && decodedJWT.isFormFilled && (
          <Route path="/doctorpg" element={<Dashboard><DoctorPg /></Dashboard>} />
        )}

        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/forget" element={<RecoverAccount />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        {/* <Route path="/verifyresetpasswordlink" element={<VerifyResetPasswordLink />} /> */}
        <Route path="/verifyresetpasswordlink/:id/:token" element={<VerifyResetPasswordLink />} />
        <Route path="/verifye" element={<Verifye />} />
        <Route path="/arrayinput" element={<ArrayInput />} />
        <Route path="/reportvaccine" element={<ReportVaccine />} />
        <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/prescription" element={<Prescription />} />
        <Route path="/reporttest" element={<ReportTest />} />
        <Route path="*" element={<NotFound />} />
        {/* for user dashboard but will later make it all render in one place
        aile lai kam chalau code ho! */}
        <Route path="/uhome" element={<Dashboard><UserHome /></Dashboard>} />
        <Route path="/medication" element={<Dashboard><Medication /></Dashboard>} />
        <Route path="/medicalhistory" element={<Dashboard><MedicalHistory /></Dashboard>} />
        <Route path="/appointments" element={<Dashboard><Appointments /></Dashboard>} />
        <Route path="/addappointment" element={<Dashboard><BookAppointment /></Dashboard>} />
        <Route path="/ureports" element={<Dashboard><UserReports /></Dashboard>} />
        {/* for doctor dashboard */}
        <Route path="/doctorhome" element={<Dashboard><DoctorHome /></Dashboard>} />
        <Route path="/docappointments" element={<Dashboard><DocAppointments /></Dashboard>} />
        <Route path="/patientinfo/:id" element={<Dashboard><PatientInfo /></Dashboard>} />
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




