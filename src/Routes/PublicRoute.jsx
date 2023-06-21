import {useLocation,Navigate, Outlet} from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from '../Store/UserState';


const PublicRoute = ({restriction}) => {
      const {isAuth} = useContext(AuthContext)
      return (
           isAuth() && restriction ? <Navigate to="/home" replace/>
           :  <Outlet/>
      )
}

export default PublicRoute;
