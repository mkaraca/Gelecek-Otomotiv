import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/_alternate/Home9/Slider";
import Feature from "../components/sections/_alternate/Home9/Feature";
import Video from "../components/sections/_alternate/Home9/Video";
import About from "../components/sections/_alternate/Home9/About";
import Service from "../components/sections/_alternate/Home9/Service";
import Video2 from "../components/sections/_alternate/Home9/Video2";
import Brand from "../components/sections/_alternate/Home9/Brand";
import Marquee from "../components/sections/_alternate/Home9/Marquee";
import Projects from "../components/sections/_alternate/Home2/Projects";
import Pricing from "../components/sections/_alternate/Home9/Pricing";
import Faqs from "../components/sections/_alternate/Home9/Faqs";
import Testimonial from "../components/sections/_alternate/Home9/Testimonial";
import Video3 from "../components/sections/_alternate/Home5/Video";
import News from "../components/sections/_alternate/Home1/News";
import Contact from "../components/sections/_alternate/Home9/Contact";

export default function Home9() {

    return (
        <>
            <Layout HeaderStyle="seven">
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