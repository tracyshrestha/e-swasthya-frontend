import { Route, Routes } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import IsVerified from "./SubRoutes/IsVerified";

import User from "../UserAuthentication/StepForm/User";
import IndexStep from "../UserAuthentication/StepForm/indexStep";

import LogIn from "../UserAuthentication/LoginIn";
import SignUp from "../UserAuthentication/Signup";
import ResetPassword from "../UserAuthentication/ResetPassword";
import RecoverAccount from "../UserAuthentication/RecoverAccount";
import NotFound from "../UserAuthentication/NotFound";

import Verified from "../UserAuthentication/Verified";
import Verify from "../UserAuthentication/Verify";

const IndexRoute = () => {


  return (
    <Routes>

      <Route element={<PrivateRoute />}>
        <Route element={<IsVerified/>}>
           <Route path="/IndexStep" element={<IndexStep />} />
        </Route> 
      </Route>


      <Route element={<PublicRoute restriction={true}/>}>
           <Route  path="/" element={<LogIn />} />
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
