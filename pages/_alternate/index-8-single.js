import React from "react";
import Layout from "../../components/layout/Layout";
import Slider from "../../components/sections/_alternate/Home8/Slider";
import About from "../../components/sections/_alternate/Home8/About";
import Marquee from "../../components/sections/_alternate/Home8/Marquee";
import Service from "../../components/sections/_alternate/Home8/Service";
import Funfact from "../../components/sections/_alternate/Home8/Funfact";
import Faqs from "../../components/sections/_alternate/Home8/Faqs";
import Portfolio from "../../components/sections/_alternate/Home8/Portfolio";
import Testimonial from "../../components/sections/_alternate/Home8/Testimonial";
import News from "../../components/sections/_alternate/Home8/News";
import Qta from "../../components/sections/_alternate/Home8/Qta";
import Contact from "../../components/sections/_alternate/Home8/Contact";

export default function Home8Single() {

    return (
        <>
            <Layout HeaderStyle="fivesingle" FooterStyle="seven">
                <Slider />
                <About />
                <Marquee />
                <Service />
                <Funfact />
                <Faqs />
                <Portfolio />
                <Testimonial />
                <News />
                <Qta />
                <Contact />
            </Layout>
        </>
    );
}