import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';

class NavigationBar extends React.Component {
    render () {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Login</Nav.Link>
                    <Nav.Link href="#">Signup</Nav.Link>
                    </Nav>
            </Navbar>
        )
    }
}

export default NavigationBar;