import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceGrid from "../components/sections/ServicesGrid";
export default function ServiceGridPage() {

    return (
        <>
            <Layout>
                <PageTitle pageName="Service Grid" />
                <ServiceGrid />
            </Layout>
        </>
    );
}