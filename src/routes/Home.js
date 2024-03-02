import React from "react";
import {Animate} from 'react-simple-animate';
import About from "./About";


const Home = () => {
  return <div className="section">
  <section className="home1" id="/">
  <div className="home-text">
    <div className="slide">
      <span className="one">Hello</span>
      <span className="two">I'm</span>
    </div>
    <div className="text-home">
    <div class="animated-text">
    DEVELOPER <span></span>
    </div>
    <p>I am a developer with more than 2 years of experience in front-end and back-end
    .</p>
    </div>
    <Animate play duration={1.3} delay={0.3} start={{transform:'translateY(550px)',}} end={{transform:'translatex(0px)',}}>
    <div className="button">
      <a href="#" className="btn">About Me</a>
    </div>
    </Animate>
  </div>
</section>
<section className="home2">
<img className="imgHome" src="favorite.png"/>
</section>
  </div>
};
export default Home;
