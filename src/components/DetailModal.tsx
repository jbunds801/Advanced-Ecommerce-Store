import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import type { Product } from '../types/types'
import ReactStars from 'react-rating-stars-component';

type DetailModalProps = {
    product?: Product | null
    show: boolean
    onHide: () => void
}

const DetailModal: React.FC<DetailModalProps> = ({ product, show, onHide }) => {
    if (!product) return null

    console.log('DetailModal rating:', product.rating?.rate)

    return (
        <>
            <Modal data-bs-theme="dark" className='p-3'
                show={show} onHide={onHide} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{product.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mx-auto d-flex flex-column align-items-center p-4">
                        <img className='img-fluid mx-auto p-4'
                            src={product.image}
                            alt={product.title}
                        />
                        <p className='p-1'>Price: ${product.price}</p>
                        <div>
                            <ReactStars
                                count={5}
                                value={product.rating?.rate ?? 0}
                                size={30}
                                isHalf={true}
                                activeColor="#e314ea"
                                color="gray" //color of empty star
                                char="★"
                            />
                        </div>
                        <p>{product.description}</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className='d-flex mx-auto gap-3 my-2'>
                        <Button variant="outline-info" onClick={onHide}>
                            Close
                        </Button>
                        <Button variant="outline-info">Add to Cart</Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DetailModal;

