import React from 'react';
import CartItems from '../components/CartItems';


const Account: React.FC = () => {

    return (
        <>
            <h1 className='px-4 py-4'>Your shopping cart</h1>
            <CartItems />
        </>
    );
};

export default Account;