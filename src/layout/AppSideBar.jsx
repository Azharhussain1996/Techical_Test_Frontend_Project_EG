import React from 'react';
import MenuItem from 'components/screen-view/AdminLayout/MenuItem';
import { Link } from 'react-router-dom';
import PATH_ROUTE from 'routes/routeConstants';
import Logo from 'assets/images/logo-dark.png'

function AppSideBar() {
    return (
        <>
            <div className="logo-box">
                <Link to={PATH_ROUTE.DASHBOARD} className="logo-dark">
                    <div>
                        <img src={Logo} className="logo-sm img-fluid" alt="logo sm" />
                    </div>
                    <div className=''>
                        <img src={Logo} className="img-fluid logo-lg" alt="logo dark" />
                        <span className='mb-0 ms-2 fs-4 text-uppercase logo-lg fw-bold text-dark' >Design Wing</span>
                    </div>
                </Link>
                <Link to={PATH_ROUTE.DASHBOARD} className="logo-light">
                  <div>
                        <img src={Logo} className="logo-sm img-fluid" alt="logo sm" />
                    </div>
                    <div className=''>
                        <img src={Logo} className="img-fluid logo-lg" alt="logo dark" />
                        <span className='mb-0 ms-2 fs-4 text-uppercase logo-lg fw-bold text-dark' >Design Wing</span>
                    </div>
                </Link>
            </div>
            <button type="button" className="button-sm-hover" aria-label="Show Full Sidebar">
                <iconify-icon icon="solar:hamburger-menu-broken" class="button-sm-hover-icon"></iconify-icon>
            </button>
            <div className="scrollbar" data-simplebar>
                <MenuItem />
            </div>
        </>
    )
}

export default AppSideBar