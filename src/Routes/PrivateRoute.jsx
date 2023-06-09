
import {useLocation,Navigate,Outlet} from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from '../Store/UserState';


const PrivateRoute = () => {
      const location = useLocation();
      const {isAuth} = useContext(AuthContext)
      
      return (
          isAuth() ? <Outlet/> 
            : <Navigate to="/" replace/>
      )
}

export default PrivateRoute;