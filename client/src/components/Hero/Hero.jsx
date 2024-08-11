/* eslint-disable no-unused-vars */
import React from 'react'
import CountUp from 'react-countup';
import { motion } from 'framer-motion'
import "./Hero.css"
import Searchbar from '../SearchBar/Searchbar';
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">

        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="blue-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring"
              }}
            />
            <h1>
              Explore <br /> The Best <br /> Property For You.
            </h1>
          </div>
          <div className='flexColStart  hero-des'>
            <span className='secondaryText'>Find a variety of properties that suits you very easily</span>
            <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
          </div>

         <Searchbar/>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>
                Premium Products
              </span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>
                Happy Customers
              </span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className='secondaryText'>
                Awards Winning
              </span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="https://lovehomedesigns.com/wp-content/uploads/2021/12/shutterstock_639916900.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
