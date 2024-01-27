import { Badge, Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

    const { cartItems } = useSelector((state) => state.cart);
    console.log(cartItems);

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
        <Container>
            <LinkContainer to='/'>
            <Navbar.Brand href='/' >
                <img src={logo} alt = 'ProShop'/>
                ProShop
            </Navbar.Brand>
            </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            {/* Add your navigation links here */}
          </Navbar.Collapse>
          <Nav className='ms-auto'>
            <LinkContainer to='/cart'> 
            <Nav.Link>
              <FaShoppingCart /> Cart {/* Corrected icon name */}
              {
                cartItems.length > 0 && 
                (
                    <Badge
                        pill bg = 'success' style = {{ marginLeft: '5px' }}>
                        {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                )
              }
            </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
            <Nav.Link>
              <FaUser /> Sign In {/* Corrected icon name */}
            </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
