import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="authentication-bg">
      <div className="account-pages pt-1 pt-sm-2 pb-1 pb-sm-2  ">
        <div className="container">
          <div className="row justify-content-center">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
