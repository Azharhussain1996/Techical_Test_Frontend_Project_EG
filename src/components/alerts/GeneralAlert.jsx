import React from "react";
import { Alert } from "@mui/material";

const GeneralAlert = ({ msg, successful, props }) => {
  return (
    <Alert {...props} severity={successful}>
      {msg}
    </Alert>
  );
};

export default GeneralAlert;
