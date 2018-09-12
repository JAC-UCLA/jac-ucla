import React from 'react';

class Home extends React.Component{

    showLock() {
      // Show the Auth0Lock widget
      this.props.lock.show();
    }
  
    render() {
      return (
      <div className="login-box">
        <a onClick={this.showLock}>Sign In</a>
      </div>);
    }
  }

  export default Home;