import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogIn from "./pages/LogIn";
import SignUp from "./pages/Signup";
import Verify from "./pages/Verify";
import Verified from "./pages/Verified";

import NotFound from "./pages/NotFound";
import '../index.css';
import RecoverAccount from "./pages/RecoverAccount";
import ResetPassword from "./pages/ResetPassword";



function Main() {
  return <BrowserRouter>
    <Routes>

      <Route path="/" element={<LogIn/> } />
      <Route path="/signup" element={<SignUp/> } />
      <Route path="/verify" element={<Verify/> } />
      <Route path="/verified" element={<Verified/> } />
      <Route path="/forget" element={<RecoverAccount/> } />
      <Route path="/resetpassword" element={<ResetPassword/> } />
      <Route path="*" element={<NotFound/> } />

    </Routes>
  </BrowserRouter>;
}
export default Main;
