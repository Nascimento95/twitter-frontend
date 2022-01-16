import React from 'react';
import Button from 'react-bootstrap/Button';
const Buttons = ({text , openModal, styles, styleBoostrap, type }) => {
    return (
        <div>
            <Button 
                type= {type}
                variant="outline-secondary rounded-pill text-primary" 
                className={styleBoostrap}
                style={styles} 
                onClick={openModal}>
                {text} 
            </Button>
        </div>
    );
};

export default Buttons;