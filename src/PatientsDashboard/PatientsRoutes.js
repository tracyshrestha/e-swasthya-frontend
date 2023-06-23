import Dashboard from "./Dashboard"

import DoctorInfo from "./Pages/DoctorInfo"
import Home from "./Pages/Home"
import Doctor from "./Pages/Doctor"


import { Routes,Route } from "react-router-dom"


export const PatientsRoutes = [
    {path : '/' , element : <Dashboard><Home /></Dashboard>},
    {path : '/Doctors' , element : <Dashboard><Doctor/></Dashboard>},
    {path : 'Doctors/:id' , element : <Dashboard><DoctorInfo/></Dashboard>},
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