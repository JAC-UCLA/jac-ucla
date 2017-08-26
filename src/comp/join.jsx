import React, { Component } from 'react';

export default class JoinBanner extends Component {
    render(){
        return (
            <div className="join">
                {/* insert join banner svg (?) */}
                <div className="container">
                <div className="discord link">
                    <h1>can't wait to hang out?</h1>
                    {/* insert svg */}
                    Join Our Discord!
                </div>
                <div className="facebook link">
                    <h1>Follow Us On</h1>
                    {/* insert svg */}
                    For the latest updates on club events!
                </div>
                <div className="mail link">
                    <h1>Join Our Mailing List</h1>
                    {/* insert svg */}
                    For Weekly Announcements
                </div>
                </div>
            </div>
        );
    }
}