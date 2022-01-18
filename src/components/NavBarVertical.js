import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const Border = styled.div`
border-right : 1px solid lightgray;
display : inline-block;
position: fixed;
top: 0;
`
const Sticky = styled.div`
position : relative;
`


const LogoBlue = styled.p`
background-color : #1D9BF0;
border-radius : 50%;
height : 50px;
width : 50px;
padding : 15px;
margin-left : 110px;`
 


const Logo = styled.p`
margin : 20px 0px;
margin-left : 120px;
&:hover {
	background-color: #1A8DD9;
    border-radius: 33px;
    height : 40px;
    width : 40px;
}
`

const LogoUser = styled.div`
padding-top : 100px;
margin-left : 120px;`

const NavBarVertical = () => {
    return (
        <Sticky>
            <Border>
                <div>
                    <Logo> <Link to='/homePage'> <img src="https://img.icons8.com/color/30/000000/twitter--v1.png" alt="logo twitter" /> </Link> </Logo>
                    <Logo> <Link to='/homePage'><img src="https://img.icons8.com/ios-filled/30/000000/birdhouse.png" alt="maison"/> </Link> </Logo>
                    <Logo> <Link to='/homePage'><img src="https://img.icons8.com/ios/30/000000/hashtag.png" alt="explore"/></Link> </Logo>
                    <Logo> <Link to='/homePage'><img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/30/000000/external-bell-interface-dreamstale-lineal-dreamstale.png" alt="notifications"/>  </Link> </Logo>
                    <Logo> <Link to='/homePage'><img src="https://img.icons8.com/ios/30/000000/filled-message.png" alt="message"/> </Link> </Logo>
                    <Logo> <Link to='/homePage'><img src="https://img.icons8.com/material-outlined/30/000000/user--v1.png" alt="user"/></Link> </Logo>
                    <Logo> <Link to='/homePage'> <img src="https://img.icons8.com/material-outlined/30/000000/connection-status-off.png" alt="more"/> </Link></Logo>
                    <LogoBlue> <Link to='/homePage'><img src="https://img.icons8.com/fluency-systems-filled/20/ffffff/quill-pen.png" alt="write"/> </Link></LogoBlue>
                </div> 
                <LogoUser>
                    <p> <Link to='/homePage'> <img src="https://img.icons8.com/ios-filled/35/000000/user-female-circle.png" alt="user profile"/></Link></p>  
                </LogoUser>   
            </Border>
        </Sticky>
    );
};

export default NavBarVertical;