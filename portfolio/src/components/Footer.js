import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://www.linkedin.com/in/juan-guzman-/"
            className="icon fa-linkedin"
          >
            <span className="label">linkedin</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/UsagiKazma" className="icon fa-github">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href="#three" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Gatsby Starter Strata</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
