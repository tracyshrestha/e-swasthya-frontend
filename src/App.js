import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import IndexStep from './UserAuthentication/DoctorStepForm/indexStep'
import DoctorRoutes from './DoctorDashboard/DoctorRoutes'
import UserStep from './UserAuthentication/UserStepForm/indexStep'


const App = () => {
  return (
       <DoctorRoutes/> 
  )
}

export default App;