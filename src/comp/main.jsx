import React from 'react';
import stamp from '../assets/stamp.svg'

const MainBanner = ({content}) => {
        return (
            <div className="main mainelement">
                <img className="stamp" alt='' src={stamp}/>
                <div className='meetinginfo'>
                    {content.meetingday} {content.meetingtime} @ {content.meetingroom}
                </div>
            </div>
        );
}
export default MainBanner;