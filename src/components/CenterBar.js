import React, { useEffect, useState,useContext } from 'react';
import { useFormik } from 'formik'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import getTweets from '../api/getTweets'
import Card  from 'react-bootstrap/Card';
import createTweets from '../api/createTweets';
import { UserContext } from '../contexts/User';
import ModalComment from './ModalComment';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import deleteTweet from '../api/deleteTweet';


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


const CenterBar = () => {
    var moment = require('moment')
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
        // console.log(tweets);
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
            formik.resetForm();
            fetchTweets()
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
                {moment().format('DD-MM-YY')}
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
                        <> 
                            {tweets.map((tweet, index) => 
                                <Card key={index} style={{ width:'100%'}}>
                                    <Card.Body >
                                        <Card.Title className='d-flex justify-content-between' >
                                            <p>{tweet.author.name} <span className="fs-6 text-muted">@{tweet.author.pseudo} .</span><span className='fs-6 text-muted' style={{marginLeft:"10px"}}>{moment(tweet.createdAt).format('MMM-DD')}</span></p>
                                            <DropdownButton variant='bg-light'  id="dropdown-item-button" title="...">
                                                <Dropdown.ItemText></Dropdown.ItemText>
                                                <Dropdown.Item onClick={() =>deleteTweet(tweet._id)} className='' as="button"><img className='mx-3' src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/20/fa314a/external-delete-multimedia-kiranshastry-lineal-kiranshastry.png" alt="icon"/>delete</Dropdown.Item>
                                                <Dropdown.Item className='mt-3' as="button"><img className='mx-3' src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/20/000000/external-push-pin-business-management-kmg-design-basic-outline-kmg-design.png" alt="icon"/>Pin to your profile</Dropdown.Item>
                                                <Dropdown.Item className='mt-3' as="button"><img className='mx-3' src="https://img.icons8.com/windows/20/000000/add-property.png" alt="icon"/>Add/remove@{tweet.author.pseudo} from Lists</Dropdown.Item>
                                                <Dropdown.Item className='mt-3' as="button"><img className='mx-3' src="https://img.icons8.com/ios/20/000000/topic.png" alt="icon_comments"/>Change who can reply</Dropdown.Item>
                                                <Dropdown.Item className='mt-3' as="button"><img className='mx-3' src="https://img.icons8.com/external-tal-revivo-light-tal-revivo/20/000000/external-software-programming-language-with-brackets-and-slash-logotype-programing-light-tal-revivo.png" alt="icon"/>Embed Tweet</Dropdown.Item>
                                                <Dropdown.Item className='mt-3' as="button"><img className='mx-3' src="https://img.icons8.com/ios/20/000000/bar-chart--v1.png" alt="icon"/>View Tweet Activity</Dropdown.Item>
                                            </DropdownButton>
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>    
                                            <Card.Text>
                                                {tweet.content}
                                            </Card.Text>                                  
                                        <div>
                                            <img  style={{cursor : 'pointer',marginRight:"10px"}} onClick={()=>setIndexContent(index)}  src="https://img.icons8.com/ios/18/000000/topic.png" alt="icon_comments"/>
                                            {tweet.comments.length}
                                            <img  style={{cursor : 'pointer',marginLeft:"100px"}}  src="https://img.icons8.com/fluency-systems-regular/18/000000/retweet.png" alt="icon_retweets"/> 162
                                            <img style={{cursor : 'pointer',marginLeft:"100px"}} src="https://img.icons8.com/material-outlined/18/000000/hearts.png" alt="icone_coeur"/> 23k
                                            <img style={{cursor : 'pointer',marginLeft:"100px"}} src="https://img.icons8.com/external-bearicons-glyph-bearicons/18/000000/external-Share-social-media-bearicons-glyph-bearicons.png" alt="icon_share"/>
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
                                </Card>
                            )}           
                        </> 
                </div>
            </Border>
        </>
    );
};

export default CenterBar;