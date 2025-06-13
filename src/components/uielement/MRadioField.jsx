import { styled } from '@mui/material/styles';
import { Radio } from "@mui/material";

const MRadioField = styled(Radio)(({ theme }) => ({
    color: "#5d7182",
    "&.Mui-checked": {
        // color: "#ec4c1b",
    },
}));



export default MRadioField