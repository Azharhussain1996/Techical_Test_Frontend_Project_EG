import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuData } from 'dummy-data/menu-data';

const MenuItem = () => {
    const location = useLocation();
    const renderSubMenu = (subMenu) => {
        return (
            <ul className="nav sub-navbar-nav">
                {subMenu.map((item, index) => {
                      const isActive = location.pathname.startsWith(`/${item.link.replace(/^\//, '')}`);
                    return (
                        <li className={`sub-nav-item ${isActive ? "active" : ""}`} key={index}>
                            {item.subMenu ? (
                                <>
                                    <a
                                        className="sub-nav-link menu-arrow"
                                        href={item.link}
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls={item.link.replace('#', '')}
                                    >
                                        <span>{item.title}</span>
                                    </a>
                                    <div className="collapse" id={item.link.replace('#', '')}>
                                        {renderSubMenu(item.subMenu)}
                                    </div>
                                </>
                            ) : (
                                <Link className={`nav-link  ${isActive ? "active" : ""}`} to={`/${item.link.replace(/^\//, '')}`}>
                                    {item.title}
                                </Link>
                            )}
                        </li>
                    )
                })}
            </ul>
        );
    };

    return (
        <ul className="navbar-nav" id="navbar-nav">
            {MenuData.map((item, index) => {
                 const isActive = location.pathname.startsWith(`/${item.link.replace(/^\//, '')}`);
                return (
                    <li className={`nav-item ${isActive ? "active" : ""}`} key={index}>
                        {item.subMenu ? (
                            <>
                                <a
                                    className="nav-link menu-arrow"
                                    href={item.link}
                                    data-bs-toggle="collapse"
                                    role="button"
                                    aria-expanded={isActive ? "true" : "false"}
                                    aria-controls={item.link.replace('#', '')}
                                >
                                    <span className="nav-icon">
                                        <iconify-icon icon={item.icon}></iconify-icon>
                                    </span>
                                    <span className="nav-text">{item.title}</span>
                                </a>
                                <div className="collapse" id={item.link.replace('#', '')}>
                                    {renderSubMenu(item.subMenu)}
                                </div>
                            </>
                        ) : (
                            <Link className={`nav-link ${isActive ? "active" : ""}`} to={`/${item.link.replace(/^\//, '')}`}>
                                <span className="nav-icon">
                                    <iconify-icon icon={item.icon}></iconify-icon>
                                </span>
                                <span className="nav-text">{item.title}</span>
                            </Link>
                        )}
                    </li>
                )
            })}
        </ul>
    );
};

export default MenuItem;
