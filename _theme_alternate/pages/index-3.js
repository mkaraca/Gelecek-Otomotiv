import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/_alternate/Home3/Slider";
import Services from "../components/sections/_alternate/Home3/Services";
import About from "../components/sections/_alternate/Home3/About";
import Clients from "../components/sections/_alternate/Home3/Clients";
import Chooseus from "../components/sections/_alternate/Home3/ChooseUs";
import Work from "../components/sections/_alternate/Home3/Work";
import Marquee from "../components/sections/_alternate/Home3/Marquee";
import Faqs from "../components/sections/_alternate/Home3/Faqs";
import Achivement from "../components/sections/_alternate/Home3/Achivement";
import Video from "../components/sections/_alternate/Home3/Video";
import Projects from "../components/sections/_alternate/Home3/Projects";
import Testimonial from "../components/sections/_alternate/Home3/Testimonial";
import News from "../components/sections/_alternate/Home3/News";
import Qta from "../components/sections/_alternate/Home3/Qta";

export default function Home3() {

    return (
        <>
            <Layout HeaderStyle="three" FooterStyle="two">
                <Slider />
                <Services />
                <About />
                <Clients />
                <Chooseus />
                <Work />
                <Marquee />
                <Faqs />
                <Achivement />
                <Video />
                <Projects />
                <Testimonial />
                <News />
                <Qta />
            </Layout>
        </>
    );
}