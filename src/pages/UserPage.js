import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from '../components/Nav';
import Card from '../components/Card'
import NavTopFixe from '../components/NavTopFixe';
import styled from 'styled-components';
import CardTrends from '../components/CardTrends'
import CardFollow from '../components/CardFollow'

const MarginCard = styled.div`
    margin-top:50px
`

const UserPage = () => {
    return (
        <Container fluid>
            <Row>
                <Nav/>
                <Col md={6} className=''>
                    <MarginCard>
                        <Card />
                    </MarginCard>                                          
                    <NavTopFixe 
                        title="comar"
                        tweet="0tweet"
                    />
                    <h5>Comar nas</h5>
                    <p>0tweet</p>
                    <h5>Comar nas</h5>
                    <p>0tweet</p>
                    <h5>Comar nas</h5>
                    <p>0tweet</p>  
                </Col>
                <Col md={3}>
                    <CardFollow/>
                    <CardTrends/>
                </Col>
            </Row>
        </Container>
    );
};

export default UserPage;