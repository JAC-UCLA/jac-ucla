import React from 'react';

const Kirigami = () => {
        return (
            <div className="kirigami mainelement">
                {/* <div className="kirigami-text">Kirigami</div> */}
                <img className='kirigami-logo' alt='' src={require('../assets/kirigami.svg')}></img>
                <div className="kirigami-text">
                    <h1>JAC's Idol Group</h1>
                    <h2>Beginner-friendly dance and cosplay!</h2>
                    <h2>Weekly <u>Practice</u> and Quarterly <u>Peformances</u></h2>

                </div>
            </div>
        );
}
export default Kirigami;