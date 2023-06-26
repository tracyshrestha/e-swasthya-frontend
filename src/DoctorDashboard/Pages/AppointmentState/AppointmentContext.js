import AppointmentContextProvider from "./AppointmentState"
import Appointments from "./Appointments"

const AppointmentContextRoute = () => {
    return (
        <AppointmentContextProvider>
            <Appointments />
        </AppointmentContextProvider>
    )
}

export default AppointmentContextRoute;