import React from 'react';
import Modal from 'react-bootstrap/Modal'
import FormComment from './FormComment';
// import { Link } from 'react-router-dom';
const ModalComment = ({showModal, closeModal, name, pseudo, content, idTweet }) => {
    console.log("contenue de la modal",content);
    return (
        <div>
            <Modal  show={showModal} onHide={closeModal}>
                <Modal.Header  closeButton>
                <Modal.Title> commentaire tweet</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{height:"200px"}} variant='scrollable'>
                  <div>
                    <p>{name} @{pseudo} </p>  
                    <p>{content} </p>    
                  </div>
                  <FormComment
                    tweetId = {idTweet}
                    modalclose={closeModal}
                  />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ModalComment;