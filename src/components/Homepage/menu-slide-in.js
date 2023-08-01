import React, {useEffect, useRef } from 'react';
import styled from 'styled-components';
import {Burger} from '..';
import { navigate } from "raviger";


// styles
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  background-color: ${(props) => props.theme.altBackgroundColor};
  height: 100vh;
  text-align: left;
  padding: 4rem 1rem;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-200%)'};
  transition: transform 0.3s ease-in-out;
  width: 40%;
  opacity: 1;
  z-index: 99;

`;

const StyledLink = styled.a`
  text-transform: uppercase;
  font-family: 'Roboto', Helvetica, Arial;
  font-size: 1.3rem;
  margin: 1rem 0;
  padding: 5px;
  font-weight: bold;
  color: ${(props) => props.theme.accentColor};
  transition: background-color 100ms, border-width 100ms;


  &:focus, &:active, &:hover{
    text-decoration: none;
    border-color: ${(props) => props.theme.primaryColor};;
    border-width: 0px 0px 4px 0px;
    background-color: ${(props) => props.theme.vignetteColor};  
    cursor: pointer;
    }

`;

//JSX

function SlideInMenu(props) {
  const wrapperRef = useRef(null)


  function handleClickOutside(event) {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      props.toggleOpen(false)
    }
  }

    const scrollToRef = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth', block:'center'})
      }

      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      });
    return (
      <Wrap ref={wrapperRef}>
          <Burger open={props.open} toggleOpen={props.toggleOpen}></Burger>
          <StyledMenu open = {props.open} >
              <StyledLink onClick={() => scrollToRef(props.refs.aboutRef)}>About Us</StyledLink>
              <StyledLink onClick={() => scrollToRef(props.refs.scheduleRef)} >Concert Schedule</StyledLink>
              <StyledLink onClick={() => scrollToRef(props.refs.conductorRef)}>Conductors</StyledLink>
              <StyledLink onClick={() => navigate('/donate')}>Donate</StyledLink>
              <StyledLink onClick={() => scrollToRef(props.refs.contactRef)}>Contact</StyledLink>
        </StyledMenu>
      </Wrap>
    )
  }

  export default SlideInMenu;

  