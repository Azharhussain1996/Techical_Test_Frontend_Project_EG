import React, { useEffect, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

const SnackbarAlert = ({ msg, success }) => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true)
    }, []);

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };

    return (
        <>
            <Snackbar
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <div className='alert alert-success' onClose={handleClose} variant="filled" severity={success ? "success" : "error"} sx={{ width: '100%' }}>
                    {msg}
                </div>
            </Snackbar>
        </>
    );
};

export default SnackbarAlert;