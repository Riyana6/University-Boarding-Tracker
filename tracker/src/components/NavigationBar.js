import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

export default function NavigationBar() {

    return (
        
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Features</Nav.Link>
                <Nav.Link href="#">Pricing</Nav.Link>
            </Nav>
        </Navbar>
    );
}
