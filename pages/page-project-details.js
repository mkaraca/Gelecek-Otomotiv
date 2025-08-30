import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ProjectDetails from "../components/sections/ProjectDetails";
export default function ProjectDetailsPage() {

    return (
        <>
            <Layout>
                <PageTitle pageName="Project Details" />
                <ProjectDetails />
            </Layout>
        </>
    );
}