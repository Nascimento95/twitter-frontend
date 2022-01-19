import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
    display: flex;
    justify-content: end;
    overflow: hidden;
    background-color: rgba(252, 252, 252, 0.94);
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 85%; /* Full width */
    height: 50px;
    
    .titlenav{
        margin-right:56%;
        display:collum;
        p{
            padding-left:50px; 
        }
    }
    .im{
        widht:10px;
    }
    .iconinput{
        background: url(https://img.icons8.com/external-flatart-icons-outline-flatarticons/20/4a90e2/external-search-instagram-flatart-icons-outline-flatarticons.png) no-repeat scroll 20px 9px;
        height: 40px;
        width : 110px;
        margin-top:4px;
        border-width: 1px;
        border-style:solid none solid solid ;
        border-color:rgb(29, 155, 240);
        border-radius: 20px 0px 0px 20px;
        background-color:#EFF3F4;
    }
    input:focus {
        outline-color:rgb(29, 155, 240);
        outline-style: none;
        background-color: white;
    }
    input{
        width : 30%;
        border-width: 1px;
        border-style:solid solid solid none ;
        border-color:rgb(29, 155, 240);
        border-radius: 0px 20px 20px 0px;
        height: 40px;
        margin-top:4px;
        margin-right: 70px;
        background-color:#EFF3F4;
    }
`

const NavTopHome = () => {
    return (
        <Nav>
        <div className='titlenav'>
            <h5> Home </h5>
        </div>
        <div className='iconinput'>

        </div>
        <input 
        type="text"
        placeholder='Search Twitter'
        />
    </Nav>
    );
};

export default NavTopHome;