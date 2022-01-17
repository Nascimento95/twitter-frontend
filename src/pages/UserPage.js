import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from '../Components/Nav';
import Card from '../Components/Card';
import styled from 'styled-components';
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
                    <scrollMidleDiv>                       
                   <Card />
                   <h5>Comar nas</h5>
                        <p>0tweet</p>
                        <h5>Comar nas</h5>
                        <p>0tweet</p>
                        <h5>Comar nas</h5>
                        <p>0tweet</p>
                    </scrollMidleDiv>
                </Col>
                <Col md={3}>sm=true</Col>
            </Row>
        </Container>
    );
};

const scrollMidleDiv = styled.div`
    width: 300px;
    height: 100px;
    overflow-y: scroll;
    scrollbar-color: rebeccapurple green;
    scrollbar-width: thin;
`
const floatLeftDiv = styled.div`
    float: left;
`
export default UserPage;