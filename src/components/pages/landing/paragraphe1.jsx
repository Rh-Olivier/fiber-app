import React from "react";
import {Container,Col , Row ,Button,ButtonGroup,Nav,Figure} from 'react-bootstrap';
import Style from "./paragraphe1.module.css"


const Paragraphe1 = () => {
    return(
        <Container className="px-0 py-4 my-3 mx-0" fluid id={Style.bg}
    >
            <Row className="mx-0 d-flex">
                <Col lg={6} sm={12} className=" d-flex align-items-center justify-content-center pe-2" id={Style.text}>
                    <section className={Style.Section}>
                    
                        <header>
                            <h5 className={Style.h5}>
                                <img src="Assets/star.svg" alt="" className={Style.star}/>
                                <img src="Assets/star.svg" alt="" className={Style.star}/>
                                <img src="Assets/star.svg" alt="" className={Style.star}/>
                                <img src="Assets/star.svg" alt="" className={Style.star}/>
                                <img src="Assets/star.svg" alt="" className={Style.star}/>
                                Rated 4.8/5 (243 reviews)
                            </h5>
                            <h1 className={Style.header}> Create your portfolio <br /> in minutes</h1> 
                        </header>
                        <p className={Style.paragraphe}>
                            With Fiber, you can setup your own personal portfolio in minutes <br />
                            with dozens of premade, beautiful templates.
                        </p>
                        
                        <Row >
                            <Col lg={3} sm={12}>
                                <Button className={Style.button}> Start Free Trial </Button>
                            </Col>
                            <Col lg={3} sm={12}>
                                <Nav.Link className={Style.link}> View Example </Nav.Link>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col lg={6} sm={12} className="mb-2">
                                <img src="Assets/Checkmark.svg" alt="" className="pe-2" />
                                No Credit Card Required
                            </Col>
                            <Col lg={6} sm={12} >
                                <img src="Assets/Checkmark.svg" alt="" className="pe-2" />
                                10 Free Templates
                            </Col>
                        </Row>
                    </section>
                </Col>

                <Col lg={6} sm={12} className="mt-0 order-sm-1" id="picture">
                    <Figure >
                        <Figure.Image
                            src="/Assets/hero-Illustration.png" 
                            width={500} height={500} className={Style.figure}
                             />
                    </Figure>
                </Col>
            </Row>
        </Container>
    )
}

export default Paragraphe1