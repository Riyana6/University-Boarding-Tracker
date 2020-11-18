import React from 'react';
import {Navbar,Col,Container} from 'react-bootstrap';

export default function NavigationBar() {
    let fullYear = new Date().getFullYear();
    
    return (
        
        <Navbar fixed="bottom" bg="dark" variant="dark">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div>{fullYear}-{fullYear+1}, All Rights Reserved</div>
                    </Col>
                    
                </Row>
            </Container>
        </Navbar>
    );
}
