import React from "react";
import Layout from "../../components/layout/Layout";
import Slider from "../../components/sections/_alternate/Home6Dark/Slider";
import Feature from "../../components/sections/_alternate/Home6Dark/Feature";
import About from "../../components/sections/_alternate/Home6Dark/About";
import Service from "../../components/sections/_alternate/Home6Dark/Service";
import Choose from "../../components/sections/_alternate/Home6Dark/Choose";
import Video from "../../components/sections/_alternate/Home1Dark/Video";
import About2 from "../../components/sections/_alternate/Home1Dark/About";
import Team from "../../components/sections/_alternate/Home6Dark/Team";
import Testimonial from "../../components/sections/_alternate/Home6Dark/Testimonial";
import Brand from "../../components/sections/_alternate/Home6Dark/Brand";
import Professional from "../../components/sections/_alternate/Home1Dark/Professional";
import Contact from "../../components/sections/_alternate/Home6Dark/Contact";
import Blog from "../../components/sections/_alternate/Home6/News";

export default function Home6Dark() {

    return (
        <>
            <Layout HeaderStyle="twodark" FooterStyle="sixdark" styleMode="Dark">
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