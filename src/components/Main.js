import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogIn from "./pages/LogIn";
import NotFound from "./NotFound";
import '../index.css';

function Main() {
  return <BrowserRouter>
    <Routes>

      <Route path="/" element={<LogIn/> } />
      <Route path="*" element={<NotFound/> } />

    </Routes>
  </BrowserRouter>;
}
export default Main;
