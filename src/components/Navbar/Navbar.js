import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "white"
    }

    return (
        <div className="navbar-style mb-5 d-flex">
            <Nav className="me-auto ">
                <i className="fas fa-chalkboard-teacher size"></i>
                <NavLink className="pagename-style" to="/">
                    Zoodemy
                </NavLink>
            </Nav>
            <Nav>
                <NavLink className="link-style" to='/home' activeStyle={activeStyle}>Home</NavLink>
                <NavLink className="link-style" to="/service" activeStyle={activeStyle}>Services</NavLink>
                <NavLink className="link-style" to='/about' activeStyle={activeStyle}>About</NavLink>
                <NavLink className="link-style" to='/blog' activeStyle={activeStyle}>Blog</NavLink>
            </Nav>


        </div>

    );
};

export default Navbar;