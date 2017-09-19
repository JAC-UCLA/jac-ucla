import React from 'react';

const Navbar = () => {
        return (
            <div className="navbar">
            <img className="navbar-logo" src={require('../assets/jaclogo-min.png')} alt=''></img>
                <ul>
                    <li><a href="#id_about">ABOUT</a></li>
                    <li><a href="#id_fresh">FRESH PRODUCE</a></li>
                    <li><a href="#id_kirigami">KIRIGAMI</a></li>
                    <li><a href="#id_join">SOCIAL</a></li>
                    <li><a href="mailto:jacucla@gmail.com">CONTACT</a></li>
                </ul>
            </div>
        );
}
export default Navbar;
