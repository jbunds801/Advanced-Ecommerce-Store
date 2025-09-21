import React from 'react';
import type { Product } from '../types/types';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';

interface CartItemsProps {
    cartItems: Product[];
}

const CartItems: React.FC<CartItemsProps> = () => {
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);

    if (cartItems.length === 0) {
        return <p>Your cart is empty</p>;
    }

    return (
        <div>
            {cartItems.map((item) => (
                <div key={item.id}>
                    <h5>{item.title}</h5>
                    <p>${item.price}</p>
                </div>
            ))}
        </div>
    );

};

export default CartItems;