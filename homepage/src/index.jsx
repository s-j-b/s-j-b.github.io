import React, { Component } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
        <div className="App">
        <Header />
        <Footer />
        </div>
    );
  }
}

render(<App />, document.getElementById('container'));
