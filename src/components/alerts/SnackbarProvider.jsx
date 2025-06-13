import React from 'react';
import { SnackbarProvider } from 'notistack';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//     snackbar: {
//         backgroundColor: '#333', // Custom background color
//         color: '#fff',           // Custom text color
//         fontSize: '16px',        // Custom font size
//         borderRadius: '4px',     // Custom border radius
//         padding: '10px',         // Custom padding
//     },
//     closeButton: {
//         color: '#fff', // Custom color for the close button
//     },
// }));

const CustomizedSnackbarProvider = ({ children }) => {
    // const classes = useStyles();

    const notistackRef = React.createRef();

    const onClickDismiss = (key) => {
        notistackRef.current.closeSnackbar(key);
    };

    return (
        <SnackbarProvider
            maxSnack={4}
            ref={notistackRef}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            preventDuplicate
            // classes={{
            //     variantSuccess: classes.snackbar, // Custom styles for success variant
            //     variantError: classes.snackbar,   // Custom styles for error variant
            //     variantWarning: classes.snackbar, // Custom styles for warning variant
            //     variantInfo: classes.snackbar,    // Custom styles for info variant
            // }}
            action={(key) => (
                <IconButton
                    size="small"
                    aria-label="close"
                    // className={classes.closeButton}
                    onClick={() => onClickDismiss(key)}
                >
                    <CloseIcon fontSize="small" sx={{ color: "#fff" }} />
                </IconButton>
            )}
        >
            {children}
        </SnackbarProvider>
    );
};

export default CustomizedSnackbarProvider;
