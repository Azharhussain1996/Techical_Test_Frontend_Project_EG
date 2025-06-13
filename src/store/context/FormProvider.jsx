import React, { useState, useEffect } from "react";
import FormContext from "./FormContext";
import { useNavigate, useParams } from "react-router-dom";
import { useErrorHandler } from "global/Error-Handler";
import userService from "services/userService";
import { AESDecrypt } from "global/Crypto-Helper";
import { useSnackbar } from "notistack";
import Cookies from "js-cookie";
import GLOBAL from "global/Global-Variables";

function FormProvider({ children }) {
  const [data, setData] = useState();
  const { RegistrationNo } = useParams();
  const decryptedvKey = AESDecrypt(decodeURIComponent(RegistrationNo));
  const vkey = JSON.parse(decryptedvKey);
  const [triggerReload, setTriggerReload] = useState(false);
  const [page, setPage] = useState(1);
  const [finalData, setFinalData] = useState([]);
  const [userData, setUserData] = useState([]);
  const { handleError } = useErrorHandler();
  const { enqueueSnackbar } = useSnackbar();
  const [doc, setDocument] = useState([]);
  const navigate = useNavigate();
  const [stepNo, setStepNo] = useState([]);
  // const [validation, setValidation] = useState(defaultValidationState);
  const [loading, setLoading] = useState({
    customer: false,
    status: false,
    document: false,
    prevSchedule: false,
  });

  const reloadMenu = () => {
    setTriggerReload((prev) => !prev);
  };

  const validate = (a) => {
    return Object.values(a).reduce((sum, next) => sum && next, true);
  };

  const resetDataState = () => {
    setUserData(defaultDataState);

    // setValidation(defaultValidationState);
  };

  const setCurrentPage = (val) => {
    setPage(val);
  };

  const initialValue = {
    userData,
    data,
    page,
    numOfPages: stepNo,
    finalData,
    loading,
    setLoading,
    // validation,
    setCurrentPage,
    setUserData,
    resetDataState,
    setFinalData,
    // setValidation,
    reloadMenu,
    validate,
  };

  return (
    <FormContext.Provider value={initialValue}>{children}</FormContext.Provider>
  );
}

export default FormProvider;
