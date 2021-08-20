import React from "react";
import Navigation from "./navigation";
import Paragraphe1 from "./paragraphe1";
import Paragraphe2 from "./paragraphe2";
import Comments from "./comment";
import Footer from "./footerr";

const LandingPage = () => {
    return (
        <>
            <Navigation />

            <Paragraphe1 />

            <Paragraphe2 />

            <Comments />

            <Footer/>
        </>
    )
}

export default LandingPage