import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import PricingInner from "../components/sections/PricingInner";
export default function PricingPage() {

    return (
        <>
            <Layout>
                <PageTitle pageName="Pricing" />
                <PricingInner />
            </Layout>
        </>
    );
}