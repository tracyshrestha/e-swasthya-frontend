
import AddHistory from "./PageComponents/AddHistory";
import HistoryDetailContext from "./PageComponents/HistoryState/HistoryState";

const AddHistoryIndex = () => {
    return (
        <HistoryDetailContext>
             <AddHistory/>
        </HistoryDetailContext>
    )
}

export default AddHistoryIndex;