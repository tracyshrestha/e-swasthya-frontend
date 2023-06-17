import { Routes, Route , BrowserRouter} from 'react-router-dom'
import Dashboard from './Dashboard';
import Home from "./Pages/Home"
import Appointments from './Pages/Appointments';
import Patients from './Pages/Patients'

const DoctorRoutes = () => {
     return (
    <Routes>
        <Route path='/' element={<Dashboard><Home/></Dashboard>}/>
        <Route path='/Appointments' element={<Dashboard><Appointments/></Dashboard>}/>
        <Route path='/Patients' element={<Dashboard><Patients/></Dashboard>}/>
    </Routes>
   )
}

export default DoctorRoutes;