import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Footer, Dash} from '..';


// styles

const Wrap = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.backgroundColor};
  grid-template-areas:
  "side content"
  "side content"
  "foot foot";
  grid-template-columns: auto;
  grid-template-rows: 150px calc(100vh - 250px) 100px;
  height: 100vh;
  overflow-y: scroll;
  
  @media only screen and (max-width: 795px){
    height: 50px;
    font-size: 3vmin;
  }
`;



//JSX

function Dashboard(props) {
  
  return (
    <Wrap>    
        <Dash />
        <Footer />
    </Wrap>


    );
  }

export default withRouter(Dashboard);