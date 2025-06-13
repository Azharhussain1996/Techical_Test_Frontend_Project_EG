import React, { forwardRef } from "react";
import InputBase from '@mui/material/InputBase';
import { styled } from "@mui/material/styles";


const StyledInputBase  = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(2),
        color: "#000",
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
        border: "1px solid #BBBDC0",
        fontSize: 16,
        width: '100%',
        padding: '5px 12px',
        fontFamily: "'Poppins', sans-serif !important",
        transition: theme.transitions.create([
            'background-color',
            'box-shadow',
            'border-color', 
        ]),
        '&:focus': {
            border:'1px solid #BBBDC0',
            outline: 'none',
        },
        '&::placeholder': {
            color: '#888',
            opacity: 1,
        },
    },
    '&:focus .MuiInputBase-input::placeholder': {
        color: '#888',
        opacity: 1,
    },
    '&:hover .MuiInputBase-input': {
        borderColor: '#2D3843', // Change border color on focus
    },
}));



const MuiInputFeild = forwardRef((props, ref) => (
    <StyledInputBase
        ref={ref}
        {...props} // Ensures InputProps is passed correctly
    />
));

export default MuiInputFeild;
