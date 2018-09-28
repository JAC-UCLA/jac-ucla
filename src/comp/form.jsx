import React from 'react';
import data from '../content.json';
var request = require("request");

class Form extends React.Component {
    constructor(props) {
        super()
        this.state = data;
        this.handleRoomChange = this.handleRoomChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleAboutChange = this.handleAboutChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
    handleRoomChange(event) {
        this.setState({meetingroom: event.target.value});
    }

    handleTimeChange(event) {
        this.setState({meetingtime: event.target.value});
    }

    handleDayChange(event) {
        this.setState({meetingday: event.target.value});
    }

    handleAboutChange(event) {
        this.setState({about: event.target.value});
    }
    
    async handleSubmit(event) {
        let accessToken = localStorage.getItem('access_token');
        var options = {
            method: 'POST',
            url: 'http://localhost:3000/update',
            json: true,
            body: { "test" : "test"},
            headers: { authorization: `Bearer ${accessToken}`},
        }
        // TODO : complete post request that sends location, time, etc. data from state
        // Tips : 1. you can get state using this.state
        //        2. documentation of request here https://www.npmjs.com/package/request#oauth-signing
        //        3. you can test your success by printing the request on the server (server.js)
        request(options, (error, response, body) => {
            console.log(body)
            // TODO : handle success by redirecting to index or logging message for the user
            if (error) throw new Error(error);
            // TODO : log error for user
            console.log(body)
        });
        event.preventDefault();
    }

    render() {
        let formStyle = {
            display : "flex",
            flexDirection : "column",
            alignItems : "start",
            paddingTop : 10,
        }

        return (
            <form onSubmit={this.handleSubmit}>
            <div style={formStyle}>
            <label style={{padding : 10}}>
                Room / Location :  
                <input style={{margin : 10, width : 150}} type="text" value={this.state.meetingroom} onChange={this.handleRoomChange} />
            </label>
            <label style={{padding : 10}}>
                Time :
                <input style={{margin : 10, width : 150}} type="text" value={this.state.meetingtime} onChange={this.handleTimeChange} />
            </label>
            <label style={{padding : 10}}>
                Day :
                <input style={{margin : 10, width : 150}} type="text" value={this.state.meetingday} onChange={this.handleDayChange} />
            </label>
            <label style={{padding : 10}}>
                About <br></br>
                <textarea style={{width : 350, height: 150}} type="text" value={this.state.about} onChange={this.handleAboutChange} />
            </label>
            </div>
            <input type="submit" value="Submit" />
            </form>
        );
        }
    }

  export default Form;