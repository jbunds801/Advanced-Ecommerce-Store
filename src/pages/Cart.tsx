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

/* Inputs:
product: Product(id, title, price, etc.)
quantity ?: number(defaults to 1)
options ?: { size?: string; color?: string }(optional variant info)
Outputs:
Synchronous: updates cart state in -context(no return value required)
Optional: return a boolean or result object in case caller wants confirmation
Error modes:
invalid product or quantity -> no - op or throw
stock or server failures(if using server validation): report failure via UI
Edge cases to handle

Adding the same product twice — merge quantities vs create separate line items(decide behavior).
Zero or negative quantity — ignore or normalize.
Max stock limits.
Persisting across reloads(localStorage).
Race conditions if multiple tabs or async server validation — consider locking or optimistic updates + reconciliation.
Removing items and quantity updates.
Cart totals, taxes, discounts, shipping calculation. */