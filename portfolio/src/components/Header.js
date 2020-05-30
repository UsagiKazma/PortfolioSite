import React from 'react'

import Footer from './Footer'
import {Animated} from "react-animated-css";

const Header = () => (
  <header id="header">
  <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
    <div className="inner">
      <h1>
        Hello i'm Juan a Full-Stack Developer.
      </h1>
    </div>
    </Animated>
    
    <Footer />
   
  </header>
)

export default Header
