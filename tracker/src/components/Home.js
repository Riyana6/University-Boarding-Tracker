import React from 'react';

import NavigationBar from './NavigationBar';
import {Container,Row,Jumbotron,Col} from 'react-bootstrap';

export default function Home() {
    const marginTop = {
        marginTop: "20px"
    }
    return (
        <div >
            <NavigationBar/>
            <Container>
                <Row>
                    <Col lg={12} style={marginTop}>
                        <Jumbotron className="bg-dark text-white">
                            <h1>Welcome to Uni Boarding Tracker</h1>
                            <blackquore className="blackquore mb-0">
                                <p>
                                    Find your boarding or tell about your boarding places to us
                                </p>
                                <footer className="blackquote-footer">

                                </footer>
                            </blackquore>
                        </Jumbotron>
                    </Col>
                    
                </Row>
            </Container>
        </div>
        
    );
}
