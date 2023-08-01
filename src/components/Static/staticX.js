import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    transform: rotate(45deg);
    position: relative;

`;

const Bar = styled.div`
    margin: 0 auto;
    position: absolute;
    background-color: white;

    &.horizontal {
        width: 20px;
        height: 4px;
        top: 45%;
        left: 50%;
        margin-left: -10px;
        top: 50%;
        margin-top: -2.5px;
    }

    &.vertical {
        width: 4px;
        height: 20px;
        left: 50%;
        margin-left: -2.5px;
        top: 50%;
        margin-top: -10px;
    }


`;



function CloseButton(props) {

      return (
        <Wrapper className={props.className} onClick={props.click}>
            <Bar className="horizontal"></Bar>
            <Bar className="vertical"></Bar>
        </Wrapper>
      )
    }
  
  export default CloseButton