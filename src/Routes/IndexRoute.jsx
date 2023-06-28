import { Route, Routes } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import IsVerified from "./SubRoutes/IsVerified";


import LogIn from "../UserAuthentication/LoginIn";
import SignUp from "../UserAuthentication/Signup";
import ResetPassword from "../UserAuthentication/ResetPassword";
import RecoverAccount from "../UserAuthentication/RecoverAccount";
import NotFound from "../UserAuthentication/NotFound";

import Verified from "../UserAuthentication/Verified";
import IsFormFilled from "./SubRoutes/IsFormFilled";
import { DoctorRoutes } from "../DoctorDashboard/DoctorRoutes";
import { PatientsRoutes } from "../PatientsDashboard/PatientsRoutes"
import { useContext } from "react";
import { AuthContext } from "../Store/UserState";
import { AdminRoutes } from "../AdminDashboard/AdminRoutes";


const IndexRoute = () => {
  const { isAuth } = useContext(AuthContext)

  return (

    <Routes>

      <Route element={<PrivateRoute />}>
        {
          isAuth()?.authority === "ADMIN" ? (
            AdminRoutes.map((ele) => {
              return (<Route path={ele.path} element={ele.element} />)
            })
          ) : null
        }
      </Route>

      <Route element={<PrivateRoute />}>
        <Route element={<IsVerified />}>
          <Route element={<IsFormFilled />}>
            {
              isAuth()?.authority === "PATIENT" ?
                (
                  PatientsRoutes.map((ele) => {
                    return (
                      <Route path={ele.path} element={ele.element} />
                    )
                  })
                ) : isAuth()?.authority === "DOCTOR" ? (
                  DoctorRoutes.map((ele) => {
                    return (
                      <Route path={ele.path} element={ele.element} />
                    )
                  })
                ) : null
            }
          </Route>
        </Route>
      </Route>


      <Route element={<PublicRoute restriction={true} />}>
        <Route exact path="/" element={<LogIn />} />
      </Route>


      <Route element={<PublicRoute restriction={true} />}>
        <Route path="/Signup" element={<SignUp />} />
      </Route>

      <Route element={<PublicRoute restriction={true} />}>
        <Route path="/RecoverAccount" element={<RecoverAccount />} />
      </Route>

      <Route element={<PublicRoute restriction={true} />}>
        <Route path="/ResetPassword" element={<ResetPassword />} />
      </Route>

      <Route element={<PublicRoute restriction={true} />}>
        <Route path="/Verified" element={<Verified />} />
      </Route>



      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default IndexRoute;
