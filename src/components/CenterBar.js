import React, { useEffect, useState,useContext } from 'react';
import { useFormik } from 'formik'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import getTweets from '../api/getTweets'
import Card  from 'react-bootstrap/Card';
import createTweets from '../api/createTweets';
import { UserContext } from '../contexts/User';
import ModalComment from './ModalComment';

const Border = styled.div`
border-right : 1px solid lightgray;
display : inline-block;
width : 100%;
`
const Form = styled.form`
display: flex;
flex-direction: column;`

const Input = styled.input`
border : none;
outline : none;
width : 100%;
:focus +Label{
    visibility: visible;
}
`

const Tweet = styled.div`
margin-top : 50px;
`

const Flex = styled.div`
display : flex;
justify-content : space-between;
width : 100%;`

const Label = styled.label`
visibility:hidden;
margin-top: 20px;
span {
    color : #4a90e2
}
`
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

const Hover = styled.div`
&:hover{
    background-color: lightgray;
    transition: 1s;
    border-radius: 5px
}
`


const CenterBar = () => {
    const {user} = useContext(UserContext)
    const [tweets, setTweets] = useState(null)
    // const [showModalComments, setShowModalComments] = useState(false)
    const [indexContent , setIndexContent] = useState(null)
    
    useEffect(() => {
        fetchTweets()
    }, [])
    
    const closeModalCom = () => setIndexContent(null);
    // const showModalCom = () => setShowModalComments(true);
    // console.log("mon state modal commentaire",showModalComments);

    const fetchTweets = async () => {
        const tweets = await getTweets()
        console.log("array of tweets", tweets);
        setTweets(tweets)
    }

    const fetchPostTweet = async (values) => {
        const postTweet = await createTweets(values)
        console.log(postTweet);
    }
    
    const formik = useFormik({
        initialValues: {
            text : ""  
        },
        onSubmit : values => {
            console.log(values);
            fetchPostTweet({
                ...values,
                author: user._id
            })
        }
    })
    if (!tweets) {
        return (
            <p> Loading... </p>
        )
    }
    // console.log(" mon utilisateur conecter",user);
    // console.log(indexContent);
    // console.log("mon state tweet recup de la route feed",tweets );
    return (
        <>
            <Border>
                <Tweet> 
                    <p> <Link to='/homePage'> <img src="https://img.icons8.com/ios-filled/35/000000/user-female-circle.png" alt="user profile"/></Link></p>
                    <Form onSubmit={formik.handleSubmit}> 
                        <Input 
                        placeholder="What's happening?"
                        name = "text"
                        type= "text"
                        onChange={formik.handleChange}
                        value={formik.values.text}
                        /> 
                        <Label for='information'> 
                            <img src="https://img.icons8.com/windows/20/4a90e2/globe.png" alt="globe"/>
                            <Link to='/'> <span> Everyone can reply </span> </Link>
                        </Label>
                        <Flex>
                            <div>
                                <Link to='/homePage'><Logo src="https://img.icons8.com/fluency-systems-regular/25/4a90e2/image.png" alt="imagefile"/></Link>
                                <Link to='/homePage'><Logo src="https://img.icons8.com/ios-glyphs/25/4a90e2/attach-gif.png" alt="gif"/></Link>
                                <Link to='/homePage'><Logo src="https://img.icons8.com/windows/25/4a90e2/bar-chart.png" alt="sondage"/></Link>
                                <Link to='/homePage'><Logo src="https://img.icons8.com/windows/25/4a90e2/smile-beam.png" alt="emoji"/></Link>
                                <Link to='/homePage'><Logo src="https://img.icons8.com/pastel-glyph/25/4a90e2/overtime--v1.png" alt="schedule"/></Link>
                                <Link to='/homePage'><Logo src="https://img.icons8.com/ios/25/4a90e2/marker--v1.png" alt="location"/></Link>
                            </div>
                            <Button 
                                type='submit' 
                                disabled={!formik.values.text} 
                            > 
                                Tweet 
                            </Button>
                        </Flex>
                    </Form>
                </Tweet>
                <div className='d-flex flex-column align-items-center'>
                                {tweets.map((tweet, index) =>
                                    
                                            <Card key={index} style={{ width: '100%' }}>
                                                
                                                    <Hover> 
                                                            <Card.Body >
                                                                <Link to={`/tweets/${tweet._id}`} style={{ textDecoration: 'none', color : 'black'}}> 
                                                        
                                                                    <Card.Title>{tweet.author.name} </Card.Title>
                                                                    <Card.Subtitle className="mb-2 text-muted">@{tweet.author.pseudo} </Card.Subtitle>    
                                                                        <Card.Text>
                                                                            {tweet.content}
                                                                        </Card.Text>  
                                                                </Link>                                 
                                                            <div>
                                                                <img  style={{cursor : 'pointer'}} onClick={()=>setIndexContent(index)}  src="https://img.icons8.com/ios/18/000000/topic.png" alt="icon_comments"/>
                                                                {tweet.comments.length}
                                                            </div>
                                                         
                                                            <ModalComment
                                                                closeModal={closeModalCom}
                                                                showModal={index === indexContent}
                                                                name = {user.name}
                                                                pseudo={user.pseudo}
                                                                content={tweet.content} 
                                                                idTweet={tweet._id}                         
                                                            />
                                                    
                                                        </Card.Body>
                                                    </Hover>         
                                                
                                            </Card>            
                                )}  
                            
                </div>
            </Border>
        </>
    );
};

export default CenterBar;