import React from "react";

import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import MRadioField from "../uielement/MRadioField";



const renderOptions = (options,disabled = false) => {
  return options.map((option, index) => (
    <FormControlLabel
      key={index}
      value={option.value}
      control={<MRadioField size="small" />}
      disabled={disabled}
      label={  <span style={{ fontSize: "0.85rem" }}>{option.text}</span>}
    />
  ));
};

const RadioGroupField = ({
  field,
  form: { touched, errors },
  label,
  options,
  children,
  ...props
}) => {
  const isError = touched[field.name] && errors[field.name];
  return (
    <React.Fragment>
      <FormControl component="fieldset" error={!!isError} fullWidth>
        {/* {label && <FormLabel component="legend">{label}</FormLabel>} */}
        <RadioGroup {...field} {...props} row >
          {options ? renderOptions(options,props.disabled) : children}
        </RadioGroup>
        {isError && <span className="text-danger">{errors[field.name]}</span>}
      </FormControl>
    </React.Fragment>
  );
};

export default RadioGroupField;
