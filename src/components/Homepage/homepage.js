import React, { useEffect, useRef} from 'react';
import { withRouter } from 'react-router-dom';
import { PopUp } from '..'
import styled from 'styled-components';
import bg from '../../img/bandtemp.jpg';


// styles

const MainWrap = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 98;
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;
`;

const Cover = styled.div`
    color: white;
    background-color: ${(props) => props.theme.backgroundColor};
    overflow: hidden;
    flex: 3;
    align-self: stretch;
    margin-bottom: 10px;
    text-align: center;
    height: 40vh;
    width: 100%;

h1{
    position: absolute;
    z-index: 98;
    top: 20vh;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4vmin;

}

.bg{
    height: 40vh;
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    filter: blur(3px) brightness(60%);
    transform: scale(1.01);
    z-index: 95;
}

.city{

}

@media only screen and (max-width: 795px){
    h1{
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0px;
        font-size: 7vmin;
        width: 100%;
    }
}
`;

const Purpose = styled.div`
    color: black;
    text-align: center;
    background-color: ${(props) => props.theme.backgroundColor};
    border-radius: 20px;
    margin-bottom: 10px;
    width: 95%;
    flex: 2;
    padding: 0 10px 0 10px;

p{
    font-size: 1.5vmin;
    margin: 0 30px 0 30px;
}

@media only screen and (max-width: 795px){
    p{
        font-size: 4vmin;
        margin: 0 30px 0 30px;
    }
    h1{
        font-size: 6vmin;
        width: 100%;
        margin: 5px;
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
    position: absolute;
    top: 40vh;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 98;
    white-space: nowrap;
    width: 30%;
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: center;

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
        width: 100%;
        top: 35%;
        h2{
            font-size: 5vmin;
        }
    }
`;

const Contact = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    color: white;
    text-align: center;
    background-color: ${(props) => props.theme.primaryColor};
    border-radius: 20px;
    margin: 20px;
    width: 60%;
    flex: 2;
    padding: 20px 20px 20px 20px;


h1{
    margin: 5px;
}
hr{
    width: 100%;
    height: 0;
    border: none;
}
a{
    color: white;
    font-size: 2vmin;
}

@media only screen and (max-width: 795px){
    margin: 0;
    width: 80%;
    a{
       font-size: 4vmin;
    }
}
`;

//JSX

function Homepage(props) {
    const aboutRef = useRef(null);
    const scheduleRef = useRef(null);
    const contactRef = useRef(null);
    const coverRef = useRef(null);


    useEffect(() => {
        props.giveRefsToParent({aboutRef, scheduleRef, contactRef, coverRef});
    });

  return (
    <MainWrap>
        <Cover ref={coverRef}>
            <h1>BIRMINGHAM COMMUNITY BANDS</h1>
            <StyledLink><h2>LEARN MORE</h2></StyledLink>
            <img className="bg" src={bg} alt=""></img>
        </Cover>
        <Purpose ref={aboutRef}>
            <h1 >PURPOSE</h1>
            <p>
                Nationwide, healthcare costs are higher than they’ve ever been, and they continue to rise year-over-year. 
                One of the leading causes are chronic illnesses, such as heart disease, diabetes, hypertension, and COPD. 
                These account for over 85% of healthcare costs today, and close to half of the American population suffer from at least one of them. 
                The longer they go untreated the more expensive they become. <br></br><br></br>One of the reasons these diseases are difficult to manage 
                is because patients get tired of taking the various medications ordered by their physicians to control them. 
                Those who cut back oftentimes find themselves in the emergency room with heart attacks, strokes and other complications.<br></br><br></br>
                Studies vary but show that an average of 12% and 40% of all prescriptions written/ordered nationwide never get filled. 
                That’s quite a big gap in fulfillment depending on which organization you take at its word. 
                However, regardless of which end of the spectrum you believe the numbers fall on, the fact is physicians are often left clueless 
                about their patients’ prescription compliance.  Couple that with lack of knowledge physicians have about additional medications 
                being prescribed by other healthcare providers, and the patients bear the burden of additional healthcare risk.<br></br><br></br>
                A+ Patient works in corroboration with pharmaceutical manufacturers as well as healthcare providers and other software
                 providers to educate and empower patients and enhance physician insights.  
                 This in turn increases compliance of prescribed medication regimens, lowers overall healthcare costs, and drives pharma innovation.
                 </p>
            </Purpose>
        <Contact>
            <h1 ref={contactRef}>CONTACT US</h1>
            <hr></hr>
            <a href="mailto:info@apluspatient.com">info@apluspatient.com</a>
        </Contact>
    </MainWrap>

    );
  }

export default withRouter(Homepage);