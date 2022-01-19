import React from 'react';
import Modal from 'react-bootstrap/Modal'
// import FormSignup from './FormSignup';
import FormLogin from './FormLogin';

const ModaleLogin = ({showModal, closeModal }) => {
    return (
        <div>
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header  closeButton>
                <Modal.Title><img style={{marginLeft:"200px"}} src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="icon_twitter"/> <br/> <h3>Connecter-vous</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body style={{height:"400px",overflow:"scroll"}} variant='scrollable'>
                   {/* <FormSignup /> */}
                   <FormLogin/>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ModaleLogin;