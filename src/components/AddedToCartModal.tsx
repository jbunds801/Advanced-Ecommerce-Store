import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface AddedToCartModalProps {
    show: boolean;
    onClose: () => void;
}

const AddedToCartModal: React.FC<AddedToCartModalProps> = ({ show, onClose }) => {
    return (
        <Modal show={show} onHide={onClose} data-bs-theme="dark" size='sm' centered>
            <Modal.Body className='text-center fs-5 fw-lighter my-2'>Item added to cart!</Modal.Body>
            <Modal.Footer>
                <Button variant="outline-info" className='d-flex justify-content-center mx-auto'
                onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddedToCartModal;