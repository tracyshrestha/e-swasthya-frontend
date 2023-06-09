import React, { createContext,useContext, useState } from "react";
import axios from "axios";
import {AuthContext} from "../../../../Store/UserState"


export const FormContext = createContext();

const FormContextProvider = (props) => {
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0]);
  const {isAuth,getStoredCookie} = useContext(AuthContext)

  const next = () => {
    setFormNo(formNo + 1);
  };

  const prev = () => {
    setFormNo(formNo - 1);
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  const [Userinformation, setUserInformation] = useState({
    DOB: "",
    bloodGroup: "A+",
    imageUrl: "",
    height: "",
    Age: "0",
    weight: "",
    gender: "",
    selectedFile: selectedFile,
    citizenshipno: "",
    phonenumber: "",
    location: {
      Locationid: "",
      prov: "",
      district: "",
      municipality: "",
      Address: "",
    },
  });


  const PostData = () => {
     axios({
        url: `${process.env.REACT_APP_API}api/patient/save`,
        method : "POST",
        headers: {Authorization: `Bearer ${getStoredCookie("token")}` },
        data: {
            userId : isAuth().userId,
            citizenshipNo: Userinformation.citizenshipValue,
            phoneNumber: Userinformation.phonenumber,
            weight: Userinformation.weight,
            height: Userinformation.height,
            gender: Userinformation.gender,
            bloodGroup: Userinformation.bloodGroup,
            imagePath: Userinformation.imageUrl,
            municipalityId: parseInt(Userinformation.location.Locationid),
            streetAddress: Userinformation.location.Address,
            dateOfBirth: Userinformation.DOB
        }
     }).then((res) => console.log(res))
     .catch(error => console.log(error,"error from call"))
  }

  const onSubmit = (event) => {
    event.preventDefault();
    PostData();

    // const data = new FormData();
    // data.append("file", selectedFile);
    // data.append("upload_preset", "mi8kekc6");
    // data.append("cloud_name", "dwo9yx1r8");

    // fetch("https://api.cloudinary.com/v1_1/dwo9yx1r8/image/upload",
    // {
    //   method: "post",
    //   body:data,
    // })
    //   .then((res) => res.json())
    //   .then(data => setUserInformation({...Userinformation,imageUrl:data.url}))
    //   .then(() => PostData())
    //   .catch((error) => console.log(error));
  };

  return (
    <FormContext.Provider
      value={{
        selectedFile,
        previewImage,
        setSelectedFile,
        setPreviewImage,

        Userinformation,
        setUserInformation,

        formArray,
        formNo,
        setFormNo,

        next: next,
        prev: prev,
        onSubmit,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
