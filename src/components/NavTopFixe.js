import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
    display: flex;
    justify-content: end;
    overflow: hidden;
    background-color: rgba(252, 252, 252, 0.94);
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 75%; /* Full width */
    height: 50px;
    
    .titlenav{
        background: url(https://img.icons8.com/material-rounded/20/000000/left.png) no-repeat scroll 20px 13px;
        margin-right:56%;
        display:collum;
        h5{
            padding-left:50px;
        }
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
        width : 50%;
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

const NavTopFixe = () => {
    return (
        <Nav>
            <div className='titlenav'>
           
                <h5>Comar</h5> 
                <p>0tweet</p>
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

export default NavTopFixe;