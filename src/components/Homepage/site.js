import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Nav, Homepage, Footer} from '..';


// styles

const Wrap = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.backgroundColor};
  grid-template-areas:
  "nav"
  "content"
  "foot";
  grid-template-columns: auto;
  grid-template-rows: 150px calc(100vh - 250px) 70px;
  height: 100vh;
  overflow-y: scroll;
  z-index: 1;
  
  @media only screen and (max-width: 795px){
    font-size: 3vmin;
  }
`;



//JSX

function Site(props) {
    const [aboutRef, setAboutRef] = useState(null);
    const [conductorRef, setConductorRef] = useState(null);
    const [scheduleRef, setScheduleRef] = useState(null);
    const [contactRef, setContactRef] = useState(null);
    const [coverRef, setCoverRef] = useState(null);
  
  
    const getRefsFromChild = (childRefs) => {
      setAboutRef(childRefs.aboutRef);
      setConductorRef(childRefs.conductorRef);
      setScheduleRef(childRefs.scheduleRef);
      setContactRef(childRefs.contactRef);
      setCoverRef(childRefs.coverRef);
  
    }
  
    const giveRefsToChild = () => {
      return {aboutRef, conductorRef, scheduleRef, contactRef, coverRef};
    }
  
  return (
    <Wrap>    
        <Nav getRefsFromParent={giveRefsToChild}/>
        <Homepage giveRefsToParent={getRefsFromChild} />
        <Footer />
    </Wrap>


    );
  }

export default withRouter(Site);