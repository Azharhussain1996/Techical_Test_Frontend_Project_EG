import { styled } from '@mui/material/styles';
import { Select, MenuItem } from '@mui/material';

const StyledSelect = styled(Select)(({ theme }) => ({
    backgroundColor: '#fff', // Background color
    borderRadius: '4px', // Rounded corners
    paddingX: '12px !important',
    margin: 0,
    border: 'transparent',
    '& .MuiOutlinedInput-notchedOutline': {
        border: '1px solid rgb(196, 196, 196)', 
    },
    '& .MuiOutlinedInput-root': {
        '&:hover .MuiOutlinedInput-notchedOutline': {
            border: '1px solid grey', 
        },
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border:  '1px solidrgb(11, 41, 71)', 
    },
    '& .MuiSelect-select': {
        fontSize: '.875rem',
        fontFamily: 'inherit !important',
        padding: '6px 13px !important',
        color: "#a1a1a1",
    },
    '&:hover': {
        backgroundColor: '#fff !important', // Hover background
        // border: '1px solid #e1e7ed', // Ensures no outline border is rendered
    },
    '&.Mui-focused': {
        backgroundColor: '#fff !important', // Hover background
        border: '1px solid #e1e7ed !important', // Ensures no outline border is rendered
    },

}));




const StyledMenuItem = styled(MenuItem)({
    // fontSize: '.875rem',
    fontFamily: 'inherit',
    // '&:hover': {
    //     backgroundColor: 'grey', // Hover effect
    // },
});

export { StyledSelect, StyledMenuItem };
