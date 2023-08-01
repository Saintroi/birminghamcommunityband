import React from "react";
import styled from "styled-components";
import { DonateButton, Footer } from ".";
import { ReactComponent as BackArrow }from "../img/back-arrow.svg"
import { navigate } from "raviger";


// styles

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.primaryColor};
  height: 100%;
  width: 100%;
  overflow: hidden;

`;

const DonateBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => props.theme.altBackgroundColor};
  margin: 10%;
  padding: 20px;
  height: 50%;
  width: 100%;
  border: 2px solid ${(props) => props.theme.accentColor};
  margin-bottom: auto;
  text-align: center;
  overflow: hidden;
  gap: 5px;

  h1 {
    margin: 8px;
  }
  h2 {
    margin: 8px;
  }
  p {
    margin: 8px;
  }

  img {
    height: 90%;
    width: 90%;
  }

  @media only screen and (max-width: 795px) {
    h1 {
      font-size: 6vmin;
    }
    h2 {
        font-size: 4vmin;
        text-align: center;

    }
    p {
        font-size: 3vmin;
    }
    
    div {
      height: 60%;
      width: 90%;
    }
  }
`;

const BackWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    align-self: flex-start;
    justify-self: flex-start;

  svg{
    height: 60px;
    width: 60px;
  }

  &:hover{
    cursor: pointer;
    color: ${(props) => props.theme.accentColor};
    text-decoration: underline;

    svg{
        fill: ${(props) => props.theme.accentColor};
    }
  }
`


//JSX

function Donate(props) {
  return (
    <Wrap>
        <BackWrap onClick={()=>navigate('/')}>
            <BackArrow/>
            <h1>Back to Homepage</h1>
        </BackWrap>
      <DonateBox>
        <h1>Donate to the BCCBA</h1>
        <DonateButton></DonateButton>
        <h2>
          Your donations help us purchase music, repair or purchase instruments,
          and pay for storage of our equipment.
        </h2>
        <p>
          The BCCBA is a 501(c)(3) non-profit organization and donations to us
          are tax deductible.{" "}
        </p>
      </DonateBox>

      <Footer></Footer>
    </Wrap>
  );
}

export default Donate;
