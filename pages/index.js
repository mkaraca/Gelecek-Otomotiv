import React from "react";
import Layout from "../components/layout/Layout";
import SliderMain from "../components/sections/Home/SliderMain";
import SliderShowroom from "../components/sections/Home/SliderShowroom";
import Vehicle from "../components/sections/Home/Vehicle";
import HelpSection from "../components/sections/Home/HelpSection";

export default function Home() {
    return (
        <>
            <Layout>
                <SliderMain />

                <section className="bg-white pb-50 pt-50">
                    <div class="container">
                        <div class="d-flex justify-content-center gap-20">
                            <SliderShowroom />
                            <Vehicle />
                        </div>
                    </div>
                </section>

                <HelpSection />
                
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