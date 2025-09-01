import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import About from "../components/sections/Home/About";
export default function AboutUS() {

    return (
        <>
            <Layout>
                <PageTitle pageName="About Us" />
                <About />
            </Layout>
        </>
    );
}