import React, { Component } from 'react';
import '../App.css'
import linkedin_logo from '../images/linkedin_logo.png'
import github_logo from '../images/github_logo.png'

class Footer extends Component {
  render() {
    return (
        <div className="footer">
        <a class="footer_link" href="https://github.com/s-j-b" target="_blank">
        <img className="footer_image" src={github_logo} alt="github_logo" href="https://github.com/s-j-b"/>
        </a>        
        <a class="footer_link" href="https://www.linkedin.com/pub/simon-bloch/8a/a30/1b3" target="_blank">
        <img className="footer_image" src={linkedin_logo} alt="linkedin_logo"/>
        </a>
        </div>
    );
  }
}

export default Footer;
