import React from "react";
import { at } from "lodash";
import { useField } from "formik";
import { TextField } from "@mui/material";
// import InputMask from "react-input-mask";

export default function InputMaskField({ errorText, ...rest }) {
  const [field, meta, helpers] = useField(rest);
  const fieldValue = field.value !== null && field.value !== undefined ? field.value : "";

  function renderHelperText() {
    const [touched, error] = at(meta, "touched", "error");
    return touched && error ? error : "";
  }

  return (
    <>
    ""
      {/* <InputMask
        value={fieldValue}
        onChange={(event) => helpers.setValue(event.target.value)}
        onBlur={field.onBlur}
        {...rest}
      >
        {(inputProps) => (
          <TextField
            {...inputProps}
            type="text"
            variant="filled"
            InputLabelProps={{ shrink: Boolean(fieldValue) }}
            error={meta.touched && Boolean(meta.error)}
            helperText={renderHelperText()}
            {...rest}
          />
        )}
      </InputMask> */}
      {/* {errorText && <span className="text-danger">{errorText}</span>} */}
    </>
  );
}
