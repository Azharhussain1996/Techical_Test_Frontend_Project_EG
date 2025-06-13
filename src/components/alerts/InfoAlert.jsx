import React from "react";
import Alert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";

const InfoAlert = ({ title, msg, type = "info" }) => {
  return (
    <Alert
      severity={type}
      className="shadow-lg bg-white rounded "
    >
      {title && <AlertTitle className="fw-bold">{title}</AlertTitle>}
      {msg}
    </Alert>
  );
};

export default InfoAlert;
