import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/_alternate/Home6/Slider";
import Feature from "../components/sections/_alternate/Home6/Feature";
import About from "../components/sections/_alternate/Home6/About";
import Service from "../components/sections/_alternate/Home6/Service";
import Choose from "../components/sections/_alternate/Home6/Choose";
import Video from "../components/sections/_alternate/Home1/Video";
import About2 from "../components/sections/_alternate/Home1/About";
import Team from "../components/sections/_alternate/Home6/Team";
import Testimonial from "../components/sections/_alternate/Home6/Testimonial";
import Brand from "../components/sections/_alternate/Home6/Brand";
import Professional from "../components/sections/_alternate/Home1/Professional";
import Contact from "../components/sections/_alternate/Home6/Contact";
import Blog from "../components/sections/_alternate/Home6/News";

export default function Home6Single() {

    return (
        <>
            <Layout HeaderStyle="twosingle" FooterStyle="six">
                <Slider />
                <Feature />
                <About />
                <Service />
                <Choose />
                <Video />
                <About2 />
                <Team />
                <Testimonial />
                <Brand />
                <Professional />
                <Contact />
                <Blog />
            </Layout>
        </>
    );
}