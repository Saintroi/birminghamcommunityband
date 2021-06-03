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
    const [purposeRef, setPurposeRef] = useState(null);
    const [serviceRef, setServiceRef] = useState(null);
    const [resultRef, setResultRef] = useState(null);
    const [contactRef, setContactRef] = useState(null);
    const [coverRef, setCoverRef] = useState(null);
  
  
    const getRefsFromChild = (childRefs) => {
      setPurposeRef(childRefs.purposeRef);
      setServiceRef(childRefs.serviceRef);
      setResultRef(childRefs.resultRef);
      setContactRef(childRefs.contactRef);
      setCoverRef(childRefs.coverRef);
  
    }
  
    const giveRefsToChild = () => {
      return {purposeRef, serviceRef, resultRef, contactRef, coverRef};
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