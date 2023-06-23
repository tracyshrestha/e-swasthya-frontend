import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import IndexRoute from './Routes/IndexRoute'
import PatientsRoutes from './PatientsDashboard/PatientsRoutes'

const App = () => {
  return (
       <IndexRoute/>
  )
}

export default App;