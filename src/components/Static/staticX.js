import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    transform: rotate(45deg);
    position: fixed;
    left: 1vw;
    top: 15px;

    @media only screen and (max-width: 795px){
        left: 3vw;
    }
`;

const Bar = styled.div`
    margin: 0 auto;
    position: absolute;
    background-color: ${(props) => props.theme.textColor};;

    &.horizontal {
        width: 20px;
        height: 3px;
        top: 45%;
        left: 50%;
        margin-left: -10px;
        top: 50%;
        margin-top: -2.5px;
    }

    &.vertical {
        width: 3px;
        height: 20px;
        left: 50%;
        margin-left: -2.5px;
        top: 50%;
        margin-top: -10px;
    }


`;



function CloseButton(props) {

      return (
        <Wrapper onClick={props.click}>
            <Bar className="horizontal"></Bar>
            <Bar className="vertical"></Bar>
        </Wrapper>
      )
    }
  
  export default CloseButton