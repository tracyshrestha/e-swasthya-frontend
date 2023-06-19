import { createContext, useState } from "react";
import uuid from "react-uuid";
export const HistoryContext = createContext();


const HistoryDetailContext = (props) => {
    const [Drug, setDrug] = useState([]);
    const [Report,setReport] = useState([]);

  
    const AddnewDrug = () => {
        setDrug((prevState) => {
            let random = uuid();
            return [...prevState, {
                id: random,
                DrugName: 'DrugName',
                Dosage: '',
                DrugType: '',
                Description: ''
            }]
        })
    }

    const AddnewReport = () => {
        setReport((prevState) => {
            return [
                ...prevState, {
                    id : uuid(),
                    ReportTitle : 'Report Name',
                    ReportType : 'Report type',
                    Date : new Date().toLocaleDateString(),
                    ReportDescription : '',
                    ReportUrl : ''
                }
            ]
        })
        console.log(Report)
    }

    const RemoveItem = (id) => {
        const updatedObjects = Drug.filter((object) => object.id !== id);
        setDrug(updatedObjects);
    }

    const RemoveReport = (id) => {
        const updatedObjects = Report.filter((object) => object.id !== id);
        setReport(updatedObjects);
    }


    const OnDrugChange = id => event => {
        setDrug(prevItems => {
            return prevItems.map(item => {
                if (item.id === id) {
                    return { ...item, [event.target.name]: event.target.value };
                }
                return item;
            });
        });
    }

    return (

        <HistoryContext.Provider
            value={{
                Drug,
                OnDrugChange,
                AddnewDrug,
                RemoveItem,
                Report,
                setReport,
                AddnewReport,
                RemoveReport
            }}
        >
            {props.children}
        </HistoryContext.Provider>
    )
}

export default HistoryDetailContext;