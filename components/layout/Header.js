import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import NavLinks from './NavLinks';
import NavLinksSecondary from './NavLinksSecondary';
import MobileMenu from './MobileMenu';
import SocialLinks from '../elements/SocialLinks';
import ModalLogin from '../elements/ModalLogin';

const Header = ({ scroll }) => {
    const router = useRouter();
    const isHomePage = router.pathname === '/';

    const [searchToggle, setSearchToggle] = useState(false);
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);

    const handleToggleSearch = () => setSearchToggle(!searchToggle);
    const handleToggleSidebar = () => setSidebarToggle(!sidebarToggle);
    const handleLoginClick = (e) => {
        e.preventDefault();
        setIsLoginModalOpen(true);
    };
    const handleCloseLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    return (
        <>
            <div className="header-top-area">
                <div className="container">
                    <div className="header-top__wrp">
                        <ul className="header-top__links">
                            <li><Link href="/"><i className="fa-solid fa-envelope-open-text pe-2" />info@gelecek.com</Link></li>
                            <li><Link href="/"><i className="fa-solid fa-phone pe-2" />(0212) 322 80 00</Link></li>
                        </ul>
                        <div className="header-top__socials">
                            <SocialLinks />

                            <a href="#" onClick={handleLoginClick}>
                                <i className="fa-solid fa-arrow-right-to-bracket"></i>
                                <span className="text-white ms-2">Giriş Yap</span>
                            </a>

                            <div className="language-selector">
                                <button className="language-trigger" onClick={(e) => {e.preventDefault();setIsLanguageOpen(!isLanguageOpen);}}>
                                    <i className="fa-solid fa-language"></i>
                                    <span className="ms-2 fw-bold">TR</span>
                                    <i className={`fa-solid fa-angle-down ms-2 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`}></i>
                                </button>
                                {isLanguageOpen && (
                                    <div className="language-dropdown">
                                        <button className="language-option active" onClick={(e) => { e.preventDefault();setIsLanguageOpen(false);}}>
                                            <span className="me-2 fw-bold">TR</span> Türkçe
                                        </button>
                                        <button className="language-option" onClick={(e) => {e.preventDefault();setIsLanguageOpen(false);}}>
                                            <span className="me-2 fw-bold">EN</span> English
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <header className={`header-area${isHomePage ? " header-blur" : " header-three-area"}${scroll ? " menu-fixed" : ""}`}>
                <div className="container">
                    <div className="header__main">
                        <div className="header-block main-menu main-menu-first main-menu-light" style={{ justifyContent:'flex-start'}}>
                            <nav>
                                <NavLinks />
                            </nav>
                        </div>

                        <div className="logo-block">
                            <Link href="/" className="logo">
                                <svg width="280" height="60" role="img" aria-label="Gelecek Otomotiv"><use href="#gelecek-logo-light"></use></svg>
                            </Link>
                        </div>

                        <div className="header-block main-menu main-menu-second main-menu-light" style={{ justifyContent:'flex-end'}}>
                            <nav className="d-none d-md-block"><NavLinksSecondary /></nav>

                            <div className="menu-btns">
                                <button className="color-white d-none d-sm-block">
                                    <svg class="svg-icon" width="24" height="24" role="img" aria-label="icon"><use href="#icon-gift"></use></svg>
                                </button>
                                <button className="color-white d-none d-sm-block">
                                    <svg class="svg-icon" width="32" height="32" role="img" aria-label="icon"><use href="#icon-car"></use></svg>
                                </button>
                                <button className="search-trigger color-white" onClick={handleToggleSearch}>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                                <button className="menubars menubars-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#menubar" onClick={handleToggleSidebar}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <ModalLogin isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />

            <div className={`sidebar-area offcanvas offcanvas-end ${sidebarToggle ? "show" : ""}`} id="menubar">
                <div className="offcanvas-header">
                    <Link href="/" className="logo-white">
                        <svg class="svg-icon" width="280" height="60" role="img" aria-label="Gelecek Otomotiv"><use href="#gelecek-logo-nofill"></use></svg>
                    </Link>
                    <button type="button" className="btn-close" onClick={handleToggleSidebar}>
                        <i className="fa-solid fa-xmark" />
                    </button>
                </div>
                <div className="offcanvas-body sidebar__body">
                    <div className="mobile-menu overflow-hidden mean-container">
                        <div className="mean-bar">
                            <nav className="mean-nav">
                                <MobileMenu />
                            </nav>
                        </div>
                    </div>
                    <div className="sidebar__contact-title d-none d-gelecek-lg pe-4">
                        <h4 className="mb-10">Mercedes-Benz Yetkili Acente ve Yetkili Servisi</h4>
                        <p className="sidebar__text lh-sm">‘Mükemmel müşteri deneyimi’ sloganıyla otomobil satın almayı ve bakımını keyfe dönüştüren Türkiye’nin en büyük Mercedes-Benz yıldızına hoş geldiniz!</p>
                    </div>
                    <div className="sidebar__contact-info d-none d-gelecek-lg mt-30 pe-4">
                        <h4 className="mb-10">İletişim:</h4>
                        <ul>
                            <li><i className="d-inline fa-solid fa-location-dot" /><Link className="d-inline" href="/">Hamidiye Mah. Selçuklu Cad. No:10/H A Blok 34408 Kağıthane/İstanbul</Link></li>
                            <li className="py-1"><i className="fa-solid fa-phone-volume" /><Link href="/tel:+902123228000">(0212) 322 80 00</Link></li>
                            <li><i className="fa-solid fa-paper-plane" /><Link href="/">istanbul@gelecek.com</Link></li>
                        </ul>
                    </div>
                    <div className="sidebar__btns my-5">
                        <Link className="sign-in" href="#" onClick={handleLoginClick}>Giriş Yap</Link>
                        <Link href="#" onClick={handleLoginClick}>Kayıt Ol</Link>
                    </div>
                    <div className="sidebar__socials">
                        <SocialLinks />
                    </div>
                </div>
            </div>

            <div className={`search-wrap ${searchToggle ? 'd-block' : ''}`} >
                <div className="search-inner">
                    <i className="fa-solid fa-xmark search-close" id="search-close" onClick={handleToggleSearch} />
                    <div className="search-cell">
                        <form method="get">
                            <div className="search-field-holder">
                                <input type="search" className="main-search-input" placeholder="Search..." />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className={`offcanvas-backdrop fade ${sidebarToggle ? 'show' : ''}`} onClick={handleToggleSidebar} />

        </>
    );
};

export default Header;
