import React, { useEffect, useRef } from "react";
import config from '../../config';
import { PopUp, DonateButton} from "..";
import styled from "styled-components";
import bg from "../../img/band_tville.jpg";
import johnny from "../../img/johnnyjacobs.jpg";
import harry from "../../img/harry.jpg";
import deanna from "../../img/deanna.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Calendar from "@ericz1803/react-google-calendar";


// styles

const MainWrap = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 98;
  font-family: "Montserrat", sans-serif;
  overflow-x: hidden;

  .sliderimg {
    width: auto;
    height: 50vh;
    object-fit: contain;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Cover = styled.div`
  color: white;
  background-color: ${(props) => props.theme.backgroundColor};
  overflow: hidden;
  flex: 3;
  align-self: stretch;
  margin-bottom: 10px;
  text-align: center;
  height: 30vh;
  width: 100%;

  h1 {
    position: absolute;
    z-index: 98;
    top: 20vh;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5vmin;
    margin: 0;
  }

  .bg {
    height: 30vh;
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    object-position: center bottom;
    filter: blur(5px) brightness(45%);
    transform: scale(1.01);
    z-index: 95;
  }

  @media only screen and (max-width: 795px) {
    h1 {
      top: 25%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: 0px;
      font-size: 7vmin;
      width: 100%;
    }
  }
`;


const About = styled.div`
  color: black;
  text-align: center;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 20px;
  margin: 20px;
  width: 85%;
  max-height: 40vh;
  max-width: 1500px;
  overflow-y: auto;
  flex: 2;
  padding: 0 10px 10px 10px;
  border: 2px solid ${(props) => props.theme.altBackgroundColor};

  p {
    font-size: 1.5vmin;
    margin: 0 30px 0 30px;
  }

  @media only screen and (max-width: 795px) {
    p {
      font-size: 4vmin;
      margin: 0;
      padding: 0 15px;
    }
    h1 {
      font-size: 6vmin;
      width: 100%;
      margin: 5px 0;
    }
    margin: 10px 0;
    width: 90%
  }
`;

const Card = styled.div`
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.altBackgroundColor};
  border-radius: 0px;
  margin: 0 20px 20px 20px;
  width: 25%;
  max-width: 360px;
  align-self: stretch;

  p {
    font-size: 1.5vmin;
    margin: 0 20px 0 20px;
    margin-bottom: auto;
  }

  img {
    margin-top: 20px;
    width: 13vmin;
    height: 13vmin;
    border-radius: 50%;
  }

  @media only screen and (max-width: 795px) {
    margin: 0 5px 10px 5px;
    width: 85%;
    padding: 0px;

    p {
      font-size: 4vmin !important;
      margin: 0 30px 0 30px;
    }
    h2 {
      font-size: 5vmin;
      width: 100%;
      margin: 5px;
    }
    img {
      margin-top: 10px;
      width: 20vmin;
      height: 20vmin;
  }
  }
`;

const Conductors = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  color: white;
  text-align: center;
  border-radius: 20px;
  max-width: 1500px;
  margin: 20px;
  width: 80%;
  flex: 2;
  padding: 20px 20px 20px 20px;

  p {
    font-size: 1.5vmin;
  }
  h1 {
    margin: 5px;
    color: black;
  }
  hr {
    width: 100%;
    height: 0;
    border: none;
  }

  @media only screen and (max-width: 795px) {
    h1 {
      font-size: 6vmin;
      width: 100%;
      margin: 5px;
    }
  }
`;
const GalleryLink = styled.a`
  text-transform: uppercase;
  font-size: 6vmin;
  font-weight: bold;
  color: white;
  visibility: hidden;
  width: 60%;
  text-align: center;
  border-radius: 20px;
  padding: 5px;
  background-color: ${(props) => props.theme.primaryColor};
  background: linear-gradient(to right,  ${(props) => props.theme.accentColor} 50%, ${(props) => props.theme.primaryColor} 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all .3s ease-out;
  margin: 15px;

  &:focus, &:active, &:hover{
    text-decoration: none;
    background-position: left bottom;

  }

  @media only screen and (max-width: 795px) {
    visibility: hidden;
  }
`;

const PhotoWrap = styled.div`
  width: 99%;
  display: none;
  @media only screen and (max-width: 795px) {
    display: none;
  }
`;

const CalendarWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: auto;
  margin: 20px 0;
  max-width: 1700px;

  @media only screen and (max-width: 795px) {
    max-height: 60vh;
    overlflow: hidden;

    .calendar-body{
      grid-auto-rows: minmax(40px, auto);

      .day{
        padding: 5px 0;
      }
    }
  }
`;

const HorizontalBanner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: white;
  text-align: center;
  flex-direction: row;
  background-color: ${(props) => props.theme.primaryColor};
  width: 100%;
  margin: 20px;
  padding: 10px;
  max-height: 300px;

  h1 {
    margin: 8px;
  }
  hr {
    width: 100%;
    height: 0;
    border: none;
    margin: 0;
  }
  a {
    color: ${(props) => props.theme.altAccentColor};
    font-size: 1.5vmin;
  }
  p {
    font-size: 1.5vmin;
    margin: 5px;
  }

  img{
    height: 70%;
    width: 70%;
  }

  @media only screen and (max-width: 795px) {
    flex-direction: column;
    margin: 0;
    width: 80%;
    a {
      font-size: 4vmin;
    }
    p {
    font-size: 4vmin;
  }
  img{
    height: 80%;
    width: 80%;
  }
  }
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  flex: 2;
  padding: 10px;

`;
const Donate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 2;
  padding: 10px;

`;

const AlertBanner = styled.div`
  width: 100vw;
  background-color: ${(props) => props.theme.accentColor};
  max-height: 120px;
  text-align: center;
  overflow-y: auto;

  h1{
    font-size: 1.5vmin;
    margin: 5px 10px;
  }
  a {
    color: ${(props) => props.theme.brightAccentColor};
    font-size: 1.5vmin;
  }

  @media only screen and (max-width: 795px) {
    h1 {
      font-size: 3vmin;
    }
    a {
    font-size: 3vmin;
  }
}
`;

/*      <AlertBanner>
        <h1> ATTENTION: The Birmingham Community Concert Band has resumed rehearsals on Tuesdays from 7-9PM</h1>
        <h1> LOCATION: John Carroll Catholic High School</h1>
        <h1> See our <a href="https://www.facebook.com/Birminghamcommunity">Facebook</a> for details.</h1>
      </AlertBanner> */

//JSX
const handleDragStart = (e) => e.preventDefault();

const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}

//<StyledLink><h2>LEARN MORE</h2></StyledLink>

function Homepage(props) {
  const aboutRef = useRef(null);
  const conductorRef = useRef(null);
  const scheduleRef = useRef(null);
  const contactRef = useRef(null);
  const coverRef = useRef(null);
  importAll(require.context("../../img/bandpics", false, /\.(png|jpe?g|svg)$/));
  const bandPictures = Object.entries(cache).map((module) => module[1].default);

  const calStyle = {
    calendar: {
      borderWidth: "3px",
      width: "90%",
      borderColor: "#70ABAF"
    },
    today:{
      color: "#70ABAF",
      border: "1px solid #70ABAF"
    },
    tooltip:{
      width: "auto",
      backgroundColor: "#99E1D9",
      
    }
  }

  useEffect(() => {
    props.giveRefsToParent({ aboutRef, conductorRef, scheduleRef, contactRef, coverRef });
    console.log(config.calendar);
  });

  return (
    <MainWrap>
      <Cover ref={coverRef}>
        <img className="bg" src={bg} alt=""></img>
        <h1>BIRMINGHAM COMMUNITY CONCERT BAND ASSOCIATION</h1>
      </Cover>

      <About ref={aboutRef}>
        <h1>About Us</h1>
        <p>
          The Birmingham Community Concert Band Association was founded in 1980.
          Its purpose is to promote the listening enjoyment of concert band
          music for the Greater Birmingham Area while providing local musicians
          an opportunity to get together to do what they love -- play their
          instruments. It currently sponsors two groups: the Birmingham
          Community Concert Band and the Birmingham Wind Ensemble. Both groups
          rehearse weekly and perform several concerts at various times and
          locations throughout the year. The membership boasts a very diverse
          group of instrumentalists of all ages, backgrounds, professions, and
          ability levels. <br></br>
          <br></br>
          The Birmingham Community Concert Band meets every Tuesday evening from
          7:00 to 9:00pm in the band room at John Carroll Catholic High School. 
          <br></br>
          It is under the direction of Harry McAfee during the Academic Year, Dr. Johnny Jacobs during the
          summer, and Greg Gumina for our Christmas series. Alan Brooks serves as substitute when needed.<br></br>
          <br></br>
          The Birmingham Wind Ensemble meets on Wednesdays from 7:00 to 9:00pm
          in the UAB Band Room within Hulsey Hall. This group is conducted by Deanna Bell.<br></br>
          <br></br>
          The membership is completely volunteer. The BCCB Association is
          registered as a 501 C-3 not for profit organization and welcomes tax
          deductible donations.<br></br>
          <br></br>
          Individuals interested in becoming a member of one or both of these
          groups may contact us or may visit at any rehearsal.
        </p>
      </About>
      <CalendarWrap ref={scheduleRef}>
        <Calendar apiKey={config.calendar.api_key} calendars={[{calendarId: config.calendar.calendarID, color: "#FBB13C"}]} styles={calStyle} showFooter={false}/>
      </CalendarWrap>
      <About ref={conductorRef}>
        <h1>About the Conductors</h1>
        <p>
          Over the years the bands have been under the direction of several
          outstanding conductors. Among these were Founding Conductor Dr. Donald
          W. Stauffer, a former director of the U. S. Navy Band; Dr. Jim
          Ferguson, a former director of the University of Alabama Million
          Dollar Band; Dr. Jon Remley, retired Superintendent of Music for
          Jefferson County Schools and former director of the Samford University
          Band; Larry Deagon, retired Superintendent of Music for Jefferson
          County Schools and former band director at Shades Valley High School;
          DeWitt Self, former director at Leeds High School; Dr. Johnny Jacobs,
          retired Supervisor of Music for Jefferson County Schools and former
          band director at Minor High School; Spencer Shaw, former director at
          University of Montevallo Bands; Harry McAfee, former band director at
          Shades Valley High School and Hoover High School; Alan Brooks, former
          band director at Robert E. Lee High School (Montgomery), Mountain
          Brook High School, and John Carroll Catholic High School; and Deanna
          Bell, the music teacher at Vestavia Hills Elementary East. <br></br>
          <br></br>
        </p>
      </About>
      <Conductors ref={conductorRef}>
        <Card>
          <img src={harry} alt=""></img>
          <h2>Harry L. McAfee</h2>
          <p>
            Mr. McAffee serves as the conductor for the Spring and Fall Concert
            Band.
          </p>
          <PopUp
            text={
              "Retired after 37 years of experience as a successful band director in Alabama public schools, Mr. McAfee now serves as the Executive Secretary for the Alabama Bandmaster's Association. His bands always received highest ratings on both the concert stage and the marching field and performed in many prestigious events both in the United States and abroad. Mr. McAfee received his Bachelor of Music Degree from the University of Montevallo and also earned a Master of Science Degree at the University of Illinois placing emphasis on instrumental conducting and band literature. He is retired from the U.S. Army Reserve after 26 years of meritorious service with the 313th Army Band.\n\nMemberships include the Alabama Music Educators, National Association for Music Education, The National Band Association, The International Trumpet Guild, and Phi Beta Mu Honorary Band Directors Fraternity. Along with serving as conductor of the Celebration Winds, Mr. McAfee conducted the Alabama Ambassadors Band European Tour in the Summer of 2013. As an active member of the Birmingham Musicians Union he plays with the Alabama Winds Community Band, local shows and church work, and as an extra with the Alabama Symphony. He is also a member and director of the orchestra at Metropolitan Church of God. He and his wife Amy, who plays French horn, have two daughters, Kate and Erin, who are All-State Band musicians."
            }
          ></PopUp>
        </Card>
        <Card>
          <img src={johnny} alt=""></img>
          <h2>Dr. Johnny Jacobs</h2>
          <p>
            Dr. Johnny Jacobs serves as the conductor for the Summer Concert
            Band.
          </p>
          <PopUp
            text={
              "Dr. Jacobs is retired Supervisor of Bands for the Jefferson County, Alabama School System. Prior to his appointment to this position he served as band director at Dixie Jr. High School, Minor High School, Hewitt- Trussville Junior High School, and Berry High School.\n\nDr. Jacobs holds degrees from Birmingham-Southern College, the University of Illinois, and the University of Alabama. Concurrent with his services in public education, he played for ten years with the Birmingham Symphony Orchestra and taught in the trumpet studios of Birmingham- Southern College for thirty years and Samford University for eleven years.\n\nDr. Jacobs is a member of the Alabama Bandmasters Hall of Fame and the Alabama Music Educators Hall of Fame. He presently serves as private teacher and consultant in five public schools in the Birmingham area. He resides on his old family home place near Warrior, Alabama where he serves as deacon in Water Stone Church. He and his wife Carol, who plays clarinet, have five children and ten grandchildren."
            }
          ></PopUp>
        </Card>
        <Card>
          <img src={deanna} alt=""></img>
          <h2>Deanna Bell</h2>
          <p>Deanna Bell serves as the conductor for the Wind Ensemble.</p>
          <PopUp
            text={
              "Deanna Bell is the music teacher at Vestavia Hills Elementary East, conductor of the Birmingham Wind Ensemble, and an adjunct music professor at the University of Alabama at Birmingham. She has worked in Alabama, Tennessee, and Virginia teaching elementary music, choir, and band in all grade levels from kindergarten to college. As the Director of Bands at Linkhorne Middle School in Virginia, her bands consistently earned superior ratings. Deanna joined the Shades Valley High School Band staff in 2006 and worked with the high school marching band for seven years.\n\nShe earned her Bachelor of Science in Music Education from The University of Alabama and her Master of Music Education from Samford University. Deanna studied conducting with Dr. Gerald Welker and Dr. Ken Ozzello. In 2010, Deanna was awarded National Board Certification in Early and Middle Childhood Music. Deanna received Orff Levels I, II, and III Certification from Samford University and Kodaly Levels I and II Certification from The University of Montevallo. She serves on the Alabama Kodaly Educators Board, the Executive Board for the Alabama Chapter of the American Orff-Schulwerk Association, and is a District 3 Chair for the Alabama Music Educators Association. Deanna is the 2016-2017 Elementary Teacher of the Year for Vestavia Hills City Schools."
            }
          ></PopUp>
        </Card>
      </Conductors>
      <HorizontalBanner>
        <Contact>
          <h1 ref={contactRef}>CONTACT US</h1>
          <hr></hr>
          <p>Join our <a href="https://bit.ly/joinbccb">Mailing List</a></p>
          <hr></hr>
          <p>Like us on <a href="https://www.facebook.com/Birminghamcommunity">Facebook</a></p>
          <hr></hr>
          <p>Send us an email: <a href="mailto:birminghamcommunityband@gmail.com">birminghamcommunityband@gmail.com</a></p>
        </Contact>
        <Donate>
        <h1>DONATE TO US</h1>
          <DonateButton></DonateButton>
        </Donate>
      </HorizontalBanner>
    </MainWrap>
  );
}

export default Homepage;

/*
      <PhotoWrap>
        <AliceCarousel
        mouseTracking
        keyboardNavigation
        infinite
        autoPlay
        
        autoPlayInterval="5000"
      >
        {bandPictures.map((image, index) => (
          <img
            src={image}
            key={index}
            alt="error"
            onDragStart={handleDragStart}
            className="sliderimg"
          />
        ))}
      </AliceCarousel>
     </PhotoWrap>
     <GalleryLink>PHOTO GALLERY</GalleryLink>
*/