import React from 'react';
import jaciecute from '../assets/jaciecute.png';
import left from '../assets/left.svg';
import right from '../assets/right.svg';

const About = ({content}) => {
    // Use %r%, %t%, and %d% in the about array in content to display the meeting
    // info in the about body.
    var body = content.about.map((text) => 
        <p>{
            text.replace("%r%", content.meetingroom)
                .replace("%t%", content.meetingtime)
                .replace("%d%", content.meetingday)
        }</p>
    );
    return (
        <div className="about mainelement">
            <div className="about-title">
                About Us
            </div>
            <div className="about-body">
                {body[0]}
                {body[1]}

                {/* Carousel */}
                <div id="about-carousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#about-carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#about-carousel" data-slide-to="1"></li>
                        <li data-target="#about-carousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="item active">
                            <img src={jaciecute} alt=""></img>
                            <p className="carousel-caption">Test</p>
                        </div>

                        <div className="item">
                            <img src={jaciecute} alt=""></img>
                        </div>

                        <div className="item">
                            <img src={jaciecute} alt=""></img>
                        </div>
                    </div>

                    <a className="left carousel-control" href="#about-carousel" data-slide="prev">
                        <img className="left-icon" src={left}></img> 
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#about-carousel" data-slide="next">
                        <img className="right-icon" src={right}></img> 
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                {body[2]}
                {body[3]}
                {body[4]}

                <img className="about-jacie" alt="" src={jaciecute}></img>
            </div>
        </div>
    )
}
export default About;