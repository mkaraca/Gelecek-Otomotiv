import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/Home/Slider";
import SliderShowroom from "../components/sections/Home/SliderShowroom";

export default function Home() {
    return (
        <>
            <Layout>
                <Slider />

                <section className="bg-white pb-50 pt-50">
                    <div class="container">
                        <SliderShowroom />
                    </div>
                </section>

                {/* <About /> */}
                {/* <Feature /> */}
                {/* <Solutions /> */}
                {/* <Pricing /> */}
                {/* <Faqs /> */}
                {/* <Team /> */}
                {/* <Video /> */}
                {/* <Testimonial /> */}
                {/* <About2 /> */}
                {/* <Video2 /> */}
                {/* <Marquee /> */}
                {/* <News /> */}
                {/* <Contact /> */}
            </Layout>
        </>
    );
}