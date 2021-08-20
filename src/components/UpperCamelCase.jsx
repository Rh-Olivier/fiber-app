import React from "react";
import LandingPage from "./pages/landing/landingPage";
import {Switch , Route } from "react-router-dom"
import SignInPage from "./pages/sing in/sign-in";
import StyledComponent from "./pages/style";


const AppContainer = () => {
    return (
        <Switch>
            <Route exact path="/">
                <LandingPage/>
            </Route>
            <Route exact path="/sign in">
                <SignInPage/>
            </Route>
            <Route exact path="/style">
                <StyledComponent />
            </Route>
        </Switch>
    )
}

export default AppContainer