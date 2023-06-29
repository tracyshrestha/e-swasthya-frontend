import { createContext, useState, useContext, useEffect } from "react";
import uuid from "react-uuid";
import { PatientDetailsContext } from "../../PatientsDetailsState/PatientDetailContext";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../../Store/UserState";
export const HistoryContext = createContext();



const HistoryDetailContext = (props) => {

    const { getStoredCookie } = useContext(AuthContext);
    const navigate = useNavigate();

    const { patientsInformation } = useContext(PatientDetailsContext);
    const [Drug, setDrug] = useState([]);
    const [Report, setReport] = useState([]);
    const [Diagnosis, setDiagnosis] = useState({});
    const [Final, setFinal] = useState([]);
    const { AppointmentId } = useParams();



    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [Messages, setMessage] = useState('');


    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let day = String(currentDate.getDate()).padStart(2, '0');

    let formattedDate = `${year}-${month}-${day}`;


    const [track,setTrack] = useState(false);

    const [superFinal,setSuperFinal] = useState();


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
                    Date: formattedDate,
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
                    return { ...item, selectedFile: file, setPreviewImage: file ? URL?.createObjectURL(file) : null };
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
        let diagnosis = {
            diseaseName: Diagnosis.diagonsis,
            diagnosisDescription: Diagnosis.diagonsisNote,
            patientDetailId: patientsInformation?.patientId,
            doctorDetailId: localStorage.getItem("doctorId"),
            appointmentId: patientsInformation?.AppointmentId
        }
        let prescriptionList = [];
        if (Drug.length != 0) {
            Drug.map((ele) => {
                prescriptionList.push({
                    medicineName: ele?.DrugName,
                    dosageInUnit: ele?.Dosage,
                    frequencyPerDay: ele?.Frequency,
                    additionalNote: ele?.Description,
                    startDate: formattedDate,
                    durationInDays: ele?.Duration,
                    patientDetailId: patientsInformation?.patientId,
                    doctorDetailId: localStorage.getItem("doctorId")
                })
            })
        }
        setFinal((prevState) => {
            return {
                ...prevState,
                diagnosis,
                prescriptionList
            }
        })
    }
   



    const finalSubmit = async () => {
        setTrack(true);
        setLoading(true);
     }

   useEffect(() => {
        if(superFinal) { 
            axios({
                method: "POST",
                url: `${process.env.REACT_APP_API}api/diagnosis/save-diagnosis-test-result-prescription`,
                headers: {
                    'Authorization': `Bearer ${getStoredCookie("token")}`,
                },
                data: superFinal
            })
                .then((res) => {
                    setLoading(false);
                    setMessage(res?.data?.data?.message);
                    setTimeout(() => {
                        navigate(-1);
                    },1500)
                    
                })
                .catch((error) => console.log(error))
        }
           
   },[superFinal])

    useEffect(() => {
        const handleTestResults = async () => {
            try {
                if (Report.length !== 0) {
                    const ress = await Promise.all(
                        Report.map(async (ele) => {
                            let data = new FormData();
                            data.append("file", ele.selectedFile);
                            data.append("upload_preset", "mi8kekc6");
                            data.append("cloud_name", "dwo9yx1r8");
                            return axios.post("https://api.cloudinary.com/v1_1/dwo9yx1r8/image/upload", data);
                        })
                    );

                    const testResultList = Report.map((ele, id) => {
                        return {
                            testName: ele?.ReportTitle,
                            testType: ele?.ReportType,
                            result: "null",
                            description: ele?.ReportDescription,
                            testDate: ele?.Date,
                            patientDetailId: 3,
                            recommendedDoctorDetailId: 28,
                            imagePath: ress[id]?.data?.url,
                        };
                    })
                     
                    setSuperFinal((prevState) => {
                         return {...Final,testResultList}
                    })
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        handleTestResults();
    }, [track]);
    

    // const handleTestResults = async () => {
    //     try {
    //       if (Report.length !== 0) {
    //         const ress = await Promise.all(
    //           Report.map(async (ele) => {
    //             let data = new FormData();
    //             data.append("file", ele.selectedFile);
    //             data.append("upload_preset", "mi8kekc6");
    //             data.append("cloud_name", "dwo9yx1r8");
    //             return axios.post("https://api.cloudinary.com/v1_1/dwo9yx1r8/image/upload", data);
    //           })
    //         );

    //         const updatedResultList = Report.map((ele, id) => {
    //           return {
    //             testName: ele?.ReportTitle,
    //             testType: ele?.ReportType,
    //             result: "null",
    //             description: ele?.ReportDescription,
    //             testDate: ele?.Date,
    //             patientDetailId: 3,
    //             recommendedDoctorDetailId: 28,
    //             imagePath: ress[id]?.data?.url,
    //           };
    //         });

    //         setFinal((prevState) => {
    //           return { ...prevState, testResultList: [...prevState.testResultList, ...updatedResultList] };
    //         });

    //         setLoading(false);
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };










    // })).then((ress) => {
    //     new Promise((resolve,reject)=>{
    //           setTimeout(() => {
    //             console.log(testResultList,"hello");
    //             setFinal((prevState) => {
    //                 return { ...prevState,testResultList}
    //             }) 
    //             resolve();
    //           }, 1000);
    //     }).then(() => {
    //         axios({
    //             method: "POST",
    //             url: `${process.env.REACT_APP_API}api/diagnosis/save-diagnosis-test-result-prescription`,
    //             headers: {
    //                 'Authorization': `Bearer ${getStoredCookie("token")}`,
    //             },
    //             data: Final
    //         })
    //             .then((res) => {
    //                 setLoading(false);
    //                 console.log(res);
    //                 //navigate(-1);
    //             })
    //             .catch((error) => console.log(error))
    //     }).catch((error) => console.log(error))
    //  }) 
    //     } else {
    //         axios({
    //             method: "POST",
    //             url: `${process.env.REACT_APP_API}api/diagnosis/save-diagnosis-test-result-prescription`,
    //             headers: {
    //                 'Authorization': `Bearer ${getStoredCookie("token")}`,
    //             },
    //             data: Final
    //         })
    //             .then((res) => {
    //                 setLoading(false);
    //                 setMessage(res?.data?.data?.message);
    //                 setTimeout(() => {
    //                     navigate(-1);
    //                 }, 1800)
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //                 setLoading(false);
    //                 setError(true);
    //                 setMessage("Something went wrong!")
    //             })
    //     }
    // }
    const onClose = () => {
        let a = document.getElementById("historyModal");
        a.classList.add("hidden")
    }


    return (

        <HistoryContext.Provider
            value={{
                error,
                loading,
                Messages,

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
                finalSubmit,
                MedicalFileChange,
                formattedDate,
                onAdd,
                ReportChange
            }}
        >
            {props.children}
        </HistoryContext.Provider>
    )
}

export default HistoryDetailContext;