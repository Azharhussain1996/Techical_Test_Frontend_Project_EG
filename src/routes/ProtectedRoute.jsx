
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import GLOBAL from "global/Global-Variables";
import { CustomerFileProvider } from "components/context/CustomerFileContext";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserToken = () => {
    const userToken = Cookies.get(GLOBAL.ACCESS_TOKEN);
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      return navigate("/");
    }
    setIsLoggedIn(true);
  };
  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);
  return <>{isLoggedIn ? 
  <CustomerFileProvider>
    {children}
  </CustomerFileProvider> : null}</>;
};
export default ProtectedRoute;
