import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import CloseButton from '../Static/staticX';

// Styles   

const OverlayWindow = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${(props) => props.theme.altBackgroundColor};
    opacity: 90%;
    border-color: ${(props) => props.theme.primaryColor};
    border-width: 2px;
    border-style: solid;
    visibility: ${props => props.showing ? 'visible' : 'hidden'};
    z-index: 100;
    min-width: 40%;
    max-height: ${props => props.showing ? '500px' : '0'};
    color: white;
    text-align: center;
    overflow: hidden;

    transition: all 300ms ease;


    p{
        opacity: 100%;
        font-size: 2vmin;
        margin: 5%;
    }

    @media only screen and (max-width: 795px){
      min-width: 80%;
      max-height: ${props => props.showing ? '60vh' : '0'};
      p{
          font-size: 4vmin;
          margin: 2%;
          padding: 10px 15px 0 15px;
      }
  }
`;

const StyledLink = styled.a`
    background-color: ${(props) => props.theme.primaryColor};
    background: linear-gradient(to right,  ${(props) => props.theme.brightAccentColor} 50%, ${(props) => props.theme.primaryColor} 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all .3s ease-out;
    color: white;
    text-decoration: none;
    margin-top: 10px;
    width: 100%;
    height: 4vmin;
    align-self: flex-end;

h2{
    font-size: 1.5vmin;
    font-weight: bold;
    top: 50%;

}

&:focus, &:active, &:hover{
  text-decoration: none;
}

&:hover{
    background-position: left bottom;
    cursor: pointer;

}

@media only screen and (max-width: 795px){
    height: 6vmin;
    h2{
        font-size: 4vmin;
    }
}

`;



function PopUp(props) {

  const [showing, setShowing] = useState(false);
  const wrapperRef = useRef(null)


  function handleClickOutside(event) {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      setShowing(false);
    }
  }

  function show(){
    setShowing(!showing)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });


  return(
    <React.Fragment>
      <StyledLink onClick={show}><h2>MORE</h2></StyledLink>
      <OverlayWindow showing={showing} ref={wrapperRef}>
          <CloseButton click={show}></CloseButton>
          <p>{props.text}</p>
      </OverlayWindow>
    </React.Fragment>
  );
    }

export default PopUp;