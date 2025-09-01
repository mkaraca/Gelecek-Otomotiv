import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import TestimonialInner from "../components/sections/TestimonialInner";
export default function TestimonialPage() {

    return (
        <>
            <Layout>
                <PageTitle pageName="Testimonial" />
                <TestimonialInner />
            </Layout>
        </>
    );
}