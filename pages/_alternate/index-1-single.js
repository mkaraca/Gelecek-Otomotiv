import React from "react";
import Layout from "../../components/layout/Layout";
import Slider from "../../components/sections/_alternate/Home1/Slider";
import Features from "../../components/sections/_alternate/Home1/Features";
import Consult from "../../components/sections/_alternate/Home1/Consult";
import HzAccordion from "../../components/sections/_alternate/Home1/HzAccordion";
import Professional from "../../components/sections/_alternate/Home1/Professional";
import ChooseUs from "../../components/sections/_alternate/Home1/ChooseUs";
import Video from "../../components/sections/_alternate/Home1/Video";
import About from "../../components/sections/_alternate/Home1/About";
import Team from "../../components/sections/_alternate/Home1/Team";
import Faqs from "../../components/sections/_alternate/Home1/Faqs";
import Brand from "../../components/sections/_alternate/Home1/Brand";
import Contact from "../../components/sections/_alternate/Home1/Contact";
import News from "../../components/sections/_alternate/Home1/News";

export default function Home1Single() {

    return (
        <>
            <Layout HeaderStyle="single">
                <Slider />
                <Features />
                <Consult />
                <HzAccordion />
                <Professional />
                <ChooseUs />
                <Video />
                <About />
                <Team />
                <Faqs />
                <Brand />
                <Contact />
                <News />
            </Layout>
        </>
    );
}