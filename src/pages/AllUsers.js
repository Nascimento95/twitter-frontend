import React from 'react';
import getUsers from '../api/getUsers';
import { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap';
import Nav from '../components/Nav'
import SuggestedNavBar from '../components/SuggestedNavBar';
import CardTrends from '../components/CardTrends';

const Margin = styled.div`
margin-top : 70px`

const Flex1 = styled.div`
    display : flex;
    margin-bottom: 20px
    `

const Flex2 = styled.div`
    display : flex;
    width : 80%;
    margin-left: 40px;
    justify-content: space-between;
`

const Button = styled.button`
background-color: black;
color: white;
padding: 0px 10px;
height: 30px;
border-radius : 20px;
border-color: black;
&:hover{
    opacity : 0.7
}
`
const Span = styled.span`
color: grey`

const Policy = styled.div`
ul{
    flex-wrap: wrap;  
    display: flex;
   },
   li{
    flex-direction: row;
     list-style-type: none;
     flex-wrap: wrap;
     font-size: 12px;
   }`

const AllUsers = () => {
    const [users, setUsers] = useState(null)
    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const users = await getUsers()
        setUsers(users)
    }

    if (!users) {
        return (
            <p> Loading... </p>
        )
    }

    return (
        <Container>
            <Row>
            <Nav/> 
                <Col md={7}>
                    <SuggestedNavBar />
                    <Margin> 
                    {users.map(user => 
                        <Flex1>
                            <img src="https://img.icons8.com/ios-filled/30/000000/user-female-circle.png" alt="user profile"/>
                            <Flex2> 
                                <div>
                                    <h6>{user.name}</h6>
                                    <Span> @{user.pseudo} </Span>
                                </div>
                                <Button>
                                    Follow
                                </Button>    
                            </Flex2>
                        </Flex1>)}
                    </Margin>
                </Col>
                <Col md={3}>
                    <CardTrends/>
                    <Policy>
                <ul>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                    <li>Accessibility</li>
                    <li>Ads info</li>
                    <li>More...</li>
                    <li>© 2022 Twitter, Inc</li>
                </ul>
            </Policy>
                </Col>
            </Row> 
        </Container>
    );
};

export default AllUsers;