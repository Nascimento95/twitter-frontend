import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import getUsers from '../api/getUsers';
import { useState, useEffect } from 'react';


const Container = styled.div`
    background-color: #F7F9F9;
    border radius: 10px;
    margin-top: 70px;
    border-radius: 10px;
    padding: 5px;
    with: 100%;`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    `
const Footer = styled.div`
    text-decoration: none;`

const Text = styled.div`
    span {color : grey};
    margin-bottom : 15px;
    `
const Name = styled.div`
font-weight: 600;
color: black;`

const Hover = styled.div`
&:hover{
    background-color: lightgray;
    transition: 1s;
    border-radius: 5px
}
`
const EffectMore = styled.div`
&:hover{
    background-color: aqua;
    opacity : 0.2;
    transition: 0.1s;
    border-radius: 20px
}
`
const EngrenageHover = styled.div`
&:hover{
    background-color: lightgray;
    transition: 0.1s;
    border-radius: 15px
}
`
const CardTrends = () => {
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
    let selected = shuffled.slice(0, 5)
    console.log("selected5", selected);

    return (
        <Container>
            <Flex> 
                <h4> Trends for you </h4>
                <Link to='/'><EngrenageHover><img src="https://img.icons8.com/small/20/000000/gear.png" alt="engrenage"/></EngrenageHover></Link>
            </Flex>
            {selected.map(select => 
                <>
                    <Hover> 
                        <Link to='/' style={{ textDecoration: 'none' }}>
                                <Text>
                                    <Flex>
                                        <span> Trending in France</span>
                                        <Link to='/'> <EffectMore> <img src="https://img.icons8.com/material-outlined/26/000000/more.png" alt="more"/> </EffectMore> </Link>
                                    </Flex>
                                    <Name> {select.name} </Name>
                                    <span>{select.tweets.length} Tweets </span>
                                </Text> 
                        </Link>
                    </Hover>
                </>)}
            <Footer> <Link to='/'> Show more </Link></Footer>
        </Container>
    );
};

export default CardTrends;