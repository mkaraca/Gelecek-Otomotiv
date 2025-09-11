import React from "react";
import Layout from "../components/layout/Layout";
import SliderMain from "../components/sections/Home/SliderMain";
import SliderShowroom from "../components/sections/Home/SliderShowroom";
import Vehicle from "../components/sections/Home/Vehicle";
import HelpSection from "../components/sections/Home/HelpSection";
import News from "../components/sections/Home/News";
import Funfact from "../components/sections/Home/Funfact";
import Persona from "../components/sections/Home/Persona";

export default function Home() {
    return (
        <>
            <Layout>
                <SliderMain />

                <section className="bg-white">
                    <div class="showroom-cr">
                        <div class="showroom-ct">
                            <SliderShowroom />
                            <Vehicle />
                        </div>
                    </div>
                </section>

                {/* <HelpSection /> */}
                {/* <News /> */}
                {/* <Funfact /> */}
                {/* <Persona /> */}
            </Layout>
        </>
    );
}