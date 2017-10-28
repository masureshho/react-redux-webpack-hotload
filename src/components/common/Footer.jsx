import React, { Component } from 'react';

export default class Footer extends Component {

  render() {
    return (
      <footer>
        <div className="contact">
          <ul className="social">
            <li>
              <a href="#"
                title="Youtube"
                className="youtube"
                target="_blank"
                rel="external"
              >
                Youtube
              </a>
            </li>
            <li>
              <a
                href="#"
                title="Facebook"
                className="facebook"
                target="_blank"
                rel="external"
              >
                Facebook
              </a>
            </li>
            <li>
              <a href="#"
                title="Instagram"
                className="instagram"
                target="_blank"
                rel="external"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}
