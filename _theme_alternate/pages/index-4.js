import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/_alternate/Home4/Slider";
import Feature from "../components/sections/_alternate/Home4/Feature";
import Services from "../components/sections/_alternate/Home4/Services";
import Marquee from "../components/sections/_alternate/Home4/Marquee";
import Testimonial from "../components/sections/_alternate/Home4/Testimonial";
import Chooseus from "../components/sections/_alternate/Home4/ChooseUs";
import Portfolio from "../components/sections/_alternate/Home4/Portfolio";
import Faqs from "../components/sections/_alternate/Home4/Faqs";
import Team from "../components/sections/_alternate/Home4/Team";
import Contact from "../components/sections/_alternate/Home4/Contact";
import News from "../components/sections/_alternate/Home4/News";

export default function Home4() {

    return (
        <>
            <Layout HeaderStyle="four" FooterStyle="three">
                <Slider />
                <Feature />
                <Services />
                <Marquee />
                <Testimonial />
                <Chooseus />
                <Portfolio />
                <Faqs />
                <Team />
                <Contact />
                <News />
            </Layout>
        </>
    );
}