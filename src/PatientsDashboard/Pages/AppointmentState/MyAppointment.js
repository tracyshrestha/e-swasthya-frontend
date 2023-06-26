
import Appointment from "./Appointments";
import ConfirmationModal from "./ConfirmationModal";
import AppointmentContextProvider from "./GlobalState";
import GrantModal from "./GrantModal";

const MyAppointment = ({hospitalList}) => {
      return (
        <AppointmentContextProvider>
             <GrantModal/>
               <Appointment/>
        </AppointmentContextProvider>
      )
}

export default MyAppointment;