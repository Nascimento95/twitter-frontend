import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Container>
            <Row>
                <Col md={2}> 
                    <p> <Link to='/homePage'> <img src="https://img.icons8.com/color/35/000000/twitter--v1.png" alt="logo twitter" /> </Link> </p>
                    <p><Link to='/homePage'><img src="https://img.icons8.com/ios-filled/35/000000/birdhouse.png" alt="maison"/> </Link> </p>
                    <p><Link to='/homePage'><img src="https://img.icons8.com/ios/35/000000/hashtag.png" alt="explore"/></Link> </p>
                    <p><Link to='/homePage'><img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/35/000000/external-bell-interface-dreamstale-lineal-dreamstale.png" alt="notifications"/>  </Link> </p>
                    <p><Link to='/homePage'><img src="https://img.icons8.com/ios/35/000000/filled-message.png" alt="message"/> </Link> </p>
                    <p><Link to='/homePage'><img src="https://img.icons8.com/material-outlined/35/000000/user--v1.png" alt="user"/></Link> </p>
                    <p> <Link to='/homePage'> <img src="https://img.icons8.com/material-outlined/35/000000/connection-status-off.png" alt="more"/> </Link></p>
                    <p> <Link to='/homePage'> <img src="https://img.icons8.com/fluency-systems-filled/35/000000/quill-pen.png" alt="write"/> </Link></p>
                </Col>
                <Col md={6}>sm=true</Col>
                <Col md={4}>sm=true</Col>
            </Row>
        </Container>
    );
};

export default HomePage;