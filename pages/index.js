import React from "react";
import Layout from "../components/layout/Layout";
import SliderMain from "../components/sections/Home/SliderMain";
import SliderShowroom from "../components/sections/Home/SliderShowroom";
import Vehicle from "../components/sections/Home/Vehicle";
import HelpSection from "../components/sections/Home/HelpSection";
import News from "../components/sections/Home/News";
import Funfact from "../components/sections/Home/Funfact";
import Persona from "../components/sections/Home/Persona";
import Choose from "../components/sections/Home/Choose";
import Portfolio from "../components/sections/Home/Portfolio";

export default function Home() {
    return (
        <>
            <Layout>
                <SliderMain />

                <section className="bg-white pb-50 pt-50">
                    <div class="container">
                        <div class="d-flex justify-content-center gap-20">
                            <SliderShowroom />
                            <Vehicle />
                        </div>
                    </div>
                </section>

                <HelpSection />
                <News />
                <Funfact />
                <Persona />

                {/* <Choose /> */}
                {/* <Portfolio /> */}
            </Layout>
        </>
    );
}