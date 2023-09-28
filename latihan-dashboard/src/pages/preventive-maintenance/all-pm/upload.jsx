import React from "react";
import { UploadFileOutlined } from "@mui/icons-material";
import { Button, Box, styled } from "@mui/material";

function FileUpload() {
  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Handle file upload logic here
    }
  };

  const handleChooseFileClick = () => {
    // Membuka dialog pencarian file saat tombol "Choose File" diklik
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };

  const handleUploadClick = () => {
    // Handle upload logic here
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <div>
      <h2>File Upload</h2>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Pusatkan item secara horizontal
          textAlign: "center", // Pusatkan teks
        }}
      >
        <img src="../../../../src/assets/folder.png" />
        <Button
          sx={{
            backgroundColor: "#0073e6",
            color: "#fff",
            padding: "5px 10px", // Mengurangi ukuran tombol
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s",
            "&:hover": {
              backgroundColor: "#005bae",
            },
          }}
          component="label"
          variant="contained"
        >
          Choose File
          <VisuallyHiddenInput type="file" />
        </Button>
        <input type="file" id="fileInput" name="file" onChange={handleFileInputChange} style={{ display: "none" }} />
        <Button
          onClick={handleUploadClick}
          sx={{
            backgroundColor: "#009688",
            color: "#fff",
            padding: "5px 10px", // Mengurangi ukuran tombol
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s",
            marginTop: "8px", // Menambahkan margin atas
            "&:hover": {
              backgroundColor: "#007a66",
            },
          }}
        >
          Upload
        </Button>
      </Box>
      <hr
        sx={{
          width: "100%",
          border: "none",
          borderTop: "1px solid #ccc",
          margin: "20px 0",
        }}
      />
    </div>
  );
}

export default FileUpload;