/* eslint-disable no-unused-vars */
import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings flexCenter innerWidth f-container">
                {/* left side */}
                <div className="flexColStart f-left">
                    <img src="./logo2.png" width={120} alt="" />

                    <span className="primaryText">
                        Our vision to make all people <br />
                        the best place to live for them.
                    </span>
                </div>

                {/* right */}
                <div className="flexColStart f-right">
                    <span className='primaryText'>Information</span>
                    <span className='primaryText'>111 Pune, FL-2751, India</span>

                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Products</span>
                        <span>About Us</span>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer
