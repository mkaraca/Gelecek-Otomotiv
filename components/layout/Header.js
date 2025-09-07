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
            <div className="header-top-area d-none d-lg-block">
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
                        <div className="header-block main-menu main-menu-light" style={{ justifyContent:'flex-start'}}>
                            <nav>
                                <NavLinks />
                            </nav>
                        </div>

                        <div className="logo-block">
                            <Link href="/" className="logo">
                                <svg width="280" height="60" role="img" aria-label="Gelecek Otomotiv"><use href="#gelecek-logo-light"></use></svg>
                            </Link>
                        </div>

                        <div className="header-block main-menu main-menu-light" style={{ justifyContent:'flex-end'}}>
                            <nav><NavLinksSecondary /></nav>

                            <div className="menu-btns light">
                                <button className="d-none d-lg-block">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 11.5V19.5C4 20.0304 4.21071 20.5391 4.58579 20.9142C4.96086 21.2893 5.46957 21.5 6 21.5H18C18.5304 21.5 19.0391 21.2893 19.4142 20.9142C19.7893 20.5391 20 20.0304 20 19.5V11.5" stroke="#A5875A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 6C12 5.07174 11.6313 4.1815 10.9749 3.52513C10.3185 2.86875 9.42826 2.5 8.5 2.5C7.83696 2.5 7.20107 2.76339 6.73223 3.23223C6.26339 3.70107 6 4.33696 6 5C6 5.66304 6.26339 6.29893 6.73223 6.76777C7.20107 7.23661 7.83696 7.5 8.5 7.5H12M12 6V7.5M12 6C12 5.07174 12.3687 4.1815 13.0251 3.52513C13.6815 2.86875 14.5717 2.5 15.5 2.5C16.163 2.5 16.7989 2.76339 17.2678 3.23223C17.7366 3.70107 18 4.33696 18 5C18 5.3283 17.9353 5.65339 17.8097 5.95671C17.6841 6.26002 17.4999 6.53562 17.2678 6.76777C17.0356 6.99991 16.76 7.18406 16.4567 7.3097C16.1534 7.43534 15.8283 7.5 15.5 7.5H12" stroke="#A5875A" stroke-width="2" stroke-linejoin="round"/><path d="M12 11.5V21.5M3 7.5H21V11.5H3V7.5Z" stroke="#A5875A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                </button>
                                <button className="d-none d-lg-block">
                                    <svg width="31" height="12" viewBox="0 0 31 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1627 0.000125838C9.32789 -0.00514134 7.26125 0.154538 4.85608 0.555259C4.5722 0.598228 1.83709 2.28629 1.09969 3.45137C0.362303 4.61653 0.110058 6.83436 0.110058 6.83436C-0.0890218 7.7426 0.0319123 9.24381 0.0874472 9.38977C0.162391 9.7058 0.585788 9.97103 1.31299 10.1628C1.3978 8.70344 2.51555 7.56629 3.86709 7.56448C5.28217 7.56448 6.42925 8.80574 6.42925 10.3367C6.42834 10.4589 6.41995 10.581 6.40414 10.7021C6.44194 10.7026 6.48485 10.7037 6.52072 10.7041L21.8467 10.8421C21.8176 10.6754 21.8028 10.5063 21.8023 10.3367C21.8023 8.80574 22.9495 7.56448 24.3645 7.56448C25.7796 7.56448 26.9266 8.80574 26.9266 10.3367C26.9266 10.5216 26.9096 10.7061 26.8756 10.8872L30.8589 10.9231C30.9433 9.34209 31.2983 7.68168 30.409 6.29904C30.0595 5.75569 28.3637 4.7717 24.0657 4.03555C21.8451 2.82895 19.6778 1.46087 17.3176 0.676889C15.4978 0.286355 13.5218 0.00684842 11.1627 0.000125838ZM10.0611 0.830677C10.4453 0.833726 10.7977 0.850775 11.0869 0.886814L11.5536 4.23785C8.89988 3.88488 6.19571 3.56815 4.76622 2.33196C4.78863 1.95078 5.27609 1.39898 5.82349 1.18801C6.13351 1.06853 8.39635 0.817509 10.0612 0.830677H10.0611ZM12.279 0.854794C13.8811 0.873091 16.2524 1.04122 17.8839 1.82091C18.6654 2.21248 20.1369 3.12897 21.121 3.93817L20.7142 4.6683C18.0428 4.53801 14.4825 4.37701 13.0213 4.19841L12.279 0.854794ZM3.86709 8.67336C3.45937 8.67336 3.06835 8.8486 2.78005 9.16054C2.49175 9.47247 2.32979 9.89554 2.32979 10.3367C2.32979 10.7778 2.49175 11.2009 2.78005 11.5128C3.06835 11.8248 3.45937 12 3.86709 12C4.27481 12 4.66582 11.8248 4.95412 11.5128C5.24242 11.2009 5.40439 10.7778 5.40439 10.3367C5.40439 9.89554 5.24242 9.47247 4.95412 9.16054C4.66582 8.8486 4.27481 8.67336 3.86709 8.67336ZM24.3644 8.67336C23.9567 8.67336 23.5657 8.8486 23.2774 9.16054C22.9891 9.47247 22.8271 9.89554 22.8271 10.3367C22.8271 10.7778 22.9891 11.2009 23.2774 11.5128C23.5657 11.8248 23.9567 12 24.3644 12C24.7721 12 25.1631 11.8248 25.4514 11.5128C25.7397 11.2009 25.9017 10.7778 25.9017 10.3367C25.9017 9.89554 25.7397 9.47247 25.4514 9.16054C25.1631 8.8486 24.7721 8.67336 24.3644 8.67336Z" fill="#A5875A"/></svg>
                                </button>
                                <button className="search-trigger d-none d-lg-block" onClick={handleToggleSearch}>
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
                    <div className="d-none d-lg-block pe-4">
                        <h4 className="text-white mb-10">Mercedes-Benz Yetkili Acente ve Yetkili Servisi</h4>
                        <p className="sidebar__text lh-sm">‘Mükemmel müşteri deneyimi’ sloganıyla otomobil satın almayı ve bakımını keyfe dönüştüren Türkiye’nin en büyük Mercedes-Benz yıldızına hoş geldiniz!</p>
                    </div>
                    <div className="sidebar__contact-info mt-30 pe-4">
                        <h4 className="text-white mb-10">İletişim:</h4>
                        <ul>
                            <li><i className="d-inline fa-solid fa-location-dot" /><Link className="d-inline" href="/">Hamidiye Mah. Selçuklu Cad. No:10/H A Blok 34408 Kağıthane/İstanbul</Link></li>
                            <li className="py-1"><i className="fa-solid fa-phone-volume" /><Link href="/tel:+902123228000">(0212) 322 80 00</Link></li>
                            <li><i className="fa-solid fa-paper-plane" /><Link href="/">istanbul@gelecek.com</Link></li>
                        </ul>
                    </div>
                    <div className="sidebar__btns my-5">
                        <Link href="#" onClick={handleLoginClick}>Kayıt Ol</Link>
                        <Link className="sign-in" href="#" onClick={handleLoginClick}>Giriş Yap</Link>
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
