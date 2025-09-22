import { Navbar, Nav, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store'; // Adjust the path if your store file is elsewhere


const NavBar: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);

    return (
        <>
            <div>
                <Navbar fixed='top' expand="sm" data-bs-theme="dark" className="nav-bar p-3 ms-4 mb-4">
                    <Navbar.Brand className='nav-brand pb-3 fs-1' href="/">Ecomm Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav defaultActiveKey="/home">
                            <Nav.Link className='nav-link' as={Link} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link className='nav-link' as={Link} to="/products">
                                Products
                            </Nav.Link>
                            <Nav.Link className='nav-link' as={Link} to="/about">
                                About
                            </Nav.Link>
                            <Nav.Link className='nav-link' as={Link} to="/cart">
                                Cart
                                {cartItems.length > 0 && (
                                    <>
                                        <Badge pill bg="none" text='info'>{cartItems.length}</Badge>
                                        <span className="visually-hidden">cart count</span>
                                    </>
                                )}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    );
};

export default NavBar;

