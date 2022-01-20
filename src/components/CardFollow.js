import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import getUsers from '../api/getUsers';
import { useState, useEffect } from 'react';

const Container = styled.div`
background-color: #F7F9F9;
border radius: 10px;
margin: 30px 0px;
border-radius: 10px;
padding: 5px;
with: 100%;`

const Flex = styled.div`
display: flex;
justify-content: space-between;
padding : 5px;
align-items: center;
&:hover{
    background-color : lightgray;
    transition : 1s;
}
`
const Button = styled.button`
background-color: black;
color: white;
padding: 0px 10px;
border-radius : 20px;
border-color: black;
&:hover{
    opacity : 0.7
}
`
const Text = styled.div`
span {color : grey};
div {
    color : black;
    &:hover{
        text-decoration: underline;
        transition : 1s;}}
`

const Footer = styled.footer`
text-decoration: none;`

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
   



const CardFollow = () => {
    const [users, setUsers] = useState(null)

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const users = await getUsers()
        console.log("what's my users :", users);
        setUsers(users)
    }
    
    
    if (!users) {
        return (
            <p> Loading... </p>
        )
    }

    const shuffled = users.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 3)




    return (
        <>
            <Container>
                <h4> Who to follow </h4>
                {selected.map(select => 
                    <>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <Flex>
                                <div>
                                    <img src="https://img.icons8.com/ios-filled/35/000000/user-female-circle.png" alt="user profile" />
                                </div> 
                                <Text> 
                                    <div> {select.name} </div>
                                    <span> @{select.pseudo} </span>
                                </Text>
                                <div>
                                    <Button> Follow </Button>
                                </div>
                            </Flex>
                        </Link>
                    </>)}
                    <Footer> <Link to='/allUsers'> Show more </Link> </Footer> 
            </Container>
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
        </>
    );
};

export default CardFollow;