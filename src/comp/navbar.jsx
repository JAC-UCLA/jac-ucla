import React from 'react';

const Navbar = () => {
        return (
            <div className="navbar">
            <img className="navbar-logo" src={require('../assets/jaclogo-min.png')} alt=''></img>
                <ul>
                    <li><a href="#id_about">ABOUT</a></li>
                    <li><a href="#id_join">JOIN US</a></li>
                    <li><a href="#id_kirigami">KIRIGAMI</a></li>
                    <li><a href="https://www.facebook.com/groups/drawtheworld/">FRESH PRODUCE</a></li>
                    <li><a href="#id_contact">CONTACT US</a></li>
                </ul>
            </div>
        );
}
export default Navbar;
