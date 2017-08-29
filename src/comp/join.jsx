import React from 'react';
var banner = require('../assets/join.png')
var discord = require('../assets/discord.svg')
var facebook = require('../assets/facebook.svg')
var mail = require('../assets/mail.png')

const JoinBanner = () => {
        return (
            <div className="join mainelement">
                <img className="banner" src={banner} alt='' />
                <div className="join-container">
                <div className="icon"  className="discord link">
                    <h1>can't wait to hang out?</h1>
                    <img src={discord} alt=''/><br></br>
                    Join Our Discord!
                </div>
                <div className="facebook link">
                    <h1>Follow Us On</h1>
                    <img className="icon" src={facebook} alt=''/><br></br>
                    For the latest updates on club events!
                </div>
                <div className="mail link">
                    <h1>Join Our Mailing List</h1>
                    <img className="icon" src={mail} alt=''/><br></br>
                    For Weekly Announcements
                </div>
                </div>
            </div>
        );
}
export default JoinBanner;