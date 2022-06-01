import React, { useState } from 'react';
import './dropdown.css';
import {NavBtn, NavBtnLink, NavLink} from "./NavbarElements";

function Dropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <ul
                onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                <NavLink
                    to='#header'
                    onClick={() => setClick(false)}
                >
                    About Me
                </NavLink>
                <NavLink
                    to='#services-section'
                    onClick={() => setClick(false)}
                >
                    Services
                </NavLink>
                <NavLink
                    to='#portfolio'
                    onClick={() => setClick(false)}
                >
                    Portfolio
                </NavLink>
                <NavLink
                    to='#contact-me'
                    onClick={() => setClick(false)}
                >
                    Contact Me
                </NavLink>
            </ul>
        </>
    );
}

export default Dropdown;