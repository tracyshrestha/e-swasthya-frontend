
import AddMedicalHistory from "./AddMedicalHistory";
import HistoryDetailContext from "./HistoryState/HistoryState";
import PatientDetailsContextProvider from "../PatientsDetailsState/PatientDetailContext";
import AddHistoryModal from "./AddHisoryModal/AddHistoryModal";

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