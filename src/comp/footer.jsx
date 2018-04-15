import React from 'react';
import pusheen from '../assets/pusheen.png';
import footerimg from '../assets/design18-min.png';

class Footer extends React.Component {
        constructor(props){
            super(props)
            this.state  = {
                imgUrl: footerimg,
            }
            this.activatePusheen = this.activatePusheen.bind(this);
        }

        activatePusheen() {
            this.setState({ imgUrl : pusheen})
        }

        render() {
            return (
                <div className="footer-wrapper">
                    <img className="footer-img" alt='' src={this.state.imgUrl}></img>
                    <p> Email us: jacucla@gmail.com </p>
                    <p onClick={this.activatePusheen}>© 2018 Japanese Animation Club at UCLA</p>
                </div>
            )
        }
}
export default Footer;