import React from 'react';
import Alert from '@mui/material/Alert';
import { AlertTitle } from '@mui/material';

const WarningAlert = ({ title, msg }) => {
    return (
        <Alert severity="warning">
            {title &&
                <AlertTitle>{title}</AlertTitle>
            }
            {msg}
        </Alert>
    );
};

export default WarningAlert;