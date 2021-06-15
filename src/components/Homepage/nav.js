import React, {useState} from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../img/BCCB-Logo.png';
import {Burger, SlideInMenu} from '..';


// styles

const NavWrap = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.altBackgroundColor};
  position: sticky;
  top: 0px;
  align-items: center;
  min-height: 50px;
  max-height: 75px;
  height: 75px;
  width: 100%;
  grid-area: nav;
  opacity: 0.95;
  z-index: 99;
`;

const NavList = styled.ul`
  height: 100%;
  width: 100%;
  list-style-type: none;
  margin-right: 40px;
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: 795px){
    display: none;
  }
`;

const NavLink = styled.li`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  text-align: center;
  border-style: solid;
  max-width: 120px;
  min-width: 80px;
  width: 300px;
  border-width: 0px;
  transition: background-color 100ms, border-width 100ms;


  &:hover {
    text-decoration: none;
    border-color: ${(props) => props.theme.primaryColor};;
    border-width: 0px 0px 4px 0px;
    cursor: pointer;

  }
`;

const StyledLink = styled.a`
  text-transform: uppercase;
  font-family: 'Roboto', Helvetica, Arial;
  font-size: 1.5vmin;
  font-weight: bold;
  color: white;
  text-decoration: none;


  &:focus, &:active, &:hover{
    text-decoration: none;
    cursor: pointer;
  }

  img{
    width: 1vmin;
    height: 1vmin;
  }

`;

const APPLogo = styled.div`
  width: auto;
  max-height: 85px;
  height: 75px;
  align-self: flex-start;
  padding-left: 5px;
  pointer-events: all;

  img{
    width: auto;
    height: 100%;
  }

  @media only screen and (max-width: 795px){
    margin-left: auto;
    margin-right: 10px;    
  }
`;



//JSX

function Nav(props) {

  const [open, setOpen] = useState(false);

  const refs = props.getRefsFromParent();

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({behavior: 'smooth', block:'center'})
  }

  return (
    <NavWrap>
      <Burger open={open} setOpen={setOpen}></Burger>
      <SlideInMenu refs={refs} open={open} setOpen={setOpen}></SlideInMenu>
      <APPLogo>
        <img src={logo} alt="A-Plus Patient" onClick={() => scrollToRef(refs.coverRef)}></img> 
      </APPLogo>
      <NavList>
          <NavLink onClick={() => scrollToRef(refs.aboutRef)}>
            <StyledLink>About Us</StyledLink>
          </NavLink>
          <NavLink onClick={() => scrollToRef(refs.scheduleRef)}>
            <StyledLink>Concert Schedule</StyledLink>
          </NavLink>
          <NavLink onClick={() => scrollToRef(refs.contactRef)}>  
            <StyledLink>Contact</StyledLink>
          </NavLink>
      </NavList>
    </NavWrap>

    );
  }

export default withRouter(Nav);