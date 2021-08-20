import React from "react";
import { Container, Row , Col ,Button,Card,Figure} from "react-bootstrap";
import Style from "./paragraphe2.module.css"

const Paragraphe2 = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col lg={12}><h6>Why Fiber ? </h6></Col>
                <Col 
                    className="mb-4 pb-1"
                    id={Style.bolder}> A good portfolio means good employability. </Col>
            </Row>
            <Row className="mb-5">
                <Col lg={4} sm={12} className="mb-3">
                    <Card className="border-0">
                        <Card.Img variant="top" src="Assets/time.svg" id={Style.time}/>
                        <Card.Header className="bg-white"><b> Build in minutes </b></Card.Header>
                        <Card.Body className="text-secondary pt-1">
                            With a selection of premade templates,
                            you can build out a portfolio in less than
                            10 minutes.
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} sm={12} className="mb-3">
                    <Card className="border-0">
                        <Card.Img variant="top" src="Assets/code.svg" id={Style.code}/>
                        <Card.Header className="bg-white"><b> Add custom css</b> </Card.Header>
                        <Card.Body className="text-secondary pt-1">
                            Customize your personal portfolio even
                            more with the ability to add your own
                            custom CSS styles.
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} sm={12} className="mb-3">
                    <Card className="border-0">
                        <Card.Img variant="top" src="Assets/AllSizes.svg" id={Style.allsizes}/>
                        <Card.Header className="bg-white"><b> Responsive </b> </Card.Header>
                        <Card.Body className="text-secondary pt-1">
                            All Fiber templates are fully responsive to
                            ensure the experience is seemless
                            across all devices.
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Container>
            <Row id={Style.bg} className="pb-0">
                <Col className={Style.card} lg={6} sm={12}>
                    <Card className={Style.transparent}>
                        <Card.Header className={Style.transparent}>
                            <h2 className="text-light"> Diversify your portfolio. </h2></Card.Header>
                        <Card.Body className="text-light">
                            Create an even more impressive portfolio by
                            creating cases studies for your projects. Simply
                            follow our step-by-step guide.
                        </Card.Body>
                        <Button className="w-50 ms-3" variant="light" id={Style.button}>
                            Start free trial
                        </Button>
                    </Card>
                </Col>
                <Col className=" mb-0" lg={6} sm={12}>
                    <Figure className="pb-0 mb-0">
                        <Figure.Image src="Assets/Page Image.png" alt="" id={Style.img}></Figure.Image>
                    </Figure>
                </Col>
            </Row>
            </Container>
        </Container>
    )
}

export default Paragraphe2