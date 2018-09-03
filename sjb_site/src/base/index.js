import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import About from './components/About'
import Projects from './components/Projects'
import Game from './components/Game'

ReactDOM.render(
    <Router>
    <div>
    <Route path="/" component={App} />
    {/* exact matches homepage route only */}    
    <Route exact path="/" component={About} />  
    <Route path="/projects" component={Projects} />
    <Route path="/game" component={Game} />
    </div>    
    </Router>
    ,
  document.getElementById('root'));
