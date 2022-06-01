import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';
import {ReactComponent as Logo} from "../images/logo.svg"

const Navbar = () => {
    return (
        <div style={{
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 10,
        }}>
            <Nav>
                <NavLink to='/'>
                    <div><Logo width="30%" height="30%"/></div>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='#header'>
                        About
                    </NavLink>
                    <NavLink to='#services-section'>
                        Services
                    </NavLink>
                    <NavLink to='#portfolio'>
                        Portfolio
                    </NavLink>
                    <NavBtn>
                        <NavBtnLink to='#contact-me'>Contact Me</NavBtnLink>
                    </NavBtn>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
            </Nav>
        </div>
    );
};

export default Navbar;
