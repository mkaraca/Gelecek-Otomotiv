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
                        <div className="slider-home-main__degrade"></div>
                        <video className="slider-home-main__video slider-desktop" ref={videoRef} muted loop playsInline autoPlay>
                            <source src="assets/video/mb-slider-video-1-desktop.mp4" type="video/mp4" />
                        </video>
                        <video className="slider-home-main__video slider-mobile" ref={videoRef} muted loop playsInline autoPlay>
                            <source src="assets/video/mb-slider-video-1-mobile.mp4" type="video/mp4" />
                        </video>
                        <div className="container">
                            <div className="slider-home-main__content">
                                <h2 className="title text-white wow text-center fadeInUp" data-depth="0.03" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    Tamamen Elektrikli, Tamamen Mercedes.</h2>
                                <div className="slider-button-wr">
                                    <Link className="slider-button button-white wow fadeInUp" data-depth="0.05" href="/page-about"
                                        data-wow-delay="400ms" data-wow-duration="1500ms">TEST SÜRÜŞÜ İÇİN RANDEVU AL<i className="deg45 fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-home-main__degrade"></div>
                        <img className="slider-home-main__image slider-mobile" src="assets/images/slider/slider-image-2-mobile.jpg" alt="Gelecek Otomotiv" />
                        <img className="slider-home-main__image slider-desktop" src="assets/images/slider/slider-image-2-desktop.jpg" alt="Gelecek Otomotiv" />
                        <div className="container">
                            <div className="slider-home-main__content">
                                <h2 className="title text-center text-white wow fadeInUp" data-depth="0.03" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    Tamamen Elektrikli, Tamamen Mercedes.</h2>
                                <div className="slider-button-wr">
                                    <Link className="slider-button button-white wow fadeInUp" data-depth="0.05" href="/page-about"
                                        data-wow-delay="400ms" data-wow-duration="1500ms">TEST SÜRÜŞÜ İÇİN RANDEVU AL<i className="deg45 fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <div className="slider-home-main__degrade"></div> */}
                        <div className="container position-absolute start-0 end-0">
                            <div className="slider-home-main__content">
                                <h2 className="title text-center text-black wow fadeInUp" data-depth="0.03" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    Tamamen Elektrikli, Tamamen Mercedes.</h2>
                                <div className="slider-button-wr">
                                    <Link className="slider-button button-black wow fadeInUp" data-depth="0.05" href="/page-about"
                                        data-wow-delay="400ms" data-wow-duration="1500ms">TEST SÜRÜŞÜ İÇİN RANDEVU AL<i className="deg45 fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div class="scene-loop">
                            <div class="loop-bg"></div>
                            <img class="loop-car" src="assets/images/slider/slider-loop-car.png" alt="Sabit araba" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="slider-home-pagination pagination-home-main"></div>
            </section>
        </>
    )
}
export default SliderMain;
