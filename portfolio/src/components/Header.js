import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'
import {Animated} from "react-animated-css";

const Header = () => (
  <header id="header">
  <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>I am Strata</strong>, a super simple
        <br />
        responsive site template freebie
        <br />
        crafted by <a href="http://html5up.net">HTML5 UP</a>.
      </h1>
    </div>
    </Animated>
    <Footer />
   
  </header>
)

export default Header
