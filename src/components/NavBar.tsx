import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'

const NavBar: React.FC = () => {

    return (
        <>
            <div>
                <Navbar expand="sm" data-bs-theme="dark" className="p-3 mb-4">
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
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    );
};

export default NavBar;

