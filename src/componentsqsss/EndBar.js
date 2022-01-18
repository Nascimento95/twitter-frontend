import React from 'react';
import { useFormik } from 'formik'
import styled from 'styled-components'

const Input = styled.input`
border-radius : 25px;
background-color : #EFF3F4;
border :none;
outline : none;
margin : 15px;
width : 70%;
padding : 8px;
margin-right : 20px;
::-webkit-input-placeholder {
    font-family: FontAwesome;
    font-weight: normal;
    overflow: visible;
    vertical-align: top;
    display: inline-block !important;
    padding-left: 5px;
    padding-top: 2px;
};`

const Scroll = styled.div`
scroll : hidden;`



const EndBar = () => {
    const formik = useFormik({
        initialValues: {
            text : null,  
        },
        onSubmit : values => {
            alert(JSON.stringify(values))
        }
    })
    return (
        <Scroll>
            <form>
                <Input
                
                    placeholder="&#61442; Search Twitter"
                    name= "text"
                    type = "text"
                    onChange={formik.handleChange}
                    value={formik.values.text} 
                />
            </form>
            <div>
                <h3> Trends for you </h3>
                
            </div>
            
        </Scroll>
    );
};

export default EndBar;