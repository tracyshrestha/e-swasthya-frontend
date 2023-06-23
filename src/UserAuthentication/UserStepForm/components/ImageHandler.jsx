import { useContext, useState } from "react";
import camera from "../../../assets/camera.png";
import { FormContext } from "./formState/State";

const ImageHandler = () => {

    const {selectedFile,setSelectedFile,previewImage,setPreviewImage} = useContext(FormContext);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
 
        setSelectedFile(file);
        const reader = new FileReader(file);
        reader.onloadend = () => {
            setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <>
            <div className="lg:mt-[-2rem] flex justify-start items-center pb-6">
                {previewImage ? (
                    <img
                        src={previewImage}
                        value={selectedFile}
                        alt="Selected Image"
                        class="self-center h-[120px] p-5   mt-0 sm:mt-10 border border-gray-300  rounded-full"
                    />
                ) : (
                    <img
                        src={camera}
                        alt="Placeholder Image"
                        class="self-center h-[120px] p-5 mt-0 sm:mt-10 border border-gray-300  rounded-full"
                    />
                )}
            </div>
            <label htmlFor="batch" className='mt-0 ml-2 sm:mt-10'>Upload Photo</label>
            <input
                id="uploadInput"
                multiple={false}
                onChange={(event) => {
                    handleFileChange(event);
                }}
                accept="image/*"
                className="text-gray-900 block w-full lg:w-[400px] p-1"
                type="file"
                name="selectedFile"
            />
        </>
    )
}

export default ImageHandler;