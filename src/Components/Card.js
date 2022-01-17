import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
const Card = () => {
    return (
      <div className="card">
        <floatLeftDiv>

        <img style={{height:"210px",width: "100%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTan4BcwLXycNnmGnOopb2IAw1u9zSxNMvQew&usqp=CAU" className="card-img-top" alt="picture_profile"/>
        <div className="card-body">
        <button >Edit profile</button>
          <h5 className="card-title">Coma Nas</h5>
          <h6>@Coma_nas</h6>
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
            <Link to="/" ><p className='mx-2'>Tweets & replies</p></Link>
            <Link to="/" ><p>Media</p></Link>
            <Link to="/" ><p className='mx-2'>Like</p></Link>
          </div>
        </div>
        </floatLeftDiv>
      </div>
    );
};
// const floatLeftDiv = styled.div`
//     position:absolute
// `
export default Card;