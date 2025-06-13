import React from "react";
import { NavLink } from "react-router-dom";

const linkStyle = {
    textDecoration: "none",
    color: "rgb(32, 43, 87)",
    borderRadius: "0px",
    fontSize: "16px",
    fontWeight: "500",
};

export const RenderPages = ({ menuData, subModuleCode }) => {
    return menuData
        .filter((page) => page.ParentCode.substring(0, 17) === subModuleCode && page.MenuNature === 4)
        .map((page) => (
            <div key={page.ChildCode} className="dropdown-subitem dropdown-item p-0 m-0">
                <NavLink
                    className="nav-link routelink"
                    to={page.PageURL || ""}
                    title={page.Title}
                    style={linkStyle}
                >
                    {page.Title}
                </NavLink>
            </div>
        ));
};

export const RenderSubModules = ({ menuData, moduleCode }) => {
    return menuData
        .filter((subModule) => subModule.ParentCode.substring(0, 11) === moduleCode && subModule.MenuNature === 3)
        .map((subModule) => (
            <div key={subModule.ChildCode} className="dropdown-item p-0 m-0">
                {subModule.IsRepeated ? (
                    <RenderPages menuData={menuData} subModuleCode={subModule.ChildCode.substring(0, 17)} />
                ) : (
                    <>
                        <div
                            className="nav-link dropdown-toggle"
                            style={linkStyle}
                        >
                            {subModule.Title}
                        </div>
                        <div className="dropdown-submenu left-dropdown">
                            <ul>
                                <RenderPages menuData={menuData} subModuleCode={subModule.ChildCode.substring(0, 17)} />
                            </ul>
                        </div>
                    </>
                )}
            </div>
        ));
};
