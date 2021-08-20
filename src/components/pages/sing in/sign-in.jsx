import React , {useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {Form , Nav ,Button, Container, Row, Col,Figure} from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./style.css";



const ButtonStyled = styled(Button)`
    background-color : rgb(64, 6, 211) ; border : 1px  solid rgb(64, 6, 211);
    margin-top : 3vh ; margin-bottom : 3vh;
    width : 30.7vw ;
`
const P = styled.p`
    opacity : 0.8 ;
`

const SignInPage = () => {
    const formik = useFormik({
        initialValues : {
            name : "",
            email : "" ,
            password : ""
        },
        validationSchema: Yup.object({
            name : Yup.string().required("Required!"),
            email : Yup.string().required("Required!"),
            password : Yup.string().required("Required")
        }),
        onSubmit : values =>{
            alert(JSON.stringify(values , null , 2))
        },
    })

    const [state, setstate] = useState(false)
    return(
        <Container fluid>
            <Row>
                <Col className="d-flex justify-content-center mt-4" id="container">
                    <div>
                    <header >
                        <h5>Fiber</h5>
                        <h1 className="my-4">Create your account Fiber</h1>
                    </header>
                    <Form onSubmit={formik.handleSubmit} >
                        <Form.Group controlId="name" name="name" className="me-5 mb-3">
                            <Form.Label> <b>Your Name </b> </Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="John Doe"
                                name="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                className={formik.touched.name && formik.errors.name ?
                                "border border-danger" : null }/>
                            {formik.touched.name && formik.errors.name ? 
                            <Form.Text className="errors">{formik.errors.name}</Form.Text> : null }
                        </Form.Group>

                        <Form.Group controlId="email" className="me-5 mb-3">
                            <Form.Label> <b> E-mail</b></Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="johndoe@gmail.com" 
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                    className={formik.touched.email && formik.errors.email ?
                                        "border border-danger" : null} />
                            {formik.touched.email && formik.errors.email ?
                                <Form.Text className="errors">
                                    {formik.errors.email}
                                </Form.Text> : null}

                        </Form.Group>

                        <Form.Group controlId="password" className="me-5 mb-3">
                            <Form.Label> <b> Password </b></Form.Label>
                            <Form.Control 
                                type={(!state) ? "password" : "text" } 
                                placeholder="At least 8 characters"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                    className={formik.touched.password && formik.errors.password ?
                                        "border border-danger" : null} />
                            <img 
                                src="Assets/hide password.svg" 
                                alt=""
                                className="password" 
                                name="password"
                                onClick={()=> setstate(!state)}/>
                            {formik.touched.password && formik.errors.password ?
                                <Form.Text className="errors">
                                    {formik.errors.password}
                                </Form.Text> : null}
                        </Form.Group>

                        <Form.Check type="checkbox" label="By creating an account on 
                        Fiber , you agree to the " className="ms-3" id="condition"/><Nav.Link to="#" className="pt-0">Terms & Conditions</Nav.Link>

                        <ButtonStyled id="button" type="submit">Create Fiber Account</ButtonStyled>
                        
                        <div className="d-flex justify-content-center me-5">
                            <p>Already have an account ? <Link>Sign in</Link></p>
                        </div>
                    </Form></div>
                </Col>

                <Col id="side">
                    <Figure className="m-5">
                        <Figure.Image 
                            src="Assets/Sign Up Image.png" 
                            alt="" 
                            width={450} height={300} 
                            className="mt-3 ms-5"/>
                        <Figure.Caption className="ms-5 ps-5 mt-3 text-white w-75">
                            <h2>Unparalleled templates</h2>
                            <P>
                                Crafted by a team of professional designer, our
                                templates are unparalleled in the market.
                            </P>
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row>
        </Container>
    )
}

export default SignInPage