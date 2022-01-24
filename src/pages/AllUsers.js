import React from 'react';
import getUsers from '../api/getUsers';
import { useState, useEffect } from 'react';
import styled from 'styled-components'

const Flex1 = styled.div`
    display : flex;
    width : 20%;
    margin-bottom: 20px
    `

const Flex2 = styled.div`
    display : flex;
    width : 80%;
    margin-left: 20px;
    justify-content : space-between
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
        <div>
            <h4> Suggested for you </h4>
           {users.map(user => 
            <Flex1>
                <img src="https://img.icons8.com/ios-filled/35/000000/user-female-circle.png" alt="user profile"/>
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
        </div>
    );
};

export default AllUsers;