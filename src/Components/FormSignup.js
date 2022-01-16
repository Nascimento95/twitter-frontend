import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import  FormControl  from 'react-bootstrap/FormControl'
import Buttons from './Buttons'

const FormSignup = () => {

    const [viewPassword, setViewPassword] = useState(false)
    const navigate = useNavigate()  

    const formik = useFormik({
        initialValues : {
            name : "",
            email :"",
            password :"",
            pseudo :"",
            birthDate :""
        },
        validationSchema : Yup.object({
            password : Yup.string().min(8, 'Password minimum 8 characters')
        }),
        onSubmit : values => {
            signup(values)
            console.log(JSON.stringify(values))
        }
    })
    // le fetch dans une function asyncrone appeler dans le submit
    const signup = async values => {
        const signupResponse = await fetch('http://localhost:5000/users', {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                name: values.name,
                email: values.email,
                password: values.password,
                pseudo: values.pseudo,
                birthDate : values.birthDate
            })
        })   
        const user = await signupResponse.json()
        navigate("/homePage")/* après le signup on envoie l'utilisateur sur la page que eloi fait*/
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
                id ="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value ={formik.values.name}
            />
            <FormControl
                className='mt-3'
                placeholder="e-mail"
                id ="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value ={formik.values.email}
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
            <FormControl
                className='mt-3'
                placeholder="pseudo"
                id ="pseudo"
                name="pseudo"
                type="text"
                onChange={formik.handleChange}
                value ={formik.values.pseudo}
            />
            <label className='mt-5'><span className='fw-bold'>Date de naissance</span><br/> <p className='text-secondary'>Cette information ne sera pas affichée publiquement. Confirmez votre âge, même si ce compte est pour une entreprise, un animal de compagnie ou autre chose.</p></label>
            <FormControl
                className='mt-3'
                placeholder="Nom et Prénom"
                id ="birthDate"
                name="birthDate"
                type="date"
                onChange={formik.handleChange}
                value ={formik.values.birthDate}
            />
            <Buttons 
               type = "submit"
               text = "S'inscrire"
               styles = {{width:"100%"}}
               styleBoostrap ="mt-4 bg-secondary text-light"
            />
        </form>
    
    );
};

export default FormSignup;