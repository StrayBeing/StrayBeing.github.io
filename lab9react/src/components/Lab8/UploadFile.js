import React, { useState } from "react";

function UploadFile({ setProfile }) {
  const [uploadStatus, setUploadStatus] = useState("");

  const uploadFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          setProfile((prevProfile) => ({ ...prevProfile, ...data }));
          setUploadStatus("File uploaded successfully!");
        } catch (error) {
          console.error("Error parsing file:", error);
          setUploadStatus("Error parsing file!");
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".json"
        onChange={uploadFile}
        style={{ margin: "10px 0" }}
      />
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
}

export default UploadFile;