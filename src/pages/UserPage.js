import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from '../Components/Nav';
import Card from '../Components/Card';

const UserPage = () => {
    return (
        <Container>
            <Row>
                <Nav/>
                <Col md={7}>
                    <div>
                        <h5>Comar nas</h5>
                        <p>0tweet</p>
                    </div>
                                          
                   <Card />
                   <h5>Comar nas</h5>
                        <p>0tweet</p>
                        <h5>Comar nas</h5>
                        <p>0tweet</p>
                        <h5>Comar nas</h5>
                        <p>0tweet</p>
                    
                </Col>
                <Col md={3}>sm=true</Col>
            </Row>
        </Container>
    );
};


export default UserPage;