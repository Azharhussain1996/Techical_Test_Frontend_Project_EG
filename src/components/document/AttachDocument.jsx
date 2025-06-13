import React, { useState, useRef } from "react";
import FolderZipIcon from "@mui/icons-material/FolderZip";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography } from "@mui/material";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { documentAttornayType, documentOwnerType, ownerType } from "dummy-data/DocumentType";

const AttachmentDocument = () => {
    const fileInputRef = useRef(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [availableDocumentTypes, setAvailableDocumentTypes] = useState(
        documentOwnerType.map((doc) => ({ ...doc, selected: false }))
    );
    const [ownerTypeSelected, setOwnerTypeSelected] = useState("");
    const [progress, setProgress] = useState(0);
    const [buttonText, setButtonText] = useState("Upload");

    const validationSchema = Yup.object().shape({
        documentType: Yup.string().required("Document type is required"),
        ownerType: Yup.string().required("Owner type is required"),
    });

    const handleButtonClick = (documentType) => {
        if (!documentType) {
            alert("Please select a document type before uploading.");
            return;
        }
        setAvailableDocumentTypes((prev) =>
            prev.map((doc) =>
              doc.value === parseInt(documentType, 10) ? { ...doc, selected: true } : doc
            )
          );
        fileInputRef.current.click();
    };

    const handleFileChange = (event, documentType, ownerType) => {
        const files = Array.from(event.target.files);
        const fileDetails = files.map((file) => ({
            name: file.name,
            // documentType,
            documentType: parseInt(documentType, 10),
            ownerType,
            file,
        }));
        setUploadedFiles((prevFiles) => [...prevFiles, ...fileDetails]);

        // simulateFileUpload(fileDetails);
        // simulateFileUpload((prevFiles) => [...prevFiles, ...fileDetails]);

        setAvailableDocumentTypes((prev) =>
            prev.map((doc) =>
                doc.value == documentType ? { ...doc, selected: true } : doc
            )
        );
        // setAvailableDocumentTypes((prev) =>
        //     prev.filter((type) => type.value !== documentType)
        // );
    };

    const simulateFileUpload = (files) => {
        let progressValue = 0;
        setButtonText("Uploading...");

        const interval = setInterval(() => {
            progressValue += 10;
            setProgress(progressValue);
            if (progressValue >= 100) {
                clearInterval(interval);
                setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
                setButtonText("Upload");
            }
        }, 300);
    };

    const handleDelete = (documentType) => {
        setUploadedFiles((prevFiles) =>
            prevFiles.filter((file) => file.documentType !== documentType)
        );
        setAvailableDocumentTypes((prev) =>
            prev.map((doc) =>
                doc.value === documentType ? { ...doc, selected: false } : doc
            )
        );
    };

    const handleSelectChange = (e) => {
        // const selectedValue = e.target.value;
        const selectedValue = parseInt(e.target.value, 10);
      
        // Update the `selected` property for the selected option
        setAvailableDocumentTypes((prev) =>
          prev.map((doc) =>
            doc.value === parseInt(selectedValue) ? { ...doc, selected: true } : doc
          )
        );
      };

    return (
        <div className="col-xl-12">
            <div className="card border-0">
                <div className="card-header px-1 shadow-0 d-flex justify-content-between align-items-center">
                    <h4 className="card-title">File Attachments</h4>
                </div>
                <div className="card-body p-0 pb-2">
                    <Formik
                        initialValues={{ documentType: "", ownerType: 1 }}
                        validationSchema={validationSchema}
                    >
                        {({ values, setFieldValue }) => (
                            <Form>
                                <div className="px-2 pt-2 row">
                                    {/* Owner Type Field */}
                                    <div className="form-group mb-0 col-6">
                                        <label>
                                            Applied By <span className="text-danger"> *</span>
                                        </label>
                                        <Field
                                            as="select"
                                            name="ownerType"
                                            className="form-control"
                                            onChange={(e) => {
                                                setOwnerTypeSelected(e.target.value);
                                                setFieldValue("ownerType", e.target.value);
                                            }}
                                        >
                                            <option value="">Select Owner Type</option>
                                            {ownerType.map((type) => (
                                                <option key={type.value} value={type.value}>
                                                    {type.text}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage
                                            name="ownerType"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </div>

                                    {/* Document Type Field */}
                                    <div className="form-group mb-0 col-6">
                                        <label>
                                            Document Type <span  className="text-danger"> *</span>
                                        </label>
                                        <div className="d-flex">
                                            <Field
                                                as="select"
                                                name="documentType"
                                                className="form-control"
                                                onChange={(e) => {
                                                    setFieldValue("documentType", e.target.value); // Set Formik value
                                                    handleSelectChange(e); // Update the `selected` property
                                                }}
                                            >
                                                <option value="">Select Document Type</option>
                                                {/* {availableDocumentTypes.map((type) => (
                                                    <option key={type.value} value={type.value}>
                                                        {type.text}
                                                    </option>
                                                ))} */}


                                                {availableDocumentTypes.filter((doc) => !doc.selected)
                                                    .map((type, index) => {
                                                        return (
                                                            <option key={index} value={type.value}>
                                                                {type.text}
                                                            </option>
                                                        )
                                                    }
                                                    )}
                                            </Field>
                                            <button
                                                type="button"
                                                className="btn btn-sm bg-success text-white ms-2"
                                                onClick={() => handleButtonClick(values.documentType)}
                                            >
                                                <input
                                                    className="d-none"
                                                    type="file"
                                                    multiple
                                                    ref={fileInputRef}
                                                    accept=".pdf,.txt,.doc,.docx,.xlsx,.csv"
                                                    onChange={(e) =>
                                                        handleFileChange(e, values.documentType, values.ownerType)
                                                    }
                                                />
                                                {buttonText}
                                            </button>
                                        </div>
                                        <ErrorMessage
                                            name="documentType"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </div>
                                </div>

                                {progress > 0 && (
                                    <div className="px-2 pt-2">
                                        <div className="progress progress-xs">
                                            <div
                                                className="progress-bar bg-success"
                                                role="progressbar "
                                                style={{ width: `${progress}%` }}
                                                aria-valuenow={progress}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Uploaded Files Table */}
                                <div className="table-responsive px-2 mt-2">
                                    <table className="table mb-0">
                                        <thead className="bg-info bg-gradient">
                                            <tr>
                                                <th className="text-white py-2">Document Name</th>
                                                <th className="text-white py-2">Document Type</th>
                                                <th className="text-white py-2">Owner Type</th>
                                                <th className="text-white py-2">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {uploadedFiles.map((file, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            <Typography
                                                                variant="body2"
                                                                className="text-primary d-inline-flex align-items-center"
                                                            >
                                                                <FolderZipIcon className="me-2" />
                                                                {file.name}
                                                            </Typography>
                                                        </td>
                                                        <td>
                                                            {
                                                                documentOwnerType.find(
                                                                    (type) => type.value == file.documentType
                                                                )?.text
                                                            }

                                                        </td>
                                                        <td>
                                                            {ownerType.find(
                                                                (type) => type.value == file.ownerType
                                                            )?.text
                                                            }
                                                        </td>
                                                        <td>
                                                            <DeleteIcon
                                                                sx={{ color: "rgb(255, 91, 91)", cursor: "pointer" }}
                                                                onClick={() => handleDelete(file.documentType)}
                                                            />
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default AttachmentDocument;
