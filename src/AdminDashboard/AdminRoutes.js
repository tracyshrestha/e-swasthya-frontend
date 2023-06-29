
import Dashboard from './Dashboard';
import Home from "./Pages/Home"
import Prov6 from './Pages/PageComponents/Prov6/Prov6';


export const AdminRoutes = [
   {path : '/home' , element : <Dashboard><Home /></Dashboard>},
   {path : '/Prov6' , element : <Dashboard><Prov6/></Dashboard>}
   ,
]

