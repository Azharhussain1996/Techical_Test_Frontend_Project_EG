import React, { createContext, useState, useEffect, useMemo } from "react";
import { useErrorHandler } from "global/Error-Handler";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { AESDecrypt } from "global/Crypto-Helper";
import GLOBAL from "global/Global-Variables";

export const CustomerFileContext = createContext();

export const CustomerFileProvider = ({ children }) => {
  const [fileData, setFileData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { handleError } = useErrorHandler();
  const [triggerReload, setTriggerReload] = useState(false);

  const newRecord = (newRecord) => {
    setFileData((prev) => [...prev, newRecord]);
  };

  const access_token = useMemo(
    () =>
      JSON.parse(
        AESDecrypt(decodeURIComponent(Cookies.get(GLOBAL.ADMIN_ACCESS_TOKEN)))
      ),
    []
  );

  const user_id = useMemo(() => jwtDecode(access_token), [access_token]);

  const reloadMenu = () => {
    setTriggerReload((prev) => !prev);
  };

  // useEffect(() => {
  //     FileRecord()
  // }, [triggerReload]);

  return (
    <CustomerFileContext.Provider
      value={{ fileData, loading, reloadMenu, newRecord }}
    >
      {!loading && children}
    </CustomerFileContext.Provider>
  );
};
