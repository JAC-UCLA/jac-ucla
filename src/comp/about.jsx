import React, { Component } from 'react';

import background from '../assets/about.svg'

export default class About extends Component {
    render(){
        return (
            <div className="about">
                <div className="title">
                    About Us
                </div>
                <div className="body">
                 <p>
                Hi and welcome to UCLA’s Japanese Animation club webpage!
                </p>
                <p>
                We’re a club dedicated to facilitating both on and off-campus gatherings
                for the appreciation of Japanese anime and culture!
                We welcome all anime fans to join us at our club-hosted events and local conventions,
                to meet with others who share the same passion for art and entertainment. 
                </p>
                </div>
            </div>
        )
    }
}