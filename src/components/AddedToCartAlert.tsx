import React from 'react';
import { Alert } from 'react-bootstrap'

interface AddedToCartAlertProps {
    show: boolean;
    onClose: () => void;
}

const AddedToCartAlert: React.FC<AddedToCartAlertProps> = ({ show, onClose }) => {

    if (!show) return null;

    return (
        <>
            <Alert variant='info'
                data-bs-theme="dark"
                dismissible
                onClose={onClose}
                className="position-fixed top-25 start-50 translate-middle-x mt-3"
                style={{ zIndex: 9999 }}
            >
                Item Added!
            </Alert>
        </>
    );
}

export default AddedToCartAlert;