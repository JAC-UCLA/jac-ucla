import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './comp/navbar.jsx'
import Main from './comp/main.jsx';
import About from './comp/about.jsx';
import Join from './comp/join.jsx';
import Footer from './comp/footer.jsx';

class App extends React.Component {
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

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
