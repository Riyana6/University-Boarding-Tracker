import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

export default function NavigationBar() {

    return (
        
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/Home">Home</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="./Login">Login</Nav.Link>
                <Nav.Link href="./Signup">Signup</Nav.Link>
            </Nav>
        </Navbar>
    );
}
