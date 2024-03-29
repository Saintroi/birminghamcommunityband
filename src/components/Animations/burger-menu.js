import styled from 'styled-components';
import React, {useEffect, useRef } from 'react';


// styles
const StyledBurger = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-left: 10px;
    z-index: 100;
    visibility: hidden;
    align-self: center;

    &:focus {
    outline: none;
    }

    div {
    width: 2rem;
    height: 0.25rem;
    background: ${(props) => props.open ? props.theme.darkAccentColor : props.theme.accentColor};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }

    }

    @media only screen and (max-width: 795px){
        visibility: visible;
    }
`;

//JSX

function Burger(props) {
  const wrapperRef = useRef(null)

  function handleClick(event) {
    if (wrapperRef && wrapperRef.current.contains(event.target)) {
      props.toggleOpen();
    }

  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });

    return (
      <StyledBurger open={props.open} ref={wrapperRef}>
        <div />
        <div />
        <div />
      </StyledBurger>
    )
  }

  export default Burger;

  