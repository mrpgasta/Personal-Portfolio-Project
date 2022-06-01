import { FaBars } from 'react-icons/fa';
import { Scrollchor as Link } from 'react-scrollchor';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000000;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  color: white;
  font-family: "Space Grotesk";
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #ff4400;
  }
  
  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    
    &.active {
      background-color: black;
      border-radius: 0;
    }
    //position: relative;
  }
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  position: absolute;
  top: 80px;
  left: -100%;
  opacity: -1;
  transition: all 0.5s ease;

  &.active {
    background: #ff4400;
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
  }
}
`;

export const NavMenuDropdown = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  position: absolute;
  top: 80px;
  left: -100%;
  opacity: -1;
  transition: all 0.5s ease;

  &.active {
    background: #ff4400;
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
  }
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
  
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
  background: #ffffff;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ff4400;
    color: #ffffff;
  }
`;
