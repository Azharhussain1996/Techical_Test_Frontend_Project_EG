import { Autocomplete } from "@mui/material";
import { styled } from "@mui/material/styles";
import { variables } from "assets/styles/variables";

const MuiAutoComplete = styled(Autocomplete)(({ theme }) => ({
    '& .MuiAutocomplete-tag': {
        margin: '2px',
    },
    "& .MuiOutlinedInput-root .MuiAutocomplete-input": {
        padding: "3px 4px 3px 5px",
      },
    '& .MuiAutocomplete-inputRoot': {
        padding: '1px',
        background: theme.palette.mode === 'light' ? '#fff' : ' #BBBDC0',
        '&:hover': {
            outline: 'none',
            borderColor: theme.palette.mode === 'light' ? ' #BBBDC0' : ' #2D3843', // Ensure no border color change on hover
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            outline: 'none',
            border: '1px solid #BBBDC0',
        },
    },
    '& .MuiInputBase-input': {
        fontSize: 16,
        fontFamily: "'poppins',sans-serif",
    },
    '& .MuiAutocomplete-endAdornment': {
        top: 'calc(50% - 0)',
    },
    '& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{
        color: '#1976d2',
    }
}));

export default MuiAutoComplete;
