import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./Navbar";
import NotFound from "./NotFound";

function Main() {
  return (
    <Router>
      <div >
        <Navbar />     
        <main >
          <Routes>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default Main;
