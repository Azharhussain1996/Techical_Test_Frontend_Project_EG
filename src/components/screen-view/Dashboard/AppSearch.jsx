import React, { useState, useEffect, useRef } from 'react';

const AppSearch = () => {
    const [searchValue, setSearchValue] = useState('');
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const searchOptionRef = useRef(null);
    const searchDropdownRef = useRef(null);
    const searchCloseRef = useRef(null);

    useEffect(() => {
        const handleSearchChange = (e) => {
            const value = e.target.value;
            setSearchValue(value);
            if (value.length > 0) {
                setDropdownVisible(true);
            } else {
                setDropdownVisible(false);
            }
        };

        const handleSearchClose = () => {
            setSearchValue('');
            setDropdownVisible(false);
        };

        const searchOption = searchOptionRef.current;
        const searchClose = searchCloseRef.current;

        if (searchOption) {
            searchOption.addEventListener('focus', handleSearchChange);
            searchOption.addEventListener('keyup', handleSearchChange);
        }

        if (searchClose) {
            searchClose.addEventListener('click', handleSearchClose);
        }

        // Cleanup event listeners on component unmount
        return () => {
            if (searchOption) {
                searchOption.removeEventListener('focus', handleSearchChange);
                searchOption.removeEventListener('keyup', handleSearchChange);
            }
            if (searchClose) {
                searchClose.removeEventListener('click', handleSearchClose);
            }
        };
    }, []);

    return (
        <>

            <form className="app-search d-none d-md-block me-auto">
                <div className="position-relative">
                    <input
                        type="search"
                        id="search-options"
                        className="form-control"
                        ref={searchOptionRef}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Search..."
                    />
                    <iconify-icon icon="solar:magnifer-broken" class="search-widget-icon"></iconify-icon>
                </div>
            </form>
            {/* <input
                type="search"
                id="search-options"
                className="form-control"
                ref={searchOptionRef}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search..."
            />
            <div
                id="search-dropdown"
                ref={searchDropdownRef}
                className={`dropdown-menu ${isDropdownVisible ? 'show' : ''}`}
            >
                <button
                    id="search-close-options"
                    ref={searchCloseRef}
                    className={`btn ${isDropdownVisible ? '' : 'd-none'}`}
                >
                    Close
                </button>
            </div> */}
        </>
    );
};

export default AppSearch;