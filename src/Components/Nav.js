import React from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col'
const Nav = () => {
    return (
        <Col md={2}> 
            <p> <Link to='/homePage'> <img src="https://img.icons8.com/color/35/000000/twitter--v1.png" alt="logo twitter" /> </Link> </p>
            <p><Link to='/homePage'><img src="https://img.icons8.com/ios-filled/35/000000/birdhouse.png" alt="maison"/>Home </Link></p>
            <p><Link to='/homePage'><img src="https://img.icons8.com/ios/35/000000/hashtag.png" alt="explore"/>Explore</Link></p>
            <p><Link to='/homePage'><img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/35/000000/external-bell-interface-dreamstale-lineal-dreamstale.png" alt="notifications"/>Notifications  </Link> </p>
            <p><Link to='/homePage'><img src="https://img.icons8.com/ios/35/000000/filled-message.png" alt="message"/>Messages </Link> </p>
            <p><Link to='/homePage'><img src="https://img.icons8.com/material-outlined/35/000000/user--v1.png" alt="user"/>Bookmarks</Link> </p>
            <p> <Link to='/homePage'> <img src="https://img.icons8.com/material-outlined/35/000000/connection-status-off.png" alt="more"/>Lists </Link></p>
            <p> <Link to='/userPage'> <img src="https://img.icons8.com/material-sharp/35/000000/user.png" alt="icon_profile"/>Profile </Link></p>
        </Col>
    );
};

export default Nav;