import React from 'react';
import { TextField, MenuItem } from '@mui/material';
import MuiAutoComplete from 'components/uielement/MAutoComplete';
import MuiSkeleton from 'components/skeletons/MuiSkeleton';
import { ErrorMessage } from "formik";

const CustomMuiAutoComplete = ({
  name,
  label,
  placeholder,
  options = [],
  loading = false,
  disableClearable = false,
  multiple = false,
  value,
  onChange,
  getOptionLabel = (option) => option?.Text || "",
  isOptionEqualToValue = (option, value) => option.Text === value.Text,
}) => {
  return (
    <>
      <MuiAutoComplete
        multiple={multiple}
        id={name}
        loading={loading}
        value={value || []}
        noOptionsText="Record not found!"
        disableClearable={disableClearable}
        options={loading ? [] : [{ Text: "Select Any Field" }, ...options]}
        getOptionLabel={getOptionLabel}
        isOptionEqualToValue={isOptionEqualToValue}
        onChange={(event, newValue) => onChange(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            name={name}
            placeholder={placeholder}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading && <CircularProgress size="20px" />}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        renderOption={(props, option) => {
          const { key, ...restProps } = props; 
          return (
            <MenuItem {...restProps} key={key} disabled={option.Text === "Select Any Field"}>
              {option.Text}
            </MenuItem>
          );
        }}
        ChipProps={{
          size: "small",
          style: {
            height: 24,
            fontSize: 12,
            borderRadius: 50,
          },
        }}
      />
      <ErrorMessage name={name} component="p" style={{ color: "red", fontSize: ".8rem" }} />
    </>
  );
};

export default CustomMuiAutoComplete;


