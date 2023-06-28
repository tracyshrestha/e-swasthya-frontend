
import AddMedicalHistory from "./AddMedicalHistory";
import HistoryDetailContext from "./HistoryState/HistoryState";
import PatientDetailsContextProvider from "../PatientsDetailsState/PatientDetailContext";

const AddHistoryIndex = () => {
    return (
    <PatientDetailsContextProvider>
          <HistoryDetailContext>
               <AddMedicalHistory/>
          </HistoryDetailContext>
     </PatientDetailsContextProvider>
    )
}

export default AddHistoryIndex;