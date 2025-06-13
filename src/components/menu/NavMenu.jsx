import React from "react";
import { Box } from "@mui/material";
import { variables } from "assets/styles/variables";
import MuiSkeleton from "components/skeletons/MuiSkeleton";
import NavItem from "./NavItem";


const NavMenu = ({ menuData }) => {
    const loading = !menuData || !menuData.length === 0;
    const isEmpty = menuData && menuData.length === 0;

    return (
        <Box className="main-menu-area" sx={{ backgroundColor: variables.NAVBAR_COLOR }}>
            <ul className="nav nav-tabs notika-menu-wrap menu-it-icon-pro">
                {loading ? (
                    Array.from({ length: 4 }).map((_, index) => (
                        <li key={index} className="nav-item">
                            <MuiSkeleton variant="rectangular" width={120} height={30} count={1} margin={3} />
                        </li>
                    ))
                ) : isEmpty ? (" ") :
                    (menuData.filter((item) => item.MenuNature === 2).map((item) => (
                        <NavItem key={item.ChildCode} item={item} menuData={menuData} />
                    )))
                }
            </ul>
        </Box>
    );
};

export default NavMenu;

