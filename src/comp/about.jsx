import React from 'react';
import jaciecute from '../assets/jaciecute.png';
import left from '../assets/left.svg';
import right from '../assets/right.svg';

// Gallery photos.
import pic1 from '../assets/photos/photo1.jpg';
import pic2 from '../assets/photos/photo2.jpg';
import pic3 from '../assets/photos/photo3.jpg';
import pic4 from '../assets/photos/photo4.jpg';
import pic5 from '../assets/photos/photo5.jpg';

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
                        <li data-target="#about-carousel" data-slide-to="3"></li>
                        <li data-target="#about-carousel" data-slide-to="4"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="item active">
                            <img className="carousel-img" src={pic2} alt=""></img>
                            <p className="carousel-caption">JAC's 2017 Maid Cafe</p>
                        </div>
                        <div className="item">
                            <img className="carousel-img" src={pic1} alt=""></img>
                            <p className="carousel-caption">JAC at Anime Expo 2017</p>
                        </div>
                        <div className="item">
                            <img className="carousel-img" src={pic3} alt=""></img>
                            <p className="carousel-caption">JAC's 2017 Maid Cafe</p>
                        </div>
                        <div className="item">
                            <img className="carousel-img" src={pic4} alt=""></img>
                            <p className="carousel-caption">JAC at UCLA Geek Week</p>
                        </div>
                        <div className="item">
                            <img className="carousel-img" src={pic5} alt=""></img>
                            <p className="carousel-caption">Anime Night at Feast</p>
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