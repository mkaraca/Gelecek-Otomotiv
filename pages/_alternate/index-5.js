import React from "react";
import Layout from "../../components/layout/Layout";
import Slider from "../../components/sections/_alternate/Home5/Slider";
import About from "../../components/sections/_alternate/Home5/About";
import Feature from "../../components/sections/_alternate/Home5/Feature";
import Solutions from "../../components/sections/_alternate/Home5/Solutions";
import Pricing from "../../components/sections/_alternate/Home5/Pricing";
import Faqs from "../../components/sections/_alternate/Home5/Faqs";
import Team from "../../components/sections/_alternate/Home5/Team";
import Video from "../../components/sections/_alternate/Home5/Video";
import Testimonial from "../../components/sections/_alternate/Home5/Testimonial";
import About2 from "../../components/sections/_alternate/Home5/About2";
import Video2 from "../../components/sections/_alternate/Home5/Video2";
import Marquee from "../../components/sections/_alternate/Home5/Marquee";
import News from "../../components/sections/_alternate/Home5/News";
import Contact from "../../components/sections/_alternate/Home2/Contact";

export default function Home5() {
    return (
        <>
            <Layout HeaderStyle="eight" FooterStyle="three">
                <Slider />
                <About />
                <Feature />
                <Solutions />
                <Pricing />
                <Faqs />
                <Team />
                <Video />
                <Testimonial />
                <About2 />
                <Video2 />
                <Marquee />
                <News />
                <Contact />
            </Layout>
        </>
    );
}