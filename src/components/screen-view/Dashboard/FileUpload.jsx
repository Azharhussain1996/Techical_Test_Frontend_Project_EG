import React, { useState } from 'react';
import { IconButton, Grid, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DescriptionIcon from '@mui/icons-material/Description'; // For docx files
import DeleteIcon from '@mui/icons-material/Delete';
import FolderZipIcon from '@mui/icons-material/FolderZip';

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    // const files = Array.from(event.target.files).map(file => ({ name: file.name, file, preview: URL.createObjectURL(file) }));
    // setSelectedFiles(prevFiles => [...prevFiles, ...files]);
    const files = Array.from(event.target.files).map(file => {
      let preview;
      if (file.type.startsWith("image/")) {
        return null; 
      }
      if (file.type === "application/pdf") {
        preview = <PictureAsPdfIcon style={{ fontSize: '50px', color: 'red' }} />;
      } else if (file.name.endsWith(".docx")) {
        preview = <DescriptionIcon style={{ fontSize: '50px', color: 'blue' }} />;
      }
      else if (file.name.endsWith(".zip")) {
        preview = <FolderZipIcon style={{ fontSize: '50px', color: '#f0b11b' }} />
      }

      return { name: file.name, file, preview };
    });

    const filteredFiles = files.filter((file) => file !== null);
    setSelectedFiles((prevFiles) => [...prevFiles, ...filteredFiles]);
    // setSelectedFiles(prevFiles => [...prevFiles, ...files]);
  };

  const handleDelete = (index) => {
    // setSelectedFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
  };

  return (
    <>
      <Grid item xs={12}>
        <div className="" style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center', margin: '0 auto', backgroundColor: '#f9f9f9' }}>
          <h5 className='mb-3'> Drag and Drop Files here</h5>
          {selectedFiles.length > 0 ? (
            <div  >
              {selectedFiles.map((file, index) => (
                <div style={{
                  fontWeight: 'bold', marginBottom: '5px', background: '#e8e9ea', margin: '0 4px', position: "relative",
                  boxShadow: 'inset 1px 2px 13px 7px #d8dadd', border: '1px solid rgb(227, 208, 208)', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                }} key={index} className="mb-2 d-flex justify-content-start">
                  {typeof file.preview === "string" ? (
                    <img
                      loading="lazy"
                      src={file.preview}
                      alt="file Preview"
                      className='img-fluid'
                      style={{ width: '50px', height: "50px", padding: "5px" }}
                    />
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 0, paddingBottom: 0 }}>
                      {file.preview}
                    </div>
                  )}
                  <Typography className='ms-2'>{file.name}</Typography>
                  <IconButton
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(index)}
                    sx={{
                      padding: 1,
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: 'red'
                      },
                    }}
                    style={{
                      position: 'absolute',
                      top: '11px',
                      right: '8px',
                      padding: '1px',
                    }}
                  >
                    <DeleteIcon style={{ color: "red" }} />
                  </IconButton>
                </div>
              ))}
              <label htmlFor="contained-button-file" className='mb-0' style={{ cursor: 'pointer' }}>
                <input
                  style={{ display: 'none' }}
                  id="contained-button-file"
                  multiple
                  type="file"
                  accept=".pdf,.txt,.doc,.docx,.xlsx,.csv"
                  onChange={handleFileChange}
                />
                <div style={{
                  fontWeight: 'bold', background: '#e8e9ea',
                  padding: '5px', boxShadow: 'inset 1px 2px 13px 7px #d8dadd', border: '1px solid rgb(227, 208, 208)'
                }}>
                  <AddIcon style={{ fontSize: '50px', }} />
                </div>
              </label>
            </div>
          )
            :
            <div className='d-flex justify-content-center' >
              <label htmlFor="contained-button-file" className='mb-0' style={{ cursor: 'pointer' }}>
                <input
                  accept="*/*"
                  style={{ display: 'none' }}
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={handleFileChange}
                />
                <CloudUploadIcon style={{ fontSize: '50px', marginBottom: '10px', color: 'rgb(253, 121, 81)' }} />
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Upload Files</div>
              </label>

            </div>
          }
        </div >
      </Grid >

    </>
  );
};

export default FileUpload;
