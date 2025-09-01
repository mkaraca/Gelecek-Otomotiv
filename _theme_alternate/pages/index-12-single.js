import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/_alternate/Home12/Slider";
import Feature from "../components/sections/_alternate/Home12/Feature";
import Brand from "../components/sections/_alternate/Home12/Brand";
import Choose from "../components/sections/_alternate/Home12/Choose";
import Steps from "../components/sections/_alternate/Home12/Steps";
import Service from "../components/sections/_alternate/Home12/Service";
import Case from "../components/sections/_alternate/Home12/Case";
import Testimonial from "../components/sections/_alternate/Home12/Testimonial";
import Video from "../components/sections/_alternate/Home5/Video";
import News from "../components/sections/_alternate/Home1/News";

export default function Home12Single() {

    return (
        <>
            <Layout HeaderStyle="sixsingle" FooterStyle="three">
                <Slider />
                <Feature />
                <Brand />
                <Choose />
                <Steps />
                <Service />
                <Case />
                <Testimonial />
                <Video />
                <News />
            </Layout>
        </>
    );
}