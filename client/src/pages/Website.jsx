import React from 'react'
import Companies from "../components/Companies/Companies";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/values/Value";
import Contact from "../components/contact/Contact";
import GetStarted from "../components/getStarted/GetStarted";
import Hero from "../components/Hero/Hero";
const Website = () => {
    return (
        
            <div className="App">
                <div>
                    <div className="white-gradient" />
                    <Hero />
                </div>
                <Companies />
                <Residencies />
                <Value />
                <Contact />
                <GetStarted />
               
            </div>
    )
}

export default Website
