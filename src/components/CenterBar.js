import React from 'react';
import { useFormik } from 'formik'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const Border = styled.div`
border-right : 1px solid lightgray;
display : inline-block;
scroll : auto;
`
const Form = styled.form`
display: flex;
flex-direction: column;`

const Input = styled.input`
border : none;
outline : none;
:focus +Label{
    visibility: visible;
}
`

const Nav = styled.div`
display : flex;
justify-content: space-between;
`

const Tweet = styled.div`
display: flex;
`
const Validate = styled.div`
display: flex;
justify-content : space-between`

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
&:hover:enabled{
	background-color: #1A8DD9;
}`

const Logo = styled.img`
padding : 10px;`


const CenterBar = () => {

    const formik = useFormik({
        initialValues: {
            text : null,  
        },
        onSubmit : values => {
            alert(JSON.stringify(values))
        }
    })

    return (
        <>
            <Border>
                <Nav> 
                    <h4> Home </h4>
                    <img src="https://img.icons8.com/ios/20/000000/sparkling.png" alt="stars"/>
                </Nav>
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
                            <span> Everyone can reply </span>
                         </Label>
                    </Form>
                </Tweet>
                <Validate>
                    <div>
                        <Link to='/homePage'><Logo src="https://img.icons8.com/fluency-systems-regular/25/4a90e2/image.png" alt="imagefile"/></Link>
                        <Link to='/homePage'><Logo src="https://img.icons8.com/ios-glyphs/25/4a90e2/attach-gif.png" alt="gif"/></Link>
                        <Link to='/homePage'><Logo src="https://img.icons8.com/windows/25/4a90e2/bar-chart.png" alt="sondage"/></Link>
                        <Link to='/homePage'><Logo src="https://img.icons8.com/windows/25/4a90e2/smile-beam.png" alt="emoji"/></Link>
                        <Link to='/homePage'><Logo src="https://img.icons8.com/pastel-glyph/25/4a90e2/overtime--v1.png" alt="schedule"/></Link>
                        <Link to='/homePage'><Logo src="https://img.icons8.com/ios/25/4a90e2/marker--v1.png" alt="location"/></Link>
                    </div>
                    <div>
                        <Button 
                            type='submit' 
                            disabled={!formik.values.text} 
                        > 
                            Tweet 
                        </Button>
                    </div>
                </Validate>
                <div> 
                What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </div>
            

            </Border>
        </>
    );
};

export default CenterBar;