import React, { useEffect, useRef} from 'react';
import { withRouter } from 'react-router-dom';
import { PopUp } from '..'
import styled from 'styled-components';
import bg from '../../img/hp-bg.jpeg';
import dcround from '../../img/dcround.png'
import paround from '../../img/paround.png'
import plround from '../../img/plround.png'
import tcround from '../../img/tcround.png'
import resbg from '../../img/res-bg.jpg'
import CountUp from 'react-countup';



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
    min-height: 40vh;

h1{
    position: absolute;
    z-index: 98;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4vmin;

}

img{
    width: 100%;
    height: 100%;
    min-height: 40vh;
    filter: blur(3px) brightness(60%);
    transform: scale(1.01);
    z-index: 95;
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


const Results = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    color: white;
    text-align: center;
    background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${resbg});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    filter: brightness(90%);
    margin-bottom: 10px;
    width: 100%;
    flex: 2;
    padding: 0 10px 0 10px;

hr{
    width: 100%;
    height: 0;
    border: none;
}
h1{
    margin: 5px;
    padding-top: 30px;
    font-size: 4vmin;
}
h2{
    margin: 10px;
    width: 18%;
    font-size: 4vmin;
}
h3{
    margin: 0px 10px 50px 10px;
    width: 18%;
    font-size: 2vmin;
}

@media only screen and (max-width: 795px){
    h1{
        font-size: 6vmin;
    }
    h2{
        font-size: 6vmin;
        margin-bottom: 0;

    }
    h3{
        font-size: 3.5vmin;
        margin-bottom: 10px;
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

const Services = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    color: white;
    text-align: center;
    border-radius: 20px;
    margin: 20px;
    width: 80%;
    flex: 2;
    padding: 20px 20px 20px 20px;

p{
    font-size: 1.5vmin;
}
h1{
    margin: 5px;
    color: black;
}
hr{
    width: 100%;
    height: 0;
    border: none;
}

@media only screen and (max-width: 795px){
    h1{
        font-size: 6vmin;
        width: 100%;
        margin: 5px;
    }
}
`;

const ServiceCard = styled.div`
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.accentColor};
    border-radius: 0px;
    margin: 0 20px 20px 20px;
    width: 18%;
    align-self: stretch;

p{
    font-size: 1.5vmin;
    margin: 0 20px 0 20px;
    margin-bottom: auto;
}

img{
    margin-top: 20px;
    width: 12vmin;
    height: 12vmin;
}

@media only screen and (max-width: 795px){
   
   margin: 0 5px 5px 5px;
   width: 70%;
   padding: 0px;

    p{
        font-size: 5vmin;
        margin: 0 30px 0 30px;
    }
    h2{
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
    top: 60%;
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
    const purposeRef = useRef(null);
    const serviceRef = useRef(null);
    const resultRef = useRef(null);
    const contactRef = useRef(null);
    const coverRef = useRef(null);


    useEffect(() => {
        props.giveRefsToParent({purposeRef, serviceRef, resultRef, contactRef, coverRef});
    });

  return (
    <MainWrap>
        <Cover ref={coverRef}>
            <h1>EDUCATED. EMPOWERED. COMPLIANT.</h1>
            <StyledLink><h2>LEARN MORE</h2></StyledLink>
            <img src={bg} alt=""></img>
        </Cover>
        <Purpose ref={purposeRef}>
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
        <Services>
            <h1 ref={serviceRef}>OUR SERVICES</h1>
            <hr></hr>
            <ServiceCard>
                <img src={dcround} alt=""></img>
                <h2>Digital Content</h2>
                <p>Our proprietary solution delivers brand-specific digital content to enhance patient education.</p>
                <PopUp
                 text="A paradigm shift is occurring in the way that the healthcare community in general communicates with patients. A+ Patient is committed to providing the medium necessary for pharmaceutical manufacturers to assist providers in directly educating and empowering their patients. 

                 Our first-to-market solution serves as a repository and delivery mechanism for all pharmaceutical education content reaching millions of patients nationwide. By partnering with other software vendors as well as physician offices directly, A+ Patient is using digital health to create efficiencies in the way providers manage their patients’ prescription regimens.  The end result is enhanced physician insights, better patient outcomes, and increased pharmaceutical innovation."
                 ></PopUp>
            </ServiceCard>
            <ServiceCard>
                <img src={tcround} alt=""></img>
                <h2>Text Campaigns</h2>
                <p>Patients opt into text campaigns based on the regimens prescribed by their providers to increase compliance.</p>
                <PopUp
                 text="The initial stages of a patient being placed on a prescription drug regimen are crucial to future compliance. Studies show that patients who are introduced to visual content specific to their medications are likely to fill their initial scripts at a rate of 92%. Ongoing education about their regimen further enhances the likelihood of compliance and thus increases refill rates by a clip of 2.6 times the average rates.

                 Upon opting into the A+ Patient program, our software enrolls the patient into an engagement campaign to deliver ongoing content dependent on the evolving nature of his/her treatment plan. These messages contain pertinent information including, but not limited to, welcome messages, dosing requirements, potential side effects, copay coupons, and ongoing surveys."
                 ></PopUp>            </ServiceCard>
            <ServiceCard>
                <img src={plround} alt=""></img>
                <h2>Provider Loop</h2>
                <p>Providers receive notifications in real-time on prescription fill rates and patient compliance.</p>
                <PopUp
                 text="The healthcare community in general is faced with the triple aim mandates of the Affordable Care Act.  Physicians and their staff are no exception, as they play an integral role in patient education, overall patient experience, and patient prescription compliance.

                 Via A+ Patient’s Patient Loop technology, physicians and their staff have access to a number of checkpoints along a patient’s prescription regimen, from successful/unsuccessful fulfillment of the initial script to subsequent refill confirmations to future survey results. This form of continuous yet controlled engagement ensures staff is aware of any compliance issues so they can be addressed immediately, thus mitigating the number of inquiries the physician receives directly from payers.  But most importantly, it provides a full picture of the patients’ past and present prescription regimens allowing for the delivery of optimal patient care going forward."
                 ></PopUp>            </ServiceCard>
            <ServiceCard>
                <img src={paround} alt=""></img>
                <h2>Predictive Analytics</h2>
                <p>Pharmaceutical companies access actionable prescription intelligence via dynamic dashboards and reports.</p>
                <PopUp
                 text="While patients are being educated and empowered by A+ Patient’s front-end technology, these patients’ prescription regimens are being aggregated from otherwise disparate systems nationwide.  The end result is a dynamic deliverable suited for providing physicians with enhanced insights into their patients’ past and present prescription patterns. This enables them to reconcile and make appropriate adjustments to medications with their patients, thus lowering patient risk and overall healthcare costs."
                 ></PopUp>            </ServiceCard>
        </Services>
        <Results>
            <h1 ref={resultRef}>EXPECT RESULTS</h1>
            <hr></hr>
            <h2><CountUp end={92} delay={1} duration={4}>%</CountUp>%</h2>
            <h2><CountUp end={15} delay={1} duration={4}>%</CountUp>%</h2>
            <h2><CountUp end={60} delay={1} duration={4}>%</CountUp>%</h2>
            <h2><CountUp end={260} delay={1} duration={4}>%</CountUp>%</h2>
            <hr></hr>
            <h3>INITIAL FILL RATES</h3>
            <h3>INCREASE IN NET NEW SCRIPTS</h3>
            <h3>ENHANCED REGIMEN COMPLIANCE</h3>
            <h3>LIFT IN REFILLS</h3>
        </Results>
        <Contact>
            <h1 ref={contactRef}>CONTACT US</h1>
            <hr></hr>
            <a href="mailto:info@apluspatient.com">info@apluspatient.com</a>
        </Contact>
    </MainWrap>

    );
  }

export default withRouter(Homepage);