import ViewMedical from "./ViewMedical"
import PatientDetailsContextProvider from "./PatientDetailContext";

const ViewMedicalContext = () => {
      return (
          <>
           <PatientDetailsContextProvider>
               <ViewMedical/>
             </PatientDetailsContextProvider>
          </>
      )
}

export default ViewMedicalContext;