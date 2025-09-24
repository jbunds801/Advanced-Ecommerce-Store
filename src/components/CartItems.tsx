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
                    <Col md={3} lg={3} sm={6} className='d-flex justify-content-center'>
                        <img style={{ width: '6rem', minHeight: 150, maxHeight: 150, objectFit: 'contain' }} src={product.image}
                            alt={`image of ${product.title}`} />
                    </Col>
                    <Col className='my-auto' sm={6} md={4} lg={5} >
                        <h5>{product.title}</h5>
                        <p>${product.price.toFixed(2)}</p>
                    </Col>
                    <Col className='m-auto me-5' sm={6} md={1}>
                        <p className='text-info text-center'>Quantity</p>
                        <div className='d-flex flex-nowrap justify-content-center align-items-center'>
                            <Button className='m-1' variant='outline-none text-info'
                                onClick={() => dispatch(decreaseQuantity(product))}>-</Button>
                            <span>{product.quantity ?? + 1}</span>
                            <Button className='m-1' variant='outline-none text-info'
                                onClick={() => dispatch(increaseQuantity(product))}>+</Button>
                        </div>
                    </Col>
                    <Col md={2}>
                        <Button className='m-5 d-none d-md-block' variant='outline-info' size='sm'
                            onClick={() => dispatch(removeCartItem(product.id))}>X</Button>
                    </Col>
                </Row>
            ))}
            <Button variant='outline-none text-info' onClick={() => dispatch(clearCart())}>Clear Cart</Button>
            <span>Total Items: {totalItems}</span>
            <span>Total Price: {totalPrice.toFixed(2)} </span>
            <Button variant='outline-info' onClick={() => dispatch(clearCart())}>Checkout</Button>
        </Container>
    );
};

export default CartItems;