import React, { useState, useEffect, useRef } from 'react';
import { Typography, Badge, Avatar } from '@mui/material';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ProfileUploadRound = ({ onFileUpload, setFieldValue, setFieldTouched, error, touched }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadError, setUploadError] = useState("");
    const errorRef = useRef(null);
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (!file) return;

        const maxSize = 5 * 1024 * 1024;

        if (!file.type.startsWith("image/") && file.type !== "image/tiff") {
            setUploadError("Invalid file type. Please upload an image.");
            setSelectedFile(null);
            onFileUpload(null);
            setFieldValue("");
            setFieldTouched("ProfileImage", true);
            return;
        }

        if (file.size > maxSize) {
            setUploadError("File size must be less than 5MB.");
            setSelectedFile(null);
            onFileUpload(null);
            setFieldValue("ProfileImage", "");
            setFieldTouched("ProfileImage", true);
            return;
        }

        const preview = URL.createObjectURL(file);
        setSelectedFile({ file, preview });
        setUploadError("");
        onFileUpload(file);
        setFieldValue("ProfileImage", file);
        setFieldTouched("ProfileImage", false);
    };

    useEffect(() => {
        return () => {
            if (selectedFile) {
                URL.revokeObjectURL(selectedFile.preview);
            }
        };
    }, [selectedFile]);

    useEffect(() => {
        if ((error && touched) || uploadError) {
            window.scrollTo({ top: 0, behavior: "smooth" }); 
        }
    }, [error, touched, uploadError]);

    return (
        <>
            <div className="d-flex justify-content-center mt-2">
                <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                        <label htmlFor="upload-photo">
                            <CameraAltOutlinedIcon
                                sx={{
                                    width: "32px",
                                    height: "32px",
                                    backgroundColor: "#3f6fcf",
                                    borderRadius: "50%",
                                    padding: "5px",
                                    color: "#fff",
                                    cursor: "pointer",
                                }}
                            />
                            <input
                                type="file"
                                name='ProfileImage'
                                id="upload-photo"
                                className='d-none'
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </label>
                    }
                >
                    {selectedFile ? (
                        <Avatar
                            src={selectedFile.preview}
                            sx={{ width: 130, height: 130 }}
                        />
                    ) : (
                        <Avatar sx={{ width: 130, height: 130, backgroundColor: "#f5f5f5" }}>
                            <AccountCircleIcon sx={{ fontSize: 158, color: "#c4c4c4" }} />
                        </Avatar>
                    )}
                </Badge>

            </div>

            {(error && touched) || uploadError ? (
                <Typography color="error" variant="body2" className="mt-1 text-center fs-6">
                    {uploadError || error}
                </Typography>
            ) : null}
        </>


    );
};

export default ProfileUploadRound;
