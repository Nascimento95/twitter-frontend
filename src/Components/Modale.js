import React from 'react';
import Modal from 'react-bootstrap/Modal'
import FormSignup from './FormSignup';

const Modale = ({ closeModal, showModal }) => {

    return (
        <div>
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header  closeButton>
                <Modal.Title><img style={{marginLeft:"200px"}} src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="icon_twitter"/> <br/> <h3>Créer votre compte</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body style={{height:"400px",overflow:"scroll"}} variant='scrollable'>
                   <FormSignup />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Modale;