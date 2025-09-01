import React from "react";
import Layout from "../../components/layout/Layout";
import Slider from "../../components/sections/_alternate/Home10/Slider";
import Feature from "../../components/sections/_alternate/Home10/Feature";
import About from "../../components/sections/_alternate/Home10/About";
import Service from "../../components/sections/_alternate/Home10/Service";
import Work from "../../components/sections/_alternate/Home10/Work";
import Marquee from "../../components/sections/_alternate/Home10/Marquee";
import Portfolio from "../../components/sections/_alternate/Home10/Portfolio";
import Testimonial from "../../components/sections/_alternate/Home10/Testimonial";
import About2 from "../../components/sections/_alternate/Home1/About";
import Video from "../../components/sections/_alternate/Home5/Video2";
import Marquee2 from "../../components/sections/_alternate/Home5/Marquee";
import News from "../../components/sections/_alternate/Home10/News";
import Contact from "../../components/sections/_alternate/Home2/Contact";

export default function Home10() {

    return (
        <>
            <Layout HeaderStyle="three" FooterStyle="three">
                <Slider />
                <Feature />
                <About />
                <Service />
                <Work />
                <Marquee />
                <Portfolio />
                <Testimonial />
                <About2 />
                <Video />
                <Marquee2 />
                <News />
                <Contact />
            </Layout>
        </>
    );
}