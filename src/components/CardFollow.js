import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
background-color: lightgray;
border radius: 10px;
margin-top: 70px;`

const Flex = styled.div`
display: flex;
justify-content: space-between;
`
const Button = styled.button`
background-color: black;
color: white;
border-radius:20px;
`


const CardFollow = () => {
    return (
        <Container>
           <h6> Who to follow </h6>
            <Flex> 
                <img src="https://img.icons8.com/ios-filled/35/000000/user-female-circle.png" alt="user profile" />
                <div> 
                    <p> Ronaldinho Gaucho</p>
                    <p> @ronaldinho </p>
                </div>
                <Button> Follow </Button>
            </Flex>
            <footer> <Link to='/'> Show more </Link> </footer> 
        </Container>
    );
};

export default CardFollow;