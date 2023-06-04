// import React, { useState } from 'react';

// const FileInput = () => {
//   const [files, setFiles] = useState([]);

//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     setFiles([...files, ...selectedFiles]);
//   };

//   const handleRemoveFile = (index) => {
//     const newFiles = [...files];
//     newFiles.splice(index, 1);
//     setFiles(newFiles);
//   };

//   return (
//     <div>
//       <input type="file" multiple onChange={handleFileChange} />
//       <ul>
//         {files.map((file, index) => (
//           <li key={index}>
//             {file.name}
//             <button onClick={() => handleRemoveFile(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FileInput;


import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleAddFiles = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append('files', file);
      });

      // Make an API request to upload the files using formData
      const response = await axios.post(`${process.env.REACT_APP_API}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Files uploaded:', response.data);
    } catch (error) {
      console.log('Error uploading files:', error);
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleAddFiles} />
      <button onClick={handleSubmit}>Upload</button>
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            {file.name}
            <button onClick={() => handleRemoveFile(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileUpload;
