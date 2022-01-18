import React from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';

const NavIcon = styled.div`
    position:fixed;
    margin-right:100px;
    img{
        margin-right:20px;
    }
    a{
        text-decoration:none;
        color:black;
    }
    p{
        font-size:20px;
        margin-right:100px;
    }
`
const Nav = () => {
    return (
        <Col md={2}> 
        <>
            <NavIcon>
            <p> <Link to='/homePage'> <img src="https://img.icons8.com/color/25/000000/twitter--v1.png" alt="logo twitter" /> </Link> </p>
            <p><Link to='/homePage'><img src="https://img.icons8.com/ios-filled/25/000000/birdhouse.png" alt="maison"/>Home </Link></p>
            <p><Link to='/homePage'><img src="https://img.icons8.com/ios/25/000000/hashtag.png" alt="explore"/>Explore</Link></p>
            <p><Link to='/homePage'><img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/25/000000/external-bell-interface-dreamstale-lineal-dreamstale.png" alt="notifications"/>Notifications  </Link> </p>
            <p><Link to='/homePage'><img src="https://img.icons8.com/ios/25/000000/filled-message.png" alt="message"/>Messages </Link> </p>
            <p><Link to='/homePage'><img src="https://img.icons8.com/material-outlined/25/000000/bookmark-ribbon--v1.png" alt='icon_bootmark'/>Bookmarks</Link> </p>
            <p> <Link to='/homePage'> <img src="https://img.icons8.com/fluency-systems-regular/25/000000/overview-pages-3.png" alt="Lists"/>List </Link> </p>
            <p> <Link to='/userPage'> <img src="https://img.icons8.com/material-sharp/25/000000/user.png" alt="icon_profile"/>Profile </Link></p>
            <p><Link to='/homePage'> <img src="https://img.icons8.com/material-outlined/25/000000/connection-status-off.png" alt="more"/>More </Link></p>
            </NavIcon>
        </>
        </Col>
    );
};

export default Nav;