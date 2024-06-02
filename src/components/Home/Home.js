
import React from "react";
import "./Home.scss";
// import videoMain from '../../Video/bgVideo.mp4'

// import videoFirst from '../../Video/videoFirst.mp4'
// import videoSecond from '../../Video/videoSecond.mp4'
// import videoThird from '../../Video/videoThird.mp4'
import videoFourth from '../../Video/videoFourth.mp4'

import { Typewriter } from 'react-simple-typewriter'
import Spline from '@splinetool/react-spline';

const Home = () => {

  return (
    <>
    <div className="home" id="home">
    <video autoPlay loop muted className="bg-vid"><source src={videoFourth} type="video/mp4" /> </video>
      <div className="homeSection">
         <h1 className="home_p" >Hey There!</h1>
      <div className="content">
        <div style={{color:"black",fontSize:"2rem"}} className="content_div">Let's Build your
         <span style={{ color: '#71529c', fontWeight: 'bold' }}>
         <Typewriter
            words={['Brand.', 'Identity.','Business.']}
            loop={100}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          </span>
          </div>
          </div>
      </div>
    </div>
    </>
  );
};

export default Home;
