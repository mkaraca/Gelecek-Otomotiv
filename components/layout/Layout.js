import React, { useEffect, useState } from 'react';
import PageHead from './PageHead';
import Header from './Header';
import Footer from './Footer';
import BackToTop from '../elements/BackToTop';
import SideMenu from '../elements/SideMenu';
import ModalImage  from '../elements/ModalImage';

const Layout = ({ children, styleMode }) => {
    const isServer = typeof window === 'undefined';
    const WOW = !isServer ? require('wow.js') : null;
    const [searchToggle, setSearchToggled] = useState(false);
    const [scroll, setScroll] = useState(0)
    const handleToggle = () => setSearchToggled(!searchToggle);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (styleMode === "Dark") {
                document.body.classList.add("dark-mode");
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.body.classList.remove("dark-mode");
                document.documentElement.removeAttribute('data-theme');
            }
        }
    }, [styleMode]);

    useEffect(() => {
        const onScroll = () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };
        document.addEventListener("scroll", onScroll);
        return () => document.removeEventListener("scroll", onScroll); // Clean up event listener
    }, [scroll]);

    const handleOpen = () => {
        document.body.classList.add("mobile-menu-visible");
    }

    const handleRemove = () => {
        document.body.classList.remove("mobile-menu-visible");
    }

    useEffect(() => {
        if (!isServer) {
            new WOW().init();
        }
    }, []);
    
    return (
        <>
            <PageHead />

            <div className="page-wrapper" id="top">
                <Header handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />
                {children}
                <Footer />
            </div>

            <SideMenu />
            <BackToTop />

            <ModalImage />

        </>
    );
};

export default Layout;