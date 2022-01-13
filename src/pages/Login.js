import React, { useState } from 'react';
import { useFormik } from 'formik'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import  FormControl  from 'react-bootstrap/FormControl';


const TextCondition = styled.div`
    font-size : 12px
`
const H1 = styled.h1`
    font-size  : 69px
`
const ImageTwitter = styled.div`
    position: relative;
    top: 200px; left: 70px;
`
const Footer = styled.div`
   ul{
    display: flex;
   },
   li{
       font-size : 13px;
    margin-left: 10px;
    list-style-type: none;
   }
`
const FooterRow2 = styled.div`
   ul{
    display: flex;
    justify-content: center;
   },
   li{
       font-size : 13px;
    margin-left: 10px;
    list-style-type: none;
   }
`
const ImageContainer = styled.div`
    background-image: url("https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png");
    height : 100%;
    background-size: cover;
`
const Login = () => {

    const [show, setShow] = useState(false)
    // function pour open et close la modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(show);
    const formik = useFormik({
        initialValues: {
            name : "",
            email:"",
            password:"",
            pseudo:"",
            birthDate:""


        },
        onSubmit : values => {
            alert(JSON.stringify(values))
        }
    })
    return (
       
       <div className="container-fluid vh-100">
            <div className='row'>
                <div className='col-5'>
                    <ImageContainer>
                        {/* <img className='img-fluid' src="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png" /> */}
                        <ImageTwitter>
                            <img src="https://img.icons8.com/ios-glyphs/400/ffffff/twitter--v1.png"/>
                        </ImageTwitter> 
                    </ImageContainer>
                </div>
                <div className='col-7 mt-4'>
                    <div>
                    <img src="https://img.icons8.com/color/48/000000/twitter--v1.png"/>
                      <div className='mt-5'>
                        <H1 className='fw-bold'>Ça se passe<br/> maintenant</H1>
                      </div>
                      <div className='mt-5'>
                          <h2 className='fs-2 fw-bold'>Rejoignez Twitter dès aujourd'hui.</h2>
                      </div>
                        <div>
                            <form className='mt-5' onSubmit={formik.handleSubmit}>
                                <button style={{width:"40%"}} type='button' className ="btn btn-primary rounded-pill">S'inscrire avec votre e-mail</button>
                                <div className='fs-6'>
                                <TextCondition>En vous inscrivant, vous acceptez les <span className='text-info'>Conditions d'Utilisation</span><br/> et la <span className='text-info'>Politique de Confidentialité</span>, incluant <span className='text-info'>l'Utilisation de<br/> Cookies</span>.</TextCondition>
                                </div>
                                <div className='mt-5'>
                                    <p className='fw-bold'>Vous avez déjà un compte ?</p>
                                    <Button   variant="outline-secondary rounded-pill text-primary" style={{width:"40%"}} onClick={handleShow}>
                                    Se connecter
                                    </Button>
                                </div>
                            </form>                  
                        </div>
                    </div>
                </div>
            </div> 
            <Modal  show={show} onHide={handleClose}>
                <Modal.Header  closeButton>
                <Modal.Title><img style={{marginLeft:"200px"}} src="https://img.icons8.com/color/48/000000/twitter--v1.png"/> <br/> <h3>Créer votre compte</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body className='scrollable'>
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
                        <FormControl
                            className='mt-3'
                            placeholder="password"
                            id ="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value ={formik.values.password}
                        />
                        <FormControl
                            className='mt-3'
                            placeholder="pseudo"
                            id ="pseudo"
                            name="pseudo"
                            type="text"
                            onChange={formik.handleChange}
                            value ={formik.values.pseudo}
                        />
                        <FormControl
                            className='mt-3'
                            placeholder="Nom et Prénom"
                            id ="birthDate"
                            name="birthDate"
                            type="date"
                            onChange={formik.handleChange}
                            value ={formik.values.birthDate}
                        />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{width:"40%"}} variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                    <Button type='submit' style={{width:"40%"}} variant="primary">
                   Submit
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className='row mt-3'>
                <div className='col'>
                    <Footer >
                        <ul>
                            <li>À propos</li>
                            <li>Centre d'assistance</li>
                            <li>Conditions d’utilisation</li>
                            <li>Politique de Confidentialité</li>
                            <li>Politique relative aux cookies</li>
                            <li>Accessibilité</li>
                            <li>Informations sur les publicités</li>
                            <li>Blog</li>
                            <li>Statut</li>
                            <li>Carrières</li>
                            <li>Ressources de la marque</li>
                        </ul>
                    </Footer>
                </div>
            </div>  
            <div className='row'>
                <div className='col'>
                <FooterRow2>
                        <ul>
                            <li>Ressources de la marque</li>
                            <li>Publicité</li>
                            <li>Marketing</li>
                            <li>Twitter pour les professionnels</li>
                            <li>Développeurs</li>
                            <li>Répertoire</li>
                            <li>Paramètres</li>
                            <li>© 2022 Twitter, Inc.</li> 
                        </ul>
                    </FooterRow2>
                </div>
            </div> 
        </div>
    );
};

export default Login;