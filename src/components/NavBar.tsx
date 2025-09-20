import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'

const NavBar: React.FC = () => {


    return (
        <>
            <div>
                <Navbar expand="sm" data-bs-theme="dark" className="p-3 mb-4">
                    <Navbar.Brand className='nav-brand fs-2 fw-lighter' href="/">Ecomm Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='nav-link fw-lighter' defaultActiveKey="/home">
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/products">
                                Products
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about">
                                About
                            </Nav.Link>
                            <Nav.Link as={Link} to="/account">
                                Account
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    );
};

export default NavBar;

