import React from "react";
import { Navbar, Nav ,Button,ButtonGroup, Container} from "react-bootstrap";
import Style from "./navigation.module.css";

const Navigation = () => {
    return (
        <Navbar expand="sm" className="mt-3" id={Style.nav}>
            <Container fluid className="pt-0">
                <Navbar.Brand className="ms-5" > Fiber </Navbar.Brand>
                <Navbar.Toggle aria-controls="nav" className="me-2"/>
                <Navbar.Collapse 
                    id="nav"
                    className="justify-content-around">
                    <Nav className="mx-5"
                        style={{position:"relative",left :"17vw"}}>
                        <Nav.Link> Community </Nav.Link>
                        <Nav.Link> Pricing </Nav.Link>
                        <Nav.Link> Features </Nav.Link>
                    </Nav>

                    <ButtonGroup className="ms-5">
                        <Button variant="light" className="me-3" > Sign in </Button>
                        <Button href="sign in"> Sign up </Button>
                    </ButtonGroup>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation