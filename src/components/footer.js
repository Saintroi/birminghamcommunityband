import React from 'react';
import styled from 'styled-components';

// styles

const Wrap = styled.div`
  grid-area: foot;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: transparent;
  height: 60px;
  color: white;
  
  @media only screen and (max-width: 795px){
    height: 30px;
    font-size: 1.75vmin;
  }
`;


//JSX

function Footer(props) {

  return (
    <Wrap>
        <p>The Birmingham Community Concert Band Association is a non-profit organization • Website designed by Drew Nelson</p>
    </Wrap>

    );
  }

export default Footer;