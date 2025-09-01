import React from "react";
import Layout from "../../components/layout/Layout";
import Slider from "../../components/sections/_alternate/Home2Dark/Slider";
import Features from "../../components/sections/_alternate/Home2Dark/Features";
import About from "../../components/sections/_alternate/Home2Dark/About";
import Projects from "../../components/sections/_alternate/Home2Dark/Projects";
import Services from "../../components/sections/_alternate/Home2Dark/Services";
import Pricing from "../../components/sections/_alternate/Home2Dark/Pricing";
import Testimonial from "../../components/sections/_alternate/Home2Dark/Testimonial";
import Funfact from "../../components/sections/_alternate/Home2Dark/Funfact";
import Parallax from "../../components/sections/_alternate/Home2/Parallax";
import Clients from "../../components/sections/_alternate/Home2Dark/Clients";
import News from "../../components/sections/_alternate/Home2/News";
import Contact from "../../components/sections/_alternate/Home2Dark/Contact";

export default function Home2Dark() {

    return (
        <>
            <Layout HeaderStyle="twodark" FooterStyle="twodark" styleMode="Dark">
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