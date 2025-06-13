import { styled, alpha } from '@mui/material/styles';

const MFormControl = styled("div")(({ theme }) => ({
    '& .MuiInputBase-input': {
        fontSize: '.875rem',
        fontFamily: 'inherit !important',
        '&:focus': {
            borderColor: '#85B7F2',
        },
    },
    '& .Mui-focused': {
        color: 'inherit',
    },
    '& .MuiInput-underline:before': {
        borderBottom: 'none',
    },
    '& .MuiInput-underline:after': {
        borderBottom: 'none',
    },
    '& .MuiInput-underline:hover:before': {
        borderBottom: 'none',
    },
}));

export default MFormControl