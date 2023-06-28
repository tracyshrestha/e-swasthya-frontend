import { createContext, useState ,useContext} from "react";
import uuid from "react-uuid";
import { PatientDetailsContext } from "../../PatientsDetailsState/PatientDetailContext";
import { useParams } from "react-router-dom";
export const HistoryContext = createContext();


const HistoryDetailContext = (props) => {
    const {patientsInformation} = useContext(PatientDetailsContext);
    const [Drug, setDrug] = useState([]);
    const [Report, setReport] = useState([]);
    const [Diagnosis, setDiagnosis] = useState({});
    const [Final,setFinal] = useState([]);
    const {AppointmentId} = useParams();


    const AddnewDrug = () => {
        setDrug((prevState) => {
            let random = uuid();
            return [...prevState, {
                id: random,
                DrugName: 'DrugName',
                Dosage: '',
                DrugType: '',
                Frequency: '',
                Description: '',
                Duration: ''
            }]
        })
    }

    const AddnewReport = () => {
        setReport((prevState) => {
            return [
                ...prevState, {
                    id: uuid(),
                    ReportTitle: 'Report Name',
                    ReportType: 'Report type',
                    selectedFile: '',
                    Date: new Date().toLocaleDateString(),
                    ReportDescription: '',
                    ReportUrl: ''
                }
            ]
        })
    }

    const RemoveItem = (id) => {
        const updatedObjects = Drug.filter((object) => object.id !== id);
        setDrug(updatedObjects);
    }

    const RemoveReport = (id) => {
        const updatedObjects = Report.filter((object) => object.id !== id);
        setReport(updatedObjects);
    }

    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     setSelectedFile(file);
    //     const reader = new FileReader(file);
    //     reader.onloadend = () => {
    //         setPreviewImage(reader.result);
    //     };
    //     reader.readAsDataURL(file);
    // };


    const ReportChange = id => event => {
        setReport(prevItems => {
            return prevItems.map(item => {
                if (item.id === id) {
                    return { ...item, [event.target.name]: event.target.value };
                }
                return item;
            });
        })
    }

    const MedicalFileChange = id => event => {
        setReport(prevItems => {
            return prevItems.map(item => {
                if (item.id === id) {
                    const file = event?.target?.files[0];
                    return {...item,selectedFile:file,setPreviewImage: file ? URL?.createObjectURL(file) : null};
                }
                return item;
            });
        })

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

    const onDiagonsisChange = (event) => {
        setDiagnosis((prev) => {
            return { ...prev, [event.target.name]: event.target.value }
        })
    }

    const onAdd = (e) => {
           e.preventDefault();
           let a = document.getElementById("historyModal");
           a.classList.remove("hidden");
           setFinal((prevState) => {
                 return {
                     ...prevState,
                      diagnosis : {
                        diseaseName : Diagnosis.diagonsis,
                        diagnosisDescription : Diagnosis.diagonsisNote,
                        patientDetailId : patientsInformation?.patientId,
                        doctorDetailId : localStorage.getItem("doctorId"),
                        appointmentId : patientsInformation?.AppointmentId
                     }
                 }
           })

           console.log(Final);
    }
    const onClose = () => {
           let a = document.getElementById("historyModal");
            a.classList.add("hidden")
    }


    return (

        <HistoryContext.Provider
            value={{
                Drug,
                OnDrugChange,
                AddnewDrug,
                RemoveItem,
                onClose,
                Diagnosis,
                setDiagnosis,
                onDiagonsisChange,
                Report,
                setReport,
                AddnewReport,
                RemoveReport,
                MedicalFileChange,
                onAdd,
                ReportChange
            }}
        >
            {props.children}
        </HistoryContext.Provider>
    )
}

export default HistoryDetailContext;