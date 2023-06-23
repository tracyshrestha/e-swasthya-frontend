import {useLocation,Navigate, Outlet} from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../Store/UserState";

import {IndexStep as UserStep} from "../../UserAuthentication/UserStepForm/indexStep";
import {IndexStep as DoctorStep} from "../../UserAuthentication/DoctorStepForm/indexStep";
import DoctorRoutes from "../../DoctorDashboard/DoctorRoutes";

const IsFormFilled = () => {
    const {isAuth} = useContext(AuthContext);
    return (
           ((!isAuth()?.isFormFilled && isAuth()?.authority === "PATIENT")) ? <UserStep/>
          :((!isAuth()?.isFormFilled && isAuth()?.authority === "DOCTOR")) ? <DoctorStep/>
          : <Outlet/>
    )
 }

 export default IsFormFilled;