import React from 'react';
import  {Link}  from 'react-router-dom'
import Buttons from './Buttons'
import styled from 'styled-components';

const ButtonDiv = styled.div`
  display:flex;
  justify-content:end;
  
`

const Card = () => {
    return (
      <div className="card">
        <img className="card-img-top" style={{height:'210px',width:'100%'}} src="https://img-19.ccm2.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"  alt="picture_profile"/>
        <div className="card-body">
            <button style={{height:"130px",width:"130px",borderRadius:"100%",position:'relative',bottom:"90px"}}> <img className="card-img-top" style={{height:"130px",width:"130px",borderRadius:"100%",position:'relative',right:"8px",bottom:"2px"}} src="https://img-19.ccm2.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"  alt="picture_profile"/></button>
            <ButtonDiv>
              <Buttons 
                text="Edit Profil"
                styleBoostrap= "outline-secondary"
              />
            </ButtonDiv>
            <h5 className="card-title">Coma Nas</h5>
            <h6>Coma_nas</h6>
          <div className='d-flex'>
            <img src="https://img.icons8.com/fluency-systems-regular/21/000000/calendar--v1.png" alt="icon_calendary"/>
              Joined January 2022
          </div>
            <div className='d-flex mt-2'>
              <Link to="/" ><p>10 Following</p></Link>
              <Link to="/" ><p className='mx-2'>1 Followers</p></Link>
            </div>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className='d-flex'>
              <Link to="/" ><p>Tweets</p></Link>
              <Link to="/" ><p className='mx-2'>Tweets  replies</p></Link>
              <Link to="/" ><p>Media</p></Link>
              <Link to="/" ><p className='mx-2'>Like</p></Link>
            </div>
        </div>
      </div>
    );
};

export default Card;