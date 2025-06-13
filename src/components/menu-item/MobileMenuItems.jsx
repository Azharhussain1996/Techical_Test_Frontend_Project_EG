import { useState } from "react";
import { Link } from "react-router-dom";
import MobileDropdown from "./MobileDropdown";

const MobileMenuItems = ({ items, depthLevel, showMenu, setShowMenu }) => {
  const [dropdown, setDropdown] = useState(false);

  const closeDropdown = () => {
    dropdown && setDropdown(false);
    showMenu && setShowMenu(false);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdown((prev) => !prev);
  };

  return (
    <li className="menu-items" onClick={closeDropdown}>
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            className="nav-btn d-flex justify-content-between"
            aria-haspopup="menu"
            onClick={(e) => toggleDropdown(e)}
            aria-expanded={dropdown ? "true" : "false"}
          >
            <Link className="ms-0 ps-0" to={items.url} onClick={closeDropdown}>
              {items.title}
            </Link>
            <div>
              {dropdown ? (
                <span className="arrow-close" />
              ) : (
                <span className="arrow" />
              )}
            </div>
          </button>
          <MobileDropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            className="nav-btn d-flex justify-content-between"
            aria-haspopup="menu"
            onClick={(e) => toggleDropdown(e)}
            aria-expanded={dropdown ? "true" : "false"}
          >
            {items.title}{" "}
            <div>
              {dropdown ? (
                <span className="arrow-close" />
              ) : (
                <span className="arrow" />
              )}
            </div>
          </button>
          <MobileDropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link
          className="nav-btn d-flex justify-content-between "
          to={items.url}
        >
          {items.title}
        </Link>
      )}
    </li>
  );
};

export default MobileMenuItems;
