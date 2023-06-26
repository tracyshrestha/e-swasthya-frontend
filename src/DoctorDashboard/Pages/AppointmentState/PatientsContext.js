import AppointmentContextProvider from "./AppointmentState"
import Patients from "./Patients"

const PatientsContext = () => {
    return (
        <AppointmentContextProvider>
            <Patients />
        </AppointmentContextProvider>
    )
}

export default PatientsContext;