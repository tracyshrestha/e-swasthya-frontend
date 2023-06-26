import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../../Store/UserState"
import { useNavigate } from "react-router-dom"; 


export const FormContext = createContext();

const FormContextProvider = (props) => {
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0]);
  const { isAuth, getStoredCookie ,onLogin} = useContext(AuthContext);
  const navitage = useNavigate();

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
    error: false,
    message: '',
    loading: false,
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
      method: "POST",
      url: `${process.env.REACT_APP_API}api/patient/save`,
      headers: {
        'Authorization': `Bearer ${getStoredCookie("token")}`,
      },
      data: {
        userId: isAuth().userId,
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
    }).then((res) => {
      setUserInformation((prevState) => {
        return { ...prevState, message: "User information saved sucessfully!", loading: false, error: false }
      })
      setUserInformation((prevState) => { return { ...prevState, loading: false } })
      onLogin(res);
      navitage("/");
    })
      .catch(error => {
        console.log(error);
        setUserInformation((prevState) => {
          return { ...prevState, message: error?.response?.data?.data[0], error: true }
        })
        setUserInformation((prevState) => { return { ...prevState, loading: false } })
      });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setUserInformation((prevState) => { return { ...prevState, loading: true } })

    const data = new FormData();
    data.append("file", selectedFile);
    data.append("upload_preset", "mi8kekc6");
    data.append("cloud_name", "dwo9yx1r8");

    axios("https://api.cloudinary.com/v1_1/dwo9yx1r8/image/upload", {
      method: "post",
      data: data
    }).then((res) => {
      setUserInformation((prevState) => {
        return { ...prevState, imageUrl: res?.data?.url }
      })
    }).then(() => PostData())
      .catch((error) => {
        if (error) {
          setUserInformation((prevState) => {
            return { ...prevState, message: "Please check the form.", error: true }
          })
          setUserInformation((prevState) => { return { ...prevState, loading: false } })
        }
      })
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
