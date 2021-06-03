import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

// styles

const Wrap = styled.div`
  grid-area: foot;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${(props) => props.theme.BackgroundColor};
  height: 100px;
  
  @media only screen and (max-width: 795px){
    height: 50px;
    font-size: 3vmin;
  }
`;



//JSX

function Footer(props) {

  return (
    <Wrap>
        <p>Copyright 2017 A+ Patient, LLC</p>
    </Wrap>

    );
  }

export default withRouter(Footer);