import React from 'react';
import './__css__/Footer.css';

const Footer = () => {
  const content = (
    <div className="footer container-fluid">
      <div className="row">
        <ul className="footer-menu">
          <li className="footer-menu-item">
            <i className="fab fa-github" />
            &nbsp;
            <a className="github" href="https://github.com/navikt/webarx-poc">
              <b>Source Code</b>
            </a>
          </li>
          <li className="footer-menu-item">
            <i className="fab fa-github" />
            &nbsp;
            <a className="github" href="https://github.com/navikt/webarx-poc/issues">
              <b>Issue tracker</b>
            </a>
          </li>
          <li className="footer-menu-item">
            <i className="fab fa-slack" />
            &nbsp;
            <a className="slack" href="https://app.slack.com/client/T5LNAMWNA/CKER48611">
              <b>Slack</b>
            </a>
          </li>
          <li className="footer-menu-item">
            <i className="fas fa-envelope" />
            &nbsp;
            <a className="email" href="mailto:Anonymisering@nav.no">
              <b>anonymisering@nav.no</b>
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p>
          © Copyright 2019
          {' '}
          <a href="https://www.nav.no/Forsiden">
            NAV
          </a>
          {' '}
          - All Rights Reserved
        </p>
      </div>
    </div>
  );
  return content;
};

export default Footer;
