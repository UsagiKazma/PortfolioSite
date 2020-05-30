import React from 'react'
import Helmet from 'react-helmet'

import avatar from '../assets/images/avatar.jpg'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Juan Guzman'
  const siteDescription = 'Full Stack Developer'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
      </Helmet>

      <div id="main">
        
        <section id="one">
          <h2>About Me</h2>
          <a href="#" className="image avatar">
          <img src={avatar}/>
          </a>
          <p>Originally from Queens, NY, now located in Miami, FL. I tend to approach situations from an analytical perspective. Currently I'm attending the General Assembly Software Engineering Immersive course and I'm looking to continue to sharpen my skills after graduation. I approach each situation and enjoy the satisfaction of learning something if for nothing else than to improve past projects. I look forward to hearing from you!</p>
        </section>

        <section id="two">
          <h2>Projects</h2>

          <Gallery />
          
        </section>

        <section id="three">
          <h2>Contact Me</h2>

          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  1234 Somewhere Rd.
                  <br />
                  Nashville, TN 00000
                  <br />
                  United States
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  000-000-0000
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="#">hello@untitled.tld</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
