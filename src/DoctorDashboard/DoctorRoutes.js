import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './Dashboard';
import Home from "./Pages/Home"

import AppointmentsContextRoute from './Pages/AppointmentState/AppointmentContext';
import PatientsContext from './Pages/AppointmentState/PatientsContext'

import AddHistoryIndex from './Pages/PageComponents/AddHistory';
import PatientContextComponent from './Pages/PatientsDetailsState/PatientContext'
import ViewMedicalContext from './Pages/PatientsDetailsState/ViewMedicalContext';

// export const DoctorRoutes = () => {
//    return (
//       <Routes>
//          <Route path='/' element={<Dashboard><Home /></Dashboard>} />
//          <Route path='/Appointments' element={<Dashboard><Appointments /></Dashboard>} />
//          <Route path='/Patients' element={<Dashboard><Patients /></Dashboard>} />
//          <Route path='/PatientsInfo' element={} />
//          <Route path='/ViewMedical/:id' element={<Dashboard><ViewMedical /></Dashboard>} />
//          <Route path='/AddMedicalHistory/:id' element={<Dashboard><AddHistoryIndex /></Dashboard>} />
//       </Routes>
//    )
// }

export const DoctorRoutes = [
   {path : '/home' , element : <Dashboard><Home /></Dashboard>},
   {path : '/Appointments' , element : <Dashboard><AppointmentsContextRoute /></Dashboard>},
   {path : '/Patients' , element : <Dashboard><PatientsContext /></Dashboard> },
   {path : '/PatientsInfo/:AppointmentId' , element : <Dashboard><PatientContextComponent /></Dashboard>},
   {path : '/ViewMedical/:AppointmentId/:pastAppointmentId' , element : <Dashboard><ViewMedicalContext /></Dashboard>},
   {path : '/AddMedicalHistory/:AppointmentId' , element : <Dashboard><AddHistoryIndex/></Dashboard>}
]

