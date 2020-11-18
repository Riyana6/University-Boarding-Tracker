import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

export default function NavigationBar() {

    return (
        
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">Home</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#">Login</Nav.Link>
                <Nav.Link href="#">Signup</Nav.Link>
            </Nav>
        </Navbar>
    );
}
