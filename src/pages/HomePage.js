import React from 'react';
import Nav from '../components/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CenterBar from '../components/CenterBar';
import NavTopHome from '../components/NavTopHome';





const HomePage = () => {

    return (
        
            <>
                
                <Container>
                    <Row>
                        <Nav/> 
                            <Col md={7}>

                                                                
                            <NavTopHome />
                            <CenterBar/>
                            </Col>

                            <Col md={3}>

                            </Col>
                    </Row>
                </Container>
            </>
        
    );
};

export default HomePage;