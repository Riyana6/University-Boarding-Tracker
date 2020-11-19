import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import Login from './Login';
import Signup from './Signup';
import { Link } from 'react-router-dom';
export default function NavigationBar() {

    return (
        
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/Home">Home</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav><Link to={Login}>Login</Link></Nav>
                <Nav><Link to={Signup}>Signup</Link></Nav>
            </Nav>
            
        </Navbar>
    );
}
