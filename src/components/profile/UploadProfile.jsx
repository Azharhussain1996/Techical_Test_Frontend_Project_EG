import React, { useState, useEffect } from "react";
import { IconButton, Badge, Avatar } from "@mui/material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

const ProfileUpload = ({ onFileUpload }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files).map((file) => ({
      name: file.name,
      file,
      preview: URL.createObjectURL(file),
    }));
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);

    // setSelectedFiles((prevFiles) => {
    //   const updatedFiles = [...prevFiles, ...files];

    //   onFileUpload(updatedFiles);
    //   return updatedFiles;
    // });
  };

  useEffect(() => {
    onFileUpload?.(selectedFiles);
  }, [selectedFiles, onFileUpload]);

  const handleDelete = (index) => {
    // setSelectedFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
    onFileUpload(updatedFiles);
  };

  useEffect(() => {
    return () => {
      selectedFiles.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [selectedFiles]);

  return (
    <>
      <div className="border border-2 p-2 m-4 border-dashed">
        <div
          className={`d-flex ${
            selectedFiles.length > 0
              ? "justify-content-start align-items-center flex-wrap gap-3"
              : "justify-content-center align-items-center"
          }`}
        >
          {selectedFiles.length > 0 ? (
            <div className="d-flex justify-content-start align-items-center flex-wrap">
              {selectedFiles.map((file, index) => (
                <div
                  onChange={handleFileChange}
                  className="rounded-3 p-1 m-1  position-relative document-preview"
                  key={index}
                >
                  <img
                    src={file.preview}
                    alt="file Preview"
                    className="img-fluid file-preview "
                  />
                  <IconButton
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(index)}
                    className="close-icon"
                    sx={{
                      padding: 0.5,
                      position: "absolute",
                      top: -10,
                      right: -10,
                      backgroundColor: "#000",
                      "&:hover": {
                        backgroundColor: "#000",
                        color: "#fff",
                      },
                    }}
                  >
                    <CloseIcon className="text-white" />
                  </IconButton>
                </div>
              ))}
              <div className="d-flex justify-content-center align-items-center profile-pic">
                <label
                  htmlFor="contained-button-file"
                  className="mb-0 cursor-pointer"
                >
                  <input
                    accept="*/*"
                    className="d-none"
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={handleFileChange}
                  />
                  <CameraAltOutlinedIcon className="camera-icon" />
                  <div className="fw-bold mb-1">Upload</div>
                </label>
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-center align-items-center profile-pic">
              <label
                htmlFor="contained-button-file"
                className="mb-0 cursor-pointer"
              >
                <input
                  accept="*/*"
                  className="d-none"
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={handleFileChange}
                />
                <CameraAltOutlinedIcon className="camera-icon" />
                <div className="fw-bold mb-1">Upload</div>
              </label>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileUpload;
