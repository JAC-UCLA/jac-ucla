import React from 'react';
import stamp from '../assets/stamp.svg'

const MainBanner = ({content}) => {
        return (
            <div className='main mainelement'>
            <div className='stamp-box'>
                <div className='stamp-content'>
                    <h2>Japanese</h2>
                    <h2>Animation</h2>
                    <h2>Club</h2>
                    <h3>@UCLA</h3>
                </div>
            </div>
            <div className='meetinginfo'>
                <h2>{content.meetingday} {content.meetingtime}</h2>
                <h2>@ {content.meetingroom}</h2>
            </div>
            </div>
            // <div className="main mainelement">
            //     <img className="stamp" alt='' src={stamp}/>
            //     <div className='meetinginfo'>
            //         {content.meetingday} {content.meetingtime} @ {content.meetingroom}
            //     </div>
            // </div>
        );
}
export default MainBanner;