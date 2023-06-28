
import PatientDetailsContextProvider from "./PatientDetailContext";
import PatientInfo from "./PatientInfo"

const PatientContextComponent = () => {
     return (
         <PatientDetailsContextProvider>
                <PatientInfo/>
         </PatientDetailsContextProvider> 
     )
}

export default PatientContextComponent;