import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import IndexStep from './UserAuthentication/DoctorStepForm/indexStep'


const App = () => {
  return (
  <Routes>
      <Route path='/' element={<IndexStep/>}/>
  </Routes>
  )
}

export default App;