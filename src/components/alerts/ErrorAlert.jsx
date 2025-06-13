import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
const ErrorAlert = (props) => {
  const { msg } = props;
  // const [open, setOpen] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setOpen(false);
  //   }, 3000);
  // });

  return (
    // <Collapse in={open}>
    <Alert severity="error" {...props}>
      {msg}
    </Alert>
    // </Collapse>
  );
};

export default ErrorAlert;
