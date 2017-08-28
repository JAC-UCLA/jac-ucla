import React from 'react';
import ReactDOM from 'react-dom';

import CONTENT from './content.json';
import NavBar from './comp/navbar.jsx';
import Main from './comp/main.jsx';
import About from './comp/about.jsx';
import Join from './comp/join.jsx';
import Footer from './comp/footer.jsx';
console.log(CONTENT);

class App extends React.Component {
  render() {
    return (
      <div>
      <NavBar />
        <div className="container">
          <Main content={CONTENT} />
          <span id="id_about" className="anchor"></span>
          <About content={CONTENT} />
          <span id="id_join" className="anchor"></span>          
          <Join />
          {/* <Kirigami />
          <Contact id = 'id_contact' /> */}
        </div>
      <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);