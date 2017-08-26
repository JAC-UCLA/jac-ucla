import React, { Component } from 'react';
import stamp from '../assets/stamp.svg'

export default class MainBanner extends Component {
    render(){
        return (
            <div className="main">
                <img alt='' src={stamp}/>
            </div>
        );
    }
}