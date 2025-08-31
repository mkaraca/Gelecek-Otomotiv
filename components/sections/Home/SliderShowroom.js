import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const swiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.pagination-home-showroom',
        clickable: true,
    }
};

function SliderShowroom() {
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
            <div className="slider-showroom-main">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                        <img src="assets/images/showroom/gelecek-showroom-istanbul.png" alt="showroom" />
                        <div className="showroom-link-wr">
                            <div className="position-relative">
                                <svg className="button-radius-svg tr-corner" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 10H0C5.52285 10 10 5.52285 10 0V10Z" fill="white" /></svg>
                                <Link href="/page-about" className="btns showroom-link">
                                    <h4 className="">Gelecek İstanbul</h4>
                                    <i className="deg45 fa-solid fa-arrow-right opacity-50"></i>
                                </Link>
                                <svg className="button-radius-svg bl-corner" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 10H0C5.52285 10 10 5.52285 10 0V10Z" fill="white" /></svg>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <video className="slider-home-showroom__video" ref={videoRef} muted loop playsInline autoPlay>
                            <source src="assets/images/showroom/gelecek-showroom-diyarbakir.mp4" type="video/mp4" />
                        </video>
                        <div className="showroom-link-wr">
                            <div className="position-relative">
                                <svg className="button-radius-svg tr-corner" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 10H0C5.52285 10 10 5.52285 10 0V10Z" fill="white" /></svg>
                                <Link href="/page-about" className="btns showroom-link">
                                    <h4 className="">Gelecek Diyarbakır</h4>
                                    <i className="deg45 fa-solid fa-arrow-right opacity-50"></i>
                                </Link>
                                <svg className="button-radius-svg bl-corner" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 10H0C5.52285 10 10 5.52285 10 0V10Z" fill="white" /></svg>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide>
                        <img src="assets/images/showroom/gelecek-showroom-diyarbakir.png" alt="showroom" />
                        <div className="showroom-link-wr">
                            <div className="position-relative">
                                <svg className="button-radius-svg tr-corner" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 10H0C5.52285 10 10 5.52285 10 0V10Z" fill="white" /></svg>
                                <Link href="/page-about" className="btns showroom-link">
                                    <h4 className="">Gelecek Diyarbakır</h4>
                                    <i className="deg45 fa-solid fa-arrow-right opacity-50"></i>
                                </Link>
                                <svg className="button-radius-svg bl-corner" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 10H0C5.52285 10 10 5.52285 10 0V10Z" fill="white" /></svg>
                            </div>
                        </div>
                    </SwiperSlide> */}
                    <SwiperSlide>
                        <img src="assets/images/showroom/gelecek-showroom-erzurum.png" alt="showroom" />
                        <div className="showroom-link-wr">
                            <div className="position-relative">
                                <svg className="button-radius-svg tr-corner" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 10H0C5.52285 10 10 5.52285 10 0V10Z" fill="white" /></svg>
                                <Link href="/page-about" className="btns showroom-link">
                                    <h4 className="">Gelecek Erzurum</h4>
                                    <i className="deg45 fa-solid fa-arrow-right opacity-50"></i>
                                </Link>
                                <svg className="button-radius-svg bl-corner" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 10H0C5.52285 10 10 5.52285 10 0V10Z" fill="white" /></svg>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="slider-home-pagination pagination-home-showroom"></div>
            </div>
        </>
    )
}
export default SliderShowroom;
