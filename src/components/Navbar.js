import { Navbar, Container, Nav, Button, ButtonGroup, Dropdown } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from "react-router-dom"
import './csscontrol/Navbar.css';
import FictionLogo from './images/fictions.png';
import { useHistory } from "react-router-dom";

const Webnav = ({username, isLoggedIn}) => {
    const history = useHistory();
    function logout() {
        history.push("/login")
        window.location.reload();
        localStorage.removeItem('jwt')
    }
    
    return (
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Container>
                <LinkContainer to="/"><Navbar.Brand>
                    <img src={FictionLogo} alt="fiction-box" width="80" height="80" className="d-inline-block align-center" />
                    </Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="font-ex" as={Link} to="/">Home</Nav.Link>
                        <Nav.Link className="font-ex" as={Link} to="/fiction">Browse</Nav.Link>
                        <Nav.Link className="font-ex" as={Link} to="/about">About</Nav.Link>
                    </Nav>
                    <Nav>
                        &nbsp;&nbsp;
                        {isLoggedIn ? (
                            <>
                                <Dropdown as={ButtonGroup}>
                                <Button variant="outline-danger" tag={Link} to="/login" >{username}</Button>
                                <Dropdown.Toggle split variant="outline-danger" id="dropdown-split-basic" />
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/manage_user">Manage Profile</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/manage_item">Manage Fiction</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item as={Link} to="/createfiction">Create Fiction</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            &nbsp;&nbsp;
                            <Button variant="danger" onClick={() => logout()}>Logout</Button>
                        </>
                        ) : 
                        (
                            <>
                                <Button variant="outline-info" as={Link} to="/login">Login</Button>
                                &nbsp;&nbsp;
                                <Button variant="success" as={Link} to="/signup">SignUp</Button>
                            </>
                        )}
                        &nbsp;&nbsp;
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Webnav