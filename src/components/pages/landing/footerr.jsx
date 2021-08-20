import React from "react";
import { Container , Row ,Col, Nav } from "react-bootstrap";

const Footer = () =>{
    return (
        <footer>
            <Container className="mb-4">
                <Row>
                    <Col lg={4} className="mb-4">
                        <section className="ms-2">
                            <h5>Fiber</h5>
                            <p className="text-secondary">
                                With Fiber , you can setup your own personal
                                portfolio in minutes with dozens of premade,
                                beautiful templates.
                            </p>
                            <p className="text-secondary">Made with love in the Netherlands. </p>
                        </section>
                    </Col>
                    <Col lg={2} className="mb-3">
                        <Nav className="d-flex flex-column ms-2">
                            <h5>Sitemap</h5>
                            <Nav.Link>Homepage</Nav.Link>
                            <Nav.Link>Pricing</Nav.Link>
                            <Nav.Link>Testimonials</Nav.Link>
                            <Nav.Link> Features</Nav.Link>
                        </Nav>
                    </Col>
                    <Col lg={2} className="mb-3">
                        <Nav className="d-flex flex-column ms-2">
                            <h5>Resources</h5>
                            <Nav.Link>Support</Nav.Link>
                            <Nav.Link>Contact</Nav.Link>
                            <Nav.Link>FAQ</Nav.Link>
                        </Nav>
                    </Col >
                    <Col lg={2} className="mb-3">
                        <Nav className="d-flex flex-column ms-2">
                            <h5>Company</h5>
                            <Nav.Link>About</Nav.Link>
                            <Nav.Link>Customers</Nav.Link>
                            <Nav.Link>Blogs</Nav.Link>
                        </Nav>
                    </Col>
                    <Col lg={2} className="mb-3">
                        <Nav className="d-flex flex-column ms-2">
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