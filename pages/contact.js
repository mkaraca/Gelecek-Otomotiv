import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import Contact from "../components/sections/Home/Contact";

export default function Contactus() {

    return (
        <>
            <Layout>
                <PageTitle pageName="Contact Us" />
                <Contact />
            </Layout>
        </>
    );
}