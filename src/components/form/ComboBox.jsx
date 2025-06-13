import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import MTextField from "components/uielement/MTextField";
import CircularProgress from "@mui/material/CircularProgress";

const filter = createFilterOptions();

const ComboBox = ({ options, onChange, loading }) => {
    const [value, setValue] = useState({});
    return (
        <Autocomplete
            value={value}
            className='p-0'
            onChange={(event, newValue) => {
                let result = {};
                if (!newValue) {
                    setValue(null);
                    result = { cityId: 0, cityName: "" };
                } else if (typeof newValue === "string") {
                    setValue(newValue);
                    result = { cityId: 0, cityName: newValue };
                } else if (newValue.inputValue) {
                    setValue(newValue.inputValue);
                    result = { cityId: 0, cityName: newValue.inputValue };
                } else {
                    setValue(newValue);
                    result = { cityId: newValue.value, cityName: newValue.text };
                }
                onChange(result);
            }}
            filterOptions={(options, params) => {
                const safeOptions = options || [];
                const filtered = filter(safeOptions, params);
                const { inputValue } = params;

                const isExisting = safeOptions.some(
                    (option) => inputValue === option.text
                );
                if (inputValue !== "" && !isExisting) {
                    filtered.push({
                        inputValue,
                        text: `Add "${inputValue}"`,
                    });
                }

                return filtered;
            }}
            selectOnFocus
            clearOnBlur
            loading={loading}
            handleHomeEndKeys
            id="city-autocomplete"
            options={options || []}
            getOptionLabel={(option) => {
                if (typeof option === "string") {
                    return option;
                }
                if (option.inputValue) {
                    return option.inputValue;
                }
                return option.text || '';
            }}
            renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                    <li key={key} {...optionProps}>
                        {option.text || ""}
                    </li>
                );
            }}
            sx={{
                '& .MuiOutlinedInput-root': {
                    padding: '0 !important',
                },
            }}
            freeSolo
            renderInput={(params) =>
                <TextField
                    {...params}
                    variant="outlined"
                    InputLabelProps={{
                        shrink: false,
                    }}
                    className="form-control custom-textfield bg-opacity-50"
                    sx={MTextField}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading ? (
                                    <CircularProgress color="inherit" size={20} className='me-2'/>
                                ) : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />}
        />
    );
};

// const ComboBox = ({ options, value, onChange }) => {
//     const [localValue, setLocalValue] = useState(value || "");

//     useEffect(() => {
//         setLocalValue(value?.cityName || "");
//     }, [value]);

//     return (
//         <Autocomplete
//             value={localValue}
//             className="p-0"
//             onChange={(event, newValue) => {
//                 let result = {};
//                 if (!newValue) {
//                     setLocalValue(null);
//                     result = { cityId: 0, cityName: "" };
//                 } else if (typeof newValue === "string") {
//                     setLocalValue(newValue);
//                     result = { cityId: 0, cityName: newValue };
//                 } else if (newValue.inputValue) {
//                     setLocalValue(newValue.inputValue);
//                     result = { cityId: 0, cityName: newValue.inputValue };
//                 } else {
//                     setLocalValue(newValue.text);
//                     result = { cityId: newValue.value, cityName: newValue.text };
//                 }
//                 onChange(result);
//             }}
//             filterOptions={(options, params) => {
//                 const safeOptions = options || [];
//                 const filtered = filter(safeOptions, params);
//                 const { inputValue } = params;

//                 const isExisting = safeOptions.some(
//                     (option) => inputValue === option.text
//                 );
//                 if (inputValue !== "" && !isExisting) {
//                     filtered.push({
//                         inputValue,
//                         text: `Add "${inputValue}"`,
//                     });
//                 }

//                 return filtered;
//             }}
//             selectOnFocus
//             clearOnBlur
//             handleHomeEndKeys
//             id="city-autocomplete"
//             options={options || []}
//             getOptionLabel={(option) => {
//                 if (typeof option === "string") {
//                     return option;
//                 }
//                 if (option.inputValue) {
//                     return option.inputValue;
//                 }
//                 return option.text || "";
//             }}
//             renderOption={(props, option) => (
//                 <li {...props}>{option.text || ""}</li>
//             )}
//             sx={{
//                 "& .MuiOutlinedInput-root": {
//                     padding: "0 !important",
//                 },
//             }}
//             freeSolo
//             renderInput={(params) => (
//                 <TextField
//                     {...params}
//                     variant="outlined"
//                     InputLabelProps={{ shrink: false }}
//                     className="form-control custom-textfield bg-opacity-50"
//                     sx={MTextField}
//                 />
//             )}
//         />
//     );
// };
export default ComboBox;


