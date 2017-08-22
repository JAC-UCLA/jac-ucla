import React, { Component } from 'react';
import stamp from '../../public/svg/stamp.svg'
import '../../public/stylesheets/main.css'

export default class MainBanner extends Component {
    render(){
        return (
            <div className="main">
                <img src={stamp}/>
            </div>
        );
    }
}