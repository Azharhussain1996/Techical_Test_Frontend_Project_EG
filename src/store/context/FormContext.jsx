import React from "react";
import { data } from "react-router-dom";

const FormContext = React.createContext({
    userData: null,
    data: null,
    page: 0,
    numOfPages: 0,
    finalData: [],
    validation: {},
    setCurrentPage() { },
    setUserData() { },
    resetDataState() { },
    setFinalData() { },
    setValidation() { },
    validate() { },
    reloadMenu() { },
});

export default FormContext;