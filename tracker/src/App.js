import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import {Container,Row,Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';
 

export default function App() {
    const marginTop = {
        marginTop: "20px"
    }

    return (
        <Router >
            <NavigationBar/>
            <Container>
                <Row>
                    <Col lg={12} style={marginTop}>
                        <Switch>
                            <Route path="/" exact component={Welcome}/>
                            <Route path="/Login" exact component={Login}/>
                            <Route path="/Signup" exact component={Signup}/>
                        </Switch>
                        
                    </Col>
                    
                    
                </Row>
            </Container>
        </Router>
        
    );
}

