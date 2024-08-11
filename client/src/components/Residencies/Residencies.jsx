/* eslint-disable no-unused-vars */
import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import './Residencies.css'
import "swiper/css"
import { PuffLoader } from 'react-spinners';
import { sliderSettings } from '../../utils/Common';
import PropertyCard from '../PropertyCard/PropertyCard';
import useProperties from '../../hooks/useProperties';
const Residencies = () => {
    const { data, isError, isLoading } = useProperties()
    if (isError) {
        return (
            <div className='wrapper'>
                <span>Error while fetching data</span>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="wrapper flexCenter" style={{ height: "60vh" }}>
                <PuffLoader
                    height="80"
                    width="80"
                    radius={1}
                    color="#4066ff"
                    aria-label="puff-loading"
                />
            </div>
        )
    }
    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Residencies</span>
                </div>

                <Swiper {...sliderSettings}>
                    <SliderButtons />
                    {
                        data.slice(7, 16).map((card, i) => (
                            <SwiperSlide key={i}>
                                <PropertyCard card={card} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Residencies

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}