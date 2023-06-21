import {useLocation,Navigate, Outlet} from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../Store/UserState";
import Verify from "../../UserAuthentication/Verify";

const CheckRole = () => {
    const {isAuth} = useContext(AuthContext);

    return (
          !(isAuth().authority[0]) ? <Verify/>
         : <Outlet/>
    )
 }

 export default CheckRole;