import React from "react";
import { at } from "lodash";
import { useField } from "formik";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import AdCheckbox from './../../uielement/MCheckBoxFeild'

export default function CheckboxField(props) {
  const { label, ...rest } = props;
  const [field, meta, helper] = useField(props);
  const { setValue } = helper;

  function _renderHelperText() {
    const [touched, error] = at(meta, "touched", "error");
    if (touched && error) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  function _onChange(e) {
    setValue(e.target.checked);
  }
  const isChecked = field.value || false;
  
  return (
    <FormControl {...rest}>
      <FormControlLabel
        value={field.checked}
        checked={field.checked}
        control={
          <AdCheckbox {...field} checked={isChecked} onChange={_onChange} />
        }
        label={label}
        sx={{
          '& .MuiTypography-root': {
            color: 'rgba(0, 0, 0, 0.6)', 
            fontSize:'.91rem',
            marginleft:'0px'
          },
        }}
      />
      {_renderHelperText()}
    </FormControl>
  );
}
