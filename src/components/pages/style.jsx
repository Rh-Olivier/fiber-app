import React from "react";
import styled from "styled-components";

const Title = styled.h1`
    color : red ;
`

const Button = styled.button`
    background : ${props => props.primary ? "palevioletred" : "white"} ;   
    color : ${ props => props.primary ? "white" : "palevioletred" };
    border : 2px solid palevioletred ;
    margin: 5px ;
`
const TomatoButton = styled(Button)`
    background : tomato ; color : white ; border : 2px solid tomato;
`

const StyledComponent = () => {
    return(
        <div>
            <Title>hello</Title>

            <Button primary={true}> click </Button> <br />
            <TomatoButton>tomato</TomatoButton> <br />
            <Button as="a" href="#" primary> link button </Button>

            
        </div>
    )
}

export default StyledComponent;