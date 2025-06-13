import React from "react";
import { Alert, AlertTitle } from "@mui/material";

const ErrorValidationAlert = ({ errors }) => {
  return (
    <>
      <Alert severity="error">
        <AlertTitle className="mb-0">{errors}</AlertTitle>
      </Alert>
      {/* {Object.keys(errors).length > 0 &&
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    <ul>
                        {Object.keys(errors).map((key, index) => 
                            <li key={index}>{errors[key][0]}</li>
                         )}
                    </ul>
                </Alert>
            } */}
    </>
  );
};

export default ErrorValidationAlert;
