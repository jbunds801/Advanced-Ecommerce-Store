import React from 'react';
import { useSelector } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { useDispatch } from 'react-redux';
import type { RootState } from '../redux/store';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { decreaseQuantity, increaseQuantity, removeCartItem, clearCart } from '../redux/cartSlice';


const CartItems: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const dispatch = useDispatch<AppDispatch>();

    const totalItems = cartItems.reduce((sum, product) => sum + (product.quantity ?? 1), 0);
    const totalPrice = cartItems.reduce((sum, product) => sum + product.price * (product.quantity ?? 1), 0);

    if (cartItems.length === 0) {
        return <h4>Cart is empty!</h4>;
    }

    return (
        <Container>
            {cartItems.map((product, index) => (
                <Row className='m-5' key={index}>
                    <Col lg={2}>
                        <img style={{ width: '6rem', minHeight: 150, maxHeight: 150, objectFit: 'contain' }} src={product.image}
                            alt={`image of ${product.title}`} />
                    </Col>
                    <Col className='my-auto'>
                        <h5>{product.title}</h5>
                        <p>${product.price.toFixed(2)}</p>
                        <p>{product.quantity}</p>
                    </Col>
                    <Col className='mt-3'>
                        <Button variant='outline-info' size='sm'
                            onClick={() => dispatch(removeCartItem(product.id))}>X</Button>
                        <Col>
                            <p className='text-info'>Quantity</p>
                            <Button variant='outline-none text-info'
                                onClick={() => dispatch(increaseQuantity(product))}>+</Button>
                            <Button variant='outline-none text-info'
                                onClick={() => dispatch(decreaseQuantity(product))}>-</Button>
                        </Col>
                    </Col>
                </Row>
            ))}
            <Button variant='outline-none text-info' onClick={() => dispatch(clearCart())}>Clear Cart</Button>
            <Button variant='outline-info' onClick={() => dispatch(clearCart())}>Checkout</Button>
            <span>Total Items: {totalItems}</span>
            <span>Total Price: {totalPrice.toFixed(2)} </span>
        </Container>
    );
};

export default CartItems;