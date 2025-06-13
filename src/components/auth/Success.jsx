import React from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Typography
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Success(props) {
  const { open, handleClose } = props;
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="p-4"
      >

        <DialogContent className='p-4'>
          <div className="content-top p-4 pb-0 d-flex justify-content-end">
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: '4px',
                top: '3px',
                color: ' #000',
                borderRadius: '50%',
                border: '1px solid #f2eaea',
                padding: '2px',
                '&:hover': {
                  color: '#000', 
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className="d-flex justify-content-center">
            <CheckCircleIcon sx={{ color: '#198754', fontSize: "7rem" }} />
          </div>
          <Typography variant="h5" align="center" sx={{ py: 2 }} className="fw-bold">
            Password Updated
          </Typography>
          <h6 className="fw-normal text-center mb-4 p-3">
            Your Password has been Changed successfully.<br />
            Use Your New Password to log in.
          </h6>
        </DialogContent>
      </Dialog >


    </>
  );
}
