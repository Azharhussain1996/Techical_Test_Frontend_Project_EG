import React from 'react';
import { Alert, AlertTitle } from '@mui/material';

const SuccessAlert = ({ title, text }) => {
    return (
        <Alert severity="success">
            {title && (
                <AlertTitle>{Success}</AlertTitle>
            )}
            {text}
        </Alert>
    );
};

export default SuccessAlert;