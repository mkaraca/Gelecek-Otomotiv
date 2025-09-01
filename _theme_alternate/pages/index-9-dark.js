import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/_alternate/Home9Dark/Slider";
import Feature from "../components/sections/_alternate/Home9Dark/Feature";
import Video from "../components/sections/_alternate/Home9/Video";
import About from "../components/sections/_alternate/Home9Dark/About";
import Service from "../components/sections/_alternate/Home9Dark/Service";
import Video2 from "../components/sections/_alternate/Home9Dark/Video2";
import Brand from "../components/sections/_alternate/Home9Dark/Brand";
import Marquee from "../components/sections/_alternate/Home9Dark/Marquee";
import Projects from "../components/sections/_alternate/Home2Dark/Projects";
import Pricing from "../components/sections/_alternate/Home9Dark/Pricing";
import Faqs from "../components/sections/_alternate/Home9/Faqs";
import Testimonial from "../components/sections/_alternate/Home9Dark/Testimonial";
import Video3 from "../components/sections/_alternate/Home5/Video";
import News from "../components/sections/_alternate/Home1/News";
import Contact from "../components/sections/_alternate/Home9Dark/Contact";

export default function Home9Dark() {

    return (
        <>
            <Layout HeaderStyle="sevendark" FooterStyle="dark" styleMode="Dark">
                <Slider />
                <Feature />
                <Video />
                <About />
                <Service />
                <Video2 />
                <Brand />
                <Marquee />
                <Projects />
                <Pricing />
                <Faqs />
                <Testimonial />
                <Video3 />
                <News />
                <Contact />
            </Layout>
        </>
    );
}