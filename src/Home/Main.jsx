import React from "react";
import Home from "./Home";
import About from "./About";
import Testimonials from "./Testimonials";
import Gallery1 from "./Gallery1";
import Menu from "./Menu";
import Contact from "./Contact";
import Offerblock from "./Offerblock";
import Popup from "./Popup";



const Main = () =>{
    return(
        <>
        <Home/>
        <Offerblock/>
        <About/>
        <Menu/>
        <Testimonials/>
        <Gallery1/>
        <Contact/>
        <Popup/>
        
        
    
        </>
    )
}
export default Main;