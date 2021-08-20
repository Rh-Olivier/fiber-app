import React, {useState} from "react";
import { Card,Button,Container,Row,Col } from "react-bootstrap";
import Style from "./comment.module.css";

const Comments = () =>{
    const [state, setstate] = useState({
            database : [{
                name : "Sarah Andrews" ,
                firstName : "Sarah" ,
                revenue : "$100k" ,
                comment : `Setting up my portfolio with Fiber took no
                more than 10 minutes. Since then, my portfolio has 
                attracted a lot of clients and made me more than $100k.`,
                path : "Assets/User Avatar.svg"
                },
                {
                    name : "Mathew Higgins",
                    firstName : "Mathew ",
                    revenue : "20k",
                    comment : `I have been getting A LOT of leads ever
                    since I used Fiber's premade templates, now I just 
                    need to work on my case studies and I'll be ready to
                    go !`,
                    path: "Assets/User Avatar 2.svg"
                },
                {
                    name : "Janice Dave" ,
                    firstName : "Janice" ,
                    revenue : "30k",
                    comment : `I only just start freelancing this year and 
                    I have already made more than I ever made in my full-time
                    job. The templates are so amazing.`,
                    path: "Assets/User Avatar 32.svg"
                }
            ]
    })
    return(
        <Container className="mb-5 pb-4">
            <Row>
                {state.database.map( user => (
                    <Col className="mt-5 mb-4">
                        <Card>
                            <Card.Header className="p-0 bg-white border-0">
                                <Card.Img width={50} height={50} src={user.path} alt="" id={Style.img}/>
                                <h5 id={Style.name}> {user.name} </h5>
                                
                                <h6 id={Style.revenue}> {`${user.revenue} in revenue`} </h6>
                            </Card.Header>
                            <Card.Body className="pt-0" id={Style.comment}>
                                {user.comment}
                            </Card.Body>
                            <Button id={Style.btn} className="mx-5 mb-4"> {`View ${user.firstName}'s portfolio`}</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

    )
}

export default Comments