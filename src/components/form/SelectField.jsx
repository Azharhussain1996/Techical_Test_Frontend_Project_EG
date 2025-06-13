import React from "react";
import { at } from "lodash";
import { useField } from "formik";
import {
  FormHelperText,
  Typography,
  CircularProgress
} from "@mui/material";
import MFormControl from "components/uielement/MFormControl";
import MInputLabel from "components/uielement/MInputLabel";
import { StyledSelect, StyledMenuItem } from 'components/uielement/MSelectFeild';

function SelectField(props) {
  const { label, data, onChange, selected, helperText, isLoading = false, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, "touched", "error");
  const isError = touched && error && true;
  function _renderHelperText() {
    if (isError) {
      return <FormHelperText error>{error}</FormHelperText>;
    }
  }

  const handleChange = (event) => {
    field.onChange(event);
    if (onChange) {
      onChange(event);
    };
  }
  return (
    <>
      <MFormControl variant="outlined" {...rest} error={!!isError} fullWidth>
        <MInputLabel sx={{
          '& .MuiFormLabel-asterisk': {
            color: 'red',
          }
        }} className="form-label">{label}</MInputLabel>

        <StyledSelect
          {...field}
          label={label}
          value={selectedValue || ""}
          displayEmpty
          fullWidth
          {...rest}
          onChange={handleChange}
        >

          <StyledMenuItem value="0" disabled>
            Select Any Field
          </StyledMenuItem>
          {isLoading ? (
            <StyledMenuItem disabled className="d-flex justify-content-center">
              <CircularProgress size={20} />
            </StyledMenuItem>
          ) : (
            data && data.length > 0 ? (
              data.map((item, index) => (
                <StyledMenuItem key={index + 1} value={item.value || item.Value} >
                  {item.text || item.Text}
                </StyledMenuItem>
              ))
            ) : (
              <Typography className="text-center fw-bold" variant="body1">
                No record Found
              </Typography>
            )
          )}

        </StyledSelect>

        {_renderHelperText()}
      </MFormControl >
    </>
  );
}


export default SelectField;
