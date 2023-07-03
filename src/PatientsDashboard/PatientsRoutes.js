import Dashboard from "./Dashboard"

import DoctorInfo from "./Pages/DoctorInfo"
import Home from "./Pages/Home"
import Doctor from "./Pages/Doctor"


import MyAppointment from "./Pages/AppointmentState/MyAppointment"
import ViewMedical from "./Pages/MedicalHistory/ViewMedical"
import ViewDetailHistory from "./Pages/MedicalHistory/ViewDetailHistory"


export const PatientsRoutes = [
    {path : '/' , element : <Dashboard><Home /></Dashboard>},
    {path : '/Doctors' , element : <Dashboard><Doctor/></Dashboard>},
    {path : 'Doctors/:id' , element : <Dashboard><DoctorInfo/></Dashboard>},
    {path : '/Appointments' , element : <Dashboard><MyAppointment/></Dashboard>},
    {path : '/viewMedical' , element : <Dashboard><ViewMedical/></Dashboard>},
    {path : '/viewMedicalDetails/:AppointmentId' , element : <Dashboard><ViewDetailHistory/></Dashboard>}
 ]
 

// const PatientsRoutes = () => {
//     return (
//           <Routes>
//               <Route path="/" element={<Dashboard><Home/></Dashboard>}/>
//               <Route path="/Doctors" element={<Dashboard><Doctor/></Dashboard>}/>
//               <Route path="/Doctor/:id" element={<Dashboard><DoctorInfo/></Dashboard>}/>
//           </Routes>
//     )
// }

// export default PatientsRoutes;