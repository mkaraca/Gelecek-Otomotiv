import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ShopProduct from "../components/sections/ShopProduct";
export default function PageShopProduct() {

    return (
        <>
            <Layout>
                <PageTitle pageName="Shop" />
                <ShopProduct />
            </Layout>
        </>
    );
}