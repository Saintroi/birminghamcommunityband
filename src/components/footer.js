import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

// styles

const Wrap = styled.div`
  grid-area: foot;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${(props) => props.theme.BackgroundColor};
  height: 60px;
  
  @media only screen and (max-width: 795px){
    height: 30px;
    font-size: 2vmin;
  }
`;



//JSX

function Footer(props) {

  return (
    <Wrap>
        <p>Birmingham Community Bands is a non-profit organization • Website designed by Drew Nelson</p>
    </Wrap>

    );
  }

export default withRouter(Footer);