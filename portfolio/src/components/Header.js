import React from 'react'
import avatar from '../assets/images/avatar.png'
import Footer from './Footer'
import { Animated } from 'react-animated-css'

const Header = () => (
  <header id="header">
    <Animated
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationInDuration={1000}
      animationOutDuration={1000}
      isVisible={true}
    >
      <div className="inner">
        <h2>Full Stack Software Developer</h2>
      </div>
    </Animated>

    <Footer />
  </header>
)

export default Header
