import React from 'react';
import Nav from '../components/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CenterBar from '../components/CenterBar';
import NavTopHome from '../components/NavTopHome';
import CardFollow from '../components/CardFollow';
import CardTrends from '../components/CardTrends';





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
                                <CardTrends/>
                                <CardFollow/>
                            </Col>
                    </Row>
                </Container>
            </>
        
    );
};

export default HomePage;