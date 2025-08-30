import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const swiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    // autoplay: {
    //     delay: 8500,
    //     disableOnInteraction: false,
    // },
    loop: true,
    pagination: {
        el: '.pagination-home-main',
        clickable: true,
    }
};

function SliderMain() {
    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) {
            // Attempt to autoplay the video
            videoRef.current.play().catch((error) => {
                console.error('Autoplay failed:', error);
            });
        }
    }, []);

    return (
        <>
            <section className="slider-home-main">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                        <video className="slider-home-main__video" ref={videoRef} muted loop playsInline autoPlay>
                            <source src="assets/video/mb-slider-video-1.mp4" type="video/mp4" />
                        </video>
                        <div className="container">
                            <div className="slider-home-main__content">
                                <h2 className="title wow fadeInUp" data-depth="0.03" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    Tamamen Elektrikli, Tamamen Mercedes.</h2>
                                <div className="btns mt-20">
                                    <Link data-depth="0.05" href="/page-about" className="btn-two-light px-5 wow fadeInUp"
                                        data-wow-delay="400ms" data-wow-duration="1500ms">TEST SÜRÜŞÜ İÇİN RANDEVU AL<i className="fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <video className="slider-home-main__video" ref={videoRef} muted loop playsInline autoPlay>
                            <source src="assets/video/mb-slider-video-2.mp4" type="video/mp4" />
                        </video>
                        <div className="container">
                            <div className="slider-home-main__content">
                                <h2 className="title text-center wow fadeInUp" data-depth="0.03" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    Tamamen Elektrikli, Tamamen Mercedes.</h2>
                                <div className="btns d-flex justify-content-center mt-20">
                                    <Link data-depth="0.05" href="/page-about" className="btn-two-light px-5 wow fadeInUp"
                                        data-wow-delay="400ms" data-wow-duration="1500ms">TEST SÜRÜŞÜ İÇİN RANDEVU AL<i className="fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="slider-home-pagination pagination-home-main"></div>
            </section>
        </>
    )
}
export default SliderMain;
