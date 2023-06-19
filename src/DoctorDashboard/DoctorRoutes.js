import { Routes, Route , BrowserRouter} from 'react-router-dom'
import Dashboard from './Dashboard';
import Home from "./Pages/Home"
import Appointments from './Pages/Appointments';
import Patients from './Pages/Patients'
import PatientInfo from './Pages/PatientInfo';
import ViewMedical from './Pages/ViewMedical';


import AddHistoryIndex from './Pages/AddHistory';

const DoctorRoutes = () => {
     return (
    <Routes>
        <Route path='/' element={<Dashboard><Home/></Dashboard>}/>
        <Route path='/Appointments' element={<Dashboard><Appointments/></Dashboard>}/>
        <Route path='/Patients' element={<Dashboard><Patients/></Dashboard>}/>
        <Route path='/PatientsInfo' element={<Dashboard><PatientInfo/></Dashboard>}/>
        <Route path='/ViewMedical/:id' element={<Dashboard><ViewMedical/></Dashboard>}/>
        <Route path='/AddMedicalHistory/:id' element={<Dashboard><AddHistoryIndex/></Dashboard>}/>
    </Routes>
   )
}

export default DoctorRoutes;