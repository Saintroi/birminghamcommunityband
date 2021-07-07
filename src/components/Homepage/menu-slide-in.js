import styled from 'styled-components';
import React from 'react';


// styles
const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.altBackgroundColor};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  width: 50%;
  opacity: 1;
`;

const StyledLink = styled.a`
  text-transform: uppercase;
  font-family: 'Roboto', Helvetica, Arial;
  font-size: 1.5rem;
  padding: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.accentColor};
  text-decoration: none;
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

    const scrollToRef = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth', block:'center'})
      }
    return (
        <StyledMenu open = {props.open}>
            <StyledLink onClick={() => scrollToRef(props.refs.aboutRef)}>About Us</StyledLink>
            <StyledLink onClick={() => scrollToRef(props.refs.scheduleRef)} >Concert Schedule</StyledLink>
            <StyledLink onClick={() => scrollToRef(props.refs.conductorRef)}>Conductors</StyledLink>
            <StyledLink onClick={() => scrollToRef(props.refs.contactRef)}>Contact</StyledLink>
      </StyledMenu>
    )
  }

  export default SlideInMenu;

  