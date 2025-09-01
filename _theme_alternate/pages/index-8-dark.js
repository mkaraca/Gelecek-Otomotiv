import React from "react";
import Layout from "../../components/layout/Layout";
import Slider from "../../components/sections/_alternate/Home8Dark/Slider";
import About from "../../components/sections/_alternate/Home8Dark/About";
import Marquee from "../../components/sections/_alternate/Home8Dark/Marquee";
import Service from "../../components/sections/_alternate/Home8Dark/Service";
import Funfact from "../../components/sections/_alternate/Home8Dark/Funfact";
import Faqs from "../../components/sections/_alternate/Home8/Faqs";
import Portfolio from "../../components/sections/_alternate/Home8Dark/Portfolio";
import Testimonial from "../../components/sections/_alternate/Home8Dark/Testimonial";
import News from "../../components/sections/_alternate/Home8/News";
import Qta from "../../components/sections/_alternate/Home8/Qta";
import Contact from "../../components/sections/_alternate/Home8Dark/Contact";

export default function Home8Dark() {

    return (
        <>
            <Layout HeaderStyle="fivedark" FooterStyle="sevendark" styleMode="Dark">
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