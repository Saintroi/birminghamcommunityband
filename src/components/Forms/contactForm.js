import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/apluspatientSmall.png';


// styles

const Wrap = styled.div`
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
  opacity: 0.9;
  z-index: 99;
`;

const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-family: 'Roboto', Helvetica, Arial;
  font-size: 1.5vmin;
  font-weight: bold;
  color: ${(props) => props.theme.accentColor};
  text-decoration: none;


  &:focus, &:active, &:hover{
    text-decoration: none;
  }

  img{
    width: 1vmin;
    height: 1vmin;
  }

`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

`;

const TextInput = styled.input`
  display: inline-block;
  align-self: flex-end;
  margin-left: auto;
  padding: 15px;
  flex: 1 1 50%;
  max-width: 70%;
  max-height: 40px;
  @media only screen and (max-width: 1030px) {
    max-width: 100%;
  }
`;

//JSX

function ContactForm(props) {



  return (
    <Wrap>

    </Wrap>

    );
  }

export default withRouter(ContactForm);