import React from 'react';

import {Jumbotron,Image,Col} from 'react-bootstrap';
import Footer from './Footer';
import logo from './house.jpeg';

export default function Home() {
    const marginTop = {
        marginTop: "20px"
    }

    return (
        <div>
            <Col lg={12} style={marginTop}>
                <Jumbotron fluid align="center" >
                <h1>Welcome to Uni Boarding Tracker</h1>
                    <blockquote className="blockquote mb-0">
                        <p>
                            Find your boarding or tell about your boarding places to us
                        </p>
                        
                        <Footer className="blockquote-footer">
                            <Footer/>
                        </Footer>
                    </blockquote>
                </Jumbotron>
                <div align="center">
                    <Image src={logo} fluid />
                </div>
                
            </Col>
            
        </div>
        
        
    );
}
