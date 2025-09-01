import React from "react";
import Layout from "../../components/layout/Layout";
import Slider from "../../components/sections/_alternate/Home13/Slider";
import Service from "../../components/sections/_alternate/Home13/Service";
import About from "../../components/sections/_alternate/Home13/About";
import Solution from "../../components/sections/_alternate/Home13/Solution";
import Pricing from "../../components/sections/_alternate/Home13/Pricing";
import Testimonial from "../../components/sections/_alternate/Home13/Testimonial";
import Team from "../../components/sections/_alternate/Home7/Teams";
import Video from "../../components/sections/_alternate/Home5/Video2";
import About2 from "../../components/sections/_alternate/Home1/About";
import Clients from "../../components/sections/_alternate/Home2/Clients";
import News from "../../components/sections/_alternate/Home2/News";
import Contact from "../../components/sections/_alternate/Home9/Contact";

export default function Home13() {

    return (
        <>
            <Layout HeaderStyle="two">
                <Slider />
                <Service />
                <About />
                <Solution />
                <Pricing />
                <Testimonial />
                <Team />
                <Video />
                <About2 /> 
                <Clients />
                <News />
                <Contact />
            </Layout>
        </>
    );
}