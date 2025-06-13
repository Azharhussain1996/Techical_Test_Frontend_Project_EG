import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Checkbox,FormControlLabel  } from "@mui/material";

const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: 3,
    width: '1rem',
    height: '1rem',
    outline: '1px solid #93999d2e',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
        theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
            : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
    },
}));

const AdCheckedIcon = styled(BpIcon)({
    backgroundColor: '#eea546',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&::before': {
        display: 'block',
        width: '1rem',
        height: '1rem',
        backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""',
    },
});
const StyledFormControlLabel = styled(FormControlLabel)({
    '& .MuiTypography-root': {
        color: '#808080', 
        fontWeight: 'normal', 
        fontSize: '1rem',
        marginLeft: 0, // Removes margin between checkbox and label
        '& .MuiCheckbox-root': {
            marginRight: 0, // Removes right margin of the icon
        },
    },
});

function AdCheckbox({ label, ...props }) {
    return (
        <>
         <Checkbox
            sx={{
                '&:hover': { bgcolor: 'transparent' },
            }}
            disableRipple
            color="default"
            checkedIcon={<AdCheckedIcon />}
            icon={<BpIcon />}
            inputProps={{ 'aria-label': 'Checkbox demo' }}
            {...props}
        />

     
        </>
       
    );
}


export default AdCheckbox;

