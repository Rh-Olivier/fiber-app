import React from "react";
import { Container , Row ,Col, Nav } from "react-bootstrap";

const Footer = () =>{
    return (
        <footer>
            <Container>
                <Row>
                    <Col>
                        <section>
                            <h5>Fiber</h5>
                            <p>
                                With Fiber , you can setup your own personal
                                portfolio in minutes with dozens of premade,
                                beautiful templates.
                            </p>
                            <p>Made with love in the Netherlands. </p>
                        </section>
                    </Col>
                    <Col>
                        <Nav>
                            <h5>Sitemap</h5>
                            <Nav.Link>Homepage</Nav.Link>
                            <Nav.Link>Pricing</Nav.Link>
                            <Nav.Link>Testimonials</Nav.Link>
                            <Nav.Link> Features</Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <Nav>
                            <h5>Resources</h5>
                            <Nav.Link>Support</Nav.Link>
                            <Nav.Link>Contact</Nav.Link>
                            <Nav.Link>FAQ</Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <Nav>
                            <h5>Company</h5>
                            <Nav.Link>About</Nav.Link>
                            <Nav.Link>Customers</Nav.Link>
                            <Nav.Link>Blogs</Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <Nav>
                            <h5>Portfolio</h5>
                            <Nav.Link>Sarah Andrews</Nav.Link>
                            <Nav.Link>Mathew Higgins</Nav.Link>
                            <Nav.Link>JAnice Dave</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer 