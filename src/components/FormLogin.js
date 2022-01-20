import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import  FormControl  from 'react-bootstrap/FormControl'
import Buttons from './Buttons'
import { UserContext } from '../contexts/User'

const FormLogin = () => {

    const {setUser} = useContext(UserContext)
    const [viewPassword, setViewPassword] = useState(false)
    const navigate = useNavigate()  

    const formik = useFormik({
        initialValues : {
            username: "Marco",
            password :"marcopereira",
        },
        validationSchema : Yup.object({
            password : Yup.string().min(8, 'Password minimum 8 characters')
        }),
        onSubmit : values => {
            login(values)
            console.log(JSON.stringify(values))
        }
    })
    // le fetch dans une function asyncrone appeler dans le submit
    const login = async values => {
        const signupResponse = await fetch('http://localhost:5000/auth/login', {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                username: values.username,
                password: values.password,
            })
        })   
        const user = await signupResponse.json()
        setUser(user)
        navigate("/homePage")/* après le login on envoie l'utilisateur sur la page que eloi fait*/
        if (user.error) {
            alert(user.error)
            return
        }
    }
    // function pour voir le password quon tape
    const viewPassWor = () => {
        if (!viewPassword) {
            setViewPassword(true)
        } else {
            setViewPassword(false)
        }
    }
    console.log(viewPassword);
    return (
        <form className='mt-1' onSubmit={formik.handleSubmit}>
            <FormControl
                placeholder="Nom et Prénom"
                id ="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                value ={formik.values.username}
            />
            <img onClick={viewPassWor} style={{position:"relative",top:"35px",left:"90%"}} src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/30/000000/external-view-cyber-security-kiranshastry-solid-kiranshastry-4.png" alt="icone_password"/>
            <FormControl
                className=''
                placeholder="password"
                id ="password"
                name="password"
                type={viewPassword === false ? "password" : "text"}
                onChange={formik.handleChange}
                value ={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
                <div className='text-danger'>{formik.errors.password}</div>
            ) : null}
            <Buttons 
               type = "submit"
               text = "Se Connecter"
               styles = {{width:"100%"}}
               styleBoostrap ="mt-4 bg-secondary text-light"
            />
        </form>
    
    );
};

export default FormLogin;