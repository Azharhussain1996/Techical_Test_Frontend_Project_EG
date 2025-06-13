export const MTextField = {
    "& .MuiOutlinedInput-root": {
        borderColor: "#ccc", // Initial border color
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "grey !important", // Border color on hover
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent", // Border color on focus
        },
        "&.Mui-focused:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent !important", // Border color on hover when focused
        },
    },
    "& .MuiInputBase-input": {
        fontSize: "0.875rem",
        fontFamily: "inherit !important",
        padding: "9px 14px",
        
    },
};
export default MTextField;
