import Head from 'next/head';
import React from 'react';

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>{headTitle ? headTitle : "Mercedes-Benz Gelecek Otomotiv"}</title>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="/favicon.png" />
                <link rel="icon" href="/favicon-192x192.png" sizes="192x192"/>
                <link rel="apple-touch-icon" href="/favicon-180x180.png"/>
            </Head>
        </>
    );
};

export default PageHead;