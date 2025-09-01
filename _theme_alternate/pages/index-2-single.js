import React from "react";
import Layout from "../../components/layout/Layout";
import Slider from "../../components/sections/_alternate/Home2/Slider";
import Features from "../../components/sections/_alternate/Home2/Features";
import About from "../../components/sections/_alternate/Home2/About";
import Projects from "../../components/sections/_alternate/Home2/Projects";
import Services from "../../components/sections/_alternate/Home2/Services";
import Pricing from "../../components/sections/_alternate/Home2/Pricing";
import Testimonial from "../../components/sections/_alternate/Home2/Testimonial";
import Funfact from "../../components/sections/_alternate/Home2/Funfact";
import Parallax from "../../components/sections/_alternate/Home2/Parallax";
import Clients from "../../components/sections/_alternate/Home2/Clients";
import News from "../../components/sections/_alternate/Home2/News";
import Contact from "../../components/sections/_alternate/Home2/Contact";

export default function Home2Single() {

    return (
        <>
            <Layout HeaderStyle="twosingle" FooterStyle="two">
                <Slider />
                <Features />
                <About />
                <Projects />
                <Services />
                <Pricing />
                <Testimonial />
                <Funfact />
                <Parallax />
                <Clients />
                <News />
                <Contact />
            </Layout>
        </>
    );
}