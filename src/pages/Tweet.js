import React from 'react';
import { useParams } from 'react-router-dom';
import getTweetById from '../api/getTweetById';
import { useState, useEffect } from 'react';
import Card  from 'react-bootstrap/Card';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from '../components/Nav'
import CardTrends from '../components/CardTrends';
import CardFollow from '../components/CardFollow';
import NavTopFixe from '../components/NavTopFixe';
import moment from 'moment';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';

const Flex = styled.div`
display: flex;
align-items: center`

const Form = styled.form`
display: flex;
flex-direction: column;`

const Input = styled.input`
border : none;
outline : none;
width : 100%;
`

const Margin = styled.div`
margin-top : 20px;
`

const Flex1 = styled.div`
display : flex;
justify-content : space-between;
width : 100%;`


const Button = styled.button`
background-color: #4a90e2;
color: white;
border-radius : 20px;
border : none;
padding : 6px 15px;
:disabled{
    opacity : 0.2
}
&:hover:enabled{
	background-color: #1A8DD9;
}`

const Logo = styled.img`
padding : 10px;`


const Tweet = () => {
    const {id} = useParams()
    const [tweet, setTweet] = useState(null)
    const {user} = useContext(UserContext)
    useEffect(() => {
        fetchTweet()
        console.log("My array of tweet", tweet)
    },[])

    const fetchTweet = async () => {
        const tweet = await getTweetById(id)
        setTweet(tweet)
        console.log("My array of tweet", tweet);
    }

    const formik = useFormik({
        initialValues : {
            content: "",
        },
        onSubmit : values => {
            postComment(values)
            console.log(JSON.stringify(values))
        }
    })

    const postComment = async (values) => {
        const commentResponse = await fetch('http://localhost:5000/comments', {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                content: values.content,
                author: user._id,
                tweet: tweet._id,
            })
        })   
        const data = await commentResponse.json()
        console.log(data);
    }

    if (!tweet) {
        return (
            <p> Loading... </p>
        )
    }

    console.log(formik.values);

    return (
        <Container>
            <Row>
                <Nav/>
                <Col md={7}>
                    <NavTopFixe/>
                    <Card style={{marginTop : '70px'}}>
                        <Card.Body>
                            <Flex> 
                                <div>
                                    <img src="https://img.icons8.com/ios-filled/30/000000/user-female-circle.png" alt="user profile"/>
                                </div>
                                <div>
                                    <Card.Title>{tweet.author.name} </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">@{tweet.author.pseudo} </Card.Subtitle>    
                                </div>
                            </Flex>
                            <Card.Text>
                                {tweet.content}
                            </Card.Text>  
                            <div> {moment(tweet.createdAt).format('MMM-DD')} </div>
                            <div style={{marginBottom: '20px'}}> {tweet.retweets.length} Retweets </div>
                            <div style={{borderBottom:'1px solid lightgray', paddingBottom: '20px'}}>
                            <div>
                                            <img  style={{cursor : 'pointer',marginRight:"10px"}} src="https://img.icons8.com/ios/18/000000/topic.png" alt="icon_comments"/>
                                            {tweet.comments.length}
                                            <img  style={{cursor : 'pointer',marginLeft:"100px"}}  src="https://img.icons8.com/fluency-systems-regular/18/000000/retweet.png" alt="icon_retweets"/> 162
                                            <img style={{cursor : 'pointer',marginLeft:"100px"}} src="https://img.icons8.com/material-outlined/18/000000/hearts.png" alt="icone_coeur"/> 23k
                                            <img style={{cursor : 'pointer',marginLeft:"100px"}} src="https://img.icons8.com/external-bearicons-glyph-bearicons/18/000000/external-Share-social-media-bearicons-glyph-bearicons.png" alt="icon_share"/>
                                        </div>
                            </div>                                                                         
                        </Card.Body>
                        <Margin style={{borderBottom : '1px solid lightgray'}}> 
                            <Form onSubmit={formik.handleSubmit}> 
                            <p> Replying to @{tweet.author.pseudo}</p>
                            <Flex>
                                <Link to='/homePage'> <img src="https://img.icons8.com/ios-filled/35/000000/user-female-circle.png" alt="user profile"/></Link>
                                <Input 
                                placeholder="Tweet your reply"
                                name = "content"
                                type= "text"
                                onChange={formik.handleChange}
                                value={formik.values.content}
                                /> 
                            </Flex>
                                <Flex1>
                                    <div>
                                        <Link to='/homePage'><Logo src="https://img.icons8.com/fluency-systems-regular/25/4a90e2/image.png" alt="imagefile"/></Link>
                                        <Link to='/homePage'><Logo src="https://img.icons8.com/ios-glyphs/25/4a90e2/attach-gif.png" alt="gif"/></Link>
                                        <Link to='/homePage'><Logo src="https://img.icons8.com/windows/25/4a90e2/smile-beam.png" alt="emoji"/></Link>
                                        <Link to='/homePage'><Logo src="https://img.icons8.com/ios/25/4a90e2/marker--v1.png" alt="location"/></Link>
                                    </div>
                                    <Button 
                                        type='submit' 
                                        disabled={!formik.values.content} 
                                    > 
                                        Reply
                                    </Button>
                                </Flex1>
                            </Form>
                        </Margin>
                    <div>
                        {tweet.comments.map(comment => 
                            <div style={{display : 'flex', alignItems: 'center'}}>
                                <div> 
                                    <img src="https://img.icons8.com/ios-filled/35/000000/user-female-circle.png" alt="user profile" style={{marginRight : '10px'}} /> 
                                </div>
                                <div style={{borderBottom : '1px solid lightgray', width : '500px', paddingTop : '20px'}}> 
                                    <div style={{display : 'flex'}}>
                                        <h6> {comment.author.name} </h6>
                                        <span> @{comment.author.pseudo} </span>
                                    </div>
                                    <p> Replying to @{tweet.author.pseudo}</p>
                                    <p> {comment.content} </p>
                                </div>

                            </div>
                            )}
                    </div>
                    </Card>
                </Col>
                <Col md={3}>
                    <CardTrends/>
                    <CardFollow/>
                </Col>
            </Row>
        </Container>
    );
};

export default Tweet;