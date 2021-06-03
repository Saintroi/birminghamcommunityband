import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';


// styles

const Wrap = styled.div`
  grid-area: content;

  
  @media only screen and (max-width: 795px){
    height: 50px;
    font-size: 3vmin;
  }
`;



//JSX

function Dash(props) {
  
  return (
    <Wrap>    
    </Wrap>


    );
  }

export default withRouter(Dash);