import React from 'react';

var stamp =     (<svg height="201px" width="202px" version="1.1" viewBox="0 0 202 201">
<defs/>
<g id="Welcome" fill="none" stroke="none" strokeWidth="1">
    <g id="Desktop-HD" transform="translate(-55.000000, -169.000000)">
        <g id="2-Main-Banner" transform="translate(-1.000000, 98.000000)">
            <g id="Group" transform="translate(56.000000, 71.000000)">
                <rect height="198" id="Rectangle-11" width="198.832873" rx="8" stroke="#BF5A8B" strokeWidth="3" x="1.5" y="1.5"/>
                <text id="Japanese-Animation-C" fill="#AA507A" fontFamily="AdventPro-Bold, Advent Pro" fontSize="36">
                    <tspan x="26.2526504" y="95.0357056">J</tspan>
                    <tspan fontFamily=" Advent Pro" x="37" y="95">APANESE</tspan>
                    <tspan x="21.2526504" y="131.035706">A</tspan>
                    <tspan fontFamily=" Advent Pro" x="40.2246504" y="131">NIMATION</tspan>
                    <tspan x="21.2526504" y="167.035706">C</tspan>
                    <tspan fontFamily=" Advent Pro" x="36.7326504" y="167">LUB</tspan>
                </text>
                <text id="UCLA" fill="#AA507A" fontFamily="Raleway-Medium, Raleway" fontSize="20">
                    <tspan x="24.0994475" y="46">UCLA</tspan>
                </text>
            </g>
        </g>
    </g>
</g>
</svg>)

const MainBanner = ({content}) => {
        return (
            <div className='main mainelement'>
            <div className='meetinginfo'>
                {stamp}
                <h2>{content.meetingday} {content.meetingtime}</h2>
                <h2>@ {content.meetingroom}</h2>
            </div>
            </div>
        );
}
export default MainBanner;