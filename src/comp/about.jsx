import React from 'react';

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
                {body}
            </div>
        </div>
    )
}
export default About;