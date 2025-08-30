import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import NewsGrid from "../components/sections/NewsGrid";
import Brand from "../components/sections/Home12/Brand";
export default function NewsDetails() {

    return (
        <>
            <Layout>
                <PageTitle pageName="News Grid" />
                <NewsGrid />
                <Brand />
            </Layout>
        </>
    );
}