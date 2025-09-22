import React from 'react';
import { useSelector } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { useDispatch } from 'react-redux';
import type { RootState } from '../redux/store';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { removeCartItem } from '../redux/cartSlice';


const CartItems: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const dispatch = useDispatch<AppDispatch>();


    if (cartItems.length === 0) {
        return <h4>Cart is empty!</h4>;
    }

    return (
        <Container>
            {cartItems.map((product) => (
                <Row className='m-5' key={product.id}>
                    <Col lg={2}>
                        <img style={{ width: '6rem', minHeight: 150, maxHeight: 150, objectFit: 'contain' }} src={product.image}
                            alt={`image of ${product.title}`} />
                    </Col>
                    <Col className='my-auto'>
                        <h5>{product.title}</h5>
                        <p>${product.price.toFixed(2)}</p>
                    </Col>
                    <Col className='mt-3'>
                        <Button variant='outline-info' size='sm'
                            onClick={() => dispatch(removeCartItem(product.id))}>X</Button>
                    </Col>
                </Row>
            ))}
        </Container>
    );
};

export default CartItems;