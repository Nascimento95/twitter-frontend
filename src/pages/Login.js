import React, { useState } from 'react';
import styled from 'styled-components'
import Buttons from '../components/Buttons';
import Modale from '../components/Modale';
import ModaleLogin from '../components/ModaleLogin';

const Login = () => {
    const [show, setShow] = useState(false)
    const [showModal, setShowModal] = useState(false)
    // function pour open et close la modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseModal = () => setShowModal(false)
    const handleShowModal = () => setShowModal(true)
    return (
       
       <div className="container-fluid vh-100">
            <div className='row'>
                <div className='col-5 p-0'>
                    <ImageContainer>
                        <ImageTwitter>
                            <img src="https://img.icons8.com/ios-glyphs/400/ffffff/twitter--v1.png" alt="image_twitter"/>
                        </ImageTwitter> 
                    </ImageContainer>
                </div>
                <div className='col-7 mt-4 px-4'>
                    <div>
                    <img src="https://img.icons8.com/color/56/000000/twitter--v1.png" alt="icone_twitter"/>
                      <div className='mt-5'>
                        <H1 className='fw-bold'>Ça se passe<br/> maintenant</H1>
                      </div>
                      <div className='mt-5'>
                          <h2 className='fs-2 fw-bold'>Rejoignez Twitter dès aujourd'hui.</h2>
                      </div>
                        <div>
                            <div className='mt-5'>
                                <Buttons
                                    styles = {{width:"40%",backgroundColor:"rgb(29, 155, 240)"}}
                                    styleBoostrap = "text-white mt-3"
                                    openModal ={handleShow}
                                    text = "S'inscrire avec votre e-mail" 
                                />
                                <div className='fs-6'>
                                <TextCondition>En vous inscrivant, vous acceptez les <span className='text-info'>Conditions d'Utilisation</span><br/> et la <span className='text-info'>Politique de Confidentialité</span>, incluant <span className='text-info'>l'Utilisation de<br/> Cookies</span>.</TextCondition>
                                </div>
                                <div className='mt-5'>
                                    <p className='fw-bold'>Vous avez déjà un compte ?</p>
                                        <Buttons 
                                            styles={{width:"40%"}}
                                            openModal={handleShowModal}
                                            text="Se connecter"
                                        />
                                </div>
                            </div>                  
                        </div>
                    </div>
                </div>
            </div> 
            <Modale 
                closeModal={handleClose}
                showModal={show}
            />
            <ModaleLogin 
                closeModal={handleCloseModal}
                showModal={showModal}
            />
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
// le css de la page login avec style components
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
    margin-left: 8px;
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
    // background-size: cover;
    background-size:140% 100% ;
`

export default Login;