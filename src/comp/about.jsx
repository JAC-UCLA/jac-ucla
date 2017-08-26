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
                Hi, we’re UCLA's one and only Japanese Animation Club!
                We have weekly club meetings (currently held in Humanities 169 Thursdays 7-9pm.
                Join our Sawtelle dinners, Con trips, and other adventures! 
                </div>
            </div>
        )
    }
}