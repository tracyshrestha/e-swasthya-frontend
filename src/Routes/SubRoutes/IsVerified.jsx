import {useLocation,Navigate, Outlet} from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../Store/UserState";
import Verify from "../../UserAuthentication/Verify";

const IsVerified = () => {
    const {isAuth} = useContext(AuthContext);

    return (
          !(isAuth().isVerified) ? <Verify/>
         : <Outlet/>
    )
 }

 export default IsVerified;