import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import Form from './form.jsx';

class Admin extends Component {

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        Update Meeting Location / Time
        {
              !isAuthenticated() && (
                
                <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.login.bind(this)}
                style={{margin : 10}}
              >
                Log In
              </Button>

                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                    style={{margin : 10}}
                  >
                    Log Out
                  </Button>
                )
            }
        <div style={{display : "flex", justifyContent : "center"}}>
        <div style={{display : "flex", justifyContent: "center", flexDirection : "column"}}>
            {
              isAuthenticated() && (
                  <Form update={this.props.update}></Form>
                )
            }
            </div>
          </div>
      </div>
    );
  }
}

export default Admin;