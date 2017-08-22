import React, { Component } from 'react';
import NavBar from './comp/navbar.jsx'
import Main from './comp/main.jsx';
import About from './comp/about.jsx';
import Join from './comp/join.jsx';
import Footer from './comp/footer.jsx';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Main />
        <About/>
        <Join />
        <Footer />
      </div>
    );
  }
}

export default App;
