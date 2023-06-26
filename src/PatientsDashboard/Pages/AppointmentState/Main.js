import AppointmentComponent from "./AppointmentState";
import ConfirmationModal from "./ConfirmationModal";
import AppointmentContextProvider from "./GlobalState";

const AppointmentHandler = ({hospitalList}) => {
      return (
        <AppointmentContextProvider>
               <ConfirmationModal/>
               <AppointmentComponent hospitalList={hospitalList}/>
        </AppointmentContextProvider>
      )
}

export default AppointmentHandler;