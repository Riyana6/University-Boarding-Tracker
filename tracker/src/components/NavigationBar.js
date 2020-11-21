import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function NavigationBar() {

    return (
        
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="mr-auto">
                <Link to={"Login"} className="nav-link">Login</Link>
                <Link to={"Signup"} className="nav-link">Signup</Link>
            </Nav>
        </Navbar>
    );
}
