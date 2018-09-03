import React, { Component } from 'react';

import {
  Link
} from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
        <div className="header">
        <h1 class="T1">Simon Jupiter Bloch </h1>
        <h4 class="T2">Software Engineer & Researcher</h4>
        <Link to="/" className="col-md-4">Home</Link>
        <Link to="/projects" className="col-md-4">Projects</Link>
        <Link to="/game" className="col-md-4">Game</Link>
        </div>
    );
  }
}
