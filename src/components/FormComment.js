import React,  { useContext} from 'react';
import  Form  from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { UserContext } from '../contexts/User';
const FormComment = ({tweetId, modalclose}) => {
    
    console.log("mon id du tweet selected" , tweetId);
    const {user} = useContext(UserContext)
    console.log(" lutilisateur dans mon formm comment",user);
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
                tweet: tweetId,
            })
        })   
        const data = await commentResponse.json()
        console.log(data);
        modalclose()
    }
    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Control 
                type="text" 
                id ="content"
                name="content"
                placeholder="Tweet your reply"
                onChange ={formik.handleChange}
                value ={formik.values.content}
                />
                <div style={{marginTop:"20px"}}>
                        <Link to='/homePage'><img style={{paddingLeft:"10px"}} src="https://img.icons8.com/fluency-systems-regular/25/4a90e2/image.png" alt="imagefile"/></Link>
                        <Link to='/homePage'><img style={{paddingLeft:"10px"}} src="https://img.icons8.com/ios-glyphs/25/4a90e2/attach-gif.png" alt="gif"/></Link>
                        <Link to='/homePage'><img style={{paddingLeft:"10px"}} src="https://img.icons8.com/windows/25/4a90e2/bar-chart.png" alt="sondage"/></Link>
                        <Link to='/homePage'><img style={{paddingLeft:"10px"}} src="https://img.icons8.com/windows/25/4a90e2/smile-beam.png" alt="emoji"/></Link>
                        <Link to='/homePage'><img style={{paddingLeft:"10px"}} src="https://img.icons8.com/pastel-glyph/25/4a90e2/overtime--v1.png" alt="schedule"/></Link>
                        <Link to='/homePage'><img style={{paddingLeft:"10px"}} src="https://img.icons8.com/ios/25/4a90e2/marker--v1.png" alt="location"/></Link>
                        <button style={{marginLeft:"190px"}} type="submit" className="btn btn-primary rounded-pill">Reply</button>
                </div>
            </Form.Group>
        </Form>
    );
};

export default FormComment;