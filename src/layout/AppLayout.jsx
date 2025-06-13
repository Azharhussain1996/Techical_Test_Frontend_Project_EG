import React from "react";
import ThemeLayout from "./ThemeLayout";
import AppHeader from "./AppHeader";
import { Outlet } from "react-router-dom";
import AppFooter from "./AppFooter";
import AppSideBar from "./AppSideBar";

function AppLayout() {
  return (
    <>
        <ThemeLayout />
        <div className="wrapper">
          <AppHeader />
          <div className="main-nav">
            <AppSideBar />
          </div>
          <div className="page-content">
            <div className="container-fluid ">
              <Outlet />
            </div>
            <AppFooter />
          </div>
        </div>
    </>
  );
}

export default AppLayout;
