import React from 'react';
import CONTENT from '../content.json';
import NavBar from './navbar.jsx';
import Main from './main.jsx';
import About from './about.jsx';
import Join from './join.jsx';
import Kirigami from './kirigami.jsx';
import Midnight from './midnight.jsx';
import Fresh from './fresh.jsx';
import Footer from './footer.jsx';

class App extends React.Component {

  render() {
    return (
      <div>
      <NavBar />
        <div className="container">
          <Main content={{...CONTENT, ...this.props.content}} />
          <span id="id_about" className="anchor"></span>
          <About content={{...CONTENT, ...this.props.content}} />
          <span id="id_fresh" className="anchor"></span>
          <Fresh />          
          <span id="id_kirigami" className="anchor"></span>
          <Kirigami />
          <span id="id_midnight" className="anchor"></span>
          <Midnight />
          <span id="id_join" className="anchor"></span>
          <Join />
        </div>
      <Footer />
      </div>
    );
  }
}

export default App;