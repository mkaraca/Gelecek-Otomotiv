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
                            <Link className="pe-0" href="/">
                                <i class="fa-solid fa-language"></i>
                                <span className="text-white ms-2">TR</span><i className="fa-solid fa-angle-down ms-2"></i>
                            </Link>
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
                                <img src="assets/images/logo/gelecek-logo-light.png" alt="logo" />
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
                    <Link href="/" className="logo"><img src="assets/images/logo/gelecek-logo-light.png" alt="logo" /></Link>
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
                    <div className="d-none d-lg-block">
                        <h5 className="text-white mb-10">Mercedes-Benz Yetkili Acente ve Yetkili Servisi</h5>
                        <p className="sidebar__text lh-sm">‘Mükemmel müşteri deneyimi’ sloganıyla otomobil satın almayı ve bakımını keyfe dönüştüren Türkiye’nin en büyük Mercedes-Benz yıldızına hoş geldiniz!</p>
                    </div>
                    <div className="sidebar__contact-info mt-30">
                        <h5 className="text-white mb-10">İletişim:</h5>
                        <ul>
                            <li><i className="d-inline fa-solid fa-location-dot" /><Link className="d-inline" href="/">Hamidiye Mah. Selçuklu Cad. No:10/H A Blok 34408 Kağıthane/İstanbul</Link></li>
                            <li className="py-1"><i className="fa-solid fa-phone-volume" /><Link href="/tel:+902123228000">(0212) 322 80 00</Link></li>
                            <li><i className="fa-solid fa-paper-plane" /><Link href="/">istanbul@gelecek.com</Link></li>
                        </ul>
                    </div>
                    <div className="sidebar__btns my-5">
                        <Link href="/">Kayıt Ol</Link>
                        <Link className="sign-in" href="/">Giriş Yap</Link>
                    </div>
                    <div className="sidebar__socials">
                        <ul>
                            <li>
                                <Link href="/#0">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.76562 0H8.20406C9.50719 0.0371875 10.8041 0.385625 11.9359 1.03531C13.3297 1.82094 14.4756 3.03625 15.1816 4.47188C15.6875 5.49438 15.9603 6.62656 16 7.76562V8.205C15.9647 9.38344 15.6775 10.5553 15.1419 11.6069C14.6209 12.6316 13.8803 13.5447 12.9794 14.2594C12.0306 15.0175 10.9072 15.5569 9.71937 15.8141C9.22219 15.9275 8.71313 15.9788 8.20438 16H7.795C6.40844 15.9609 5.03281 15.5628 3.84875 14.8387C2.44469 13.985 1.3125 12.6919 0.659063 11.1838C0.252187 10.255 0.0365625 9.2475 0 8.23531V7.79406C0.0359375 6.53 0.366875 5.27437 0.976875 4.16594C1.73094 2.78781 2.8975 1.64031 4.28937 0.911563C5.35844 0.34625 6.55844 0.041875 7.76562 0ZM3.40094 3.29594C4.59812 5.03813 5.79531 6.78 6.99188 8.52219C5.79563 9.91344 4.59812 11.3038 3.40219 12.6953C3.6325 12.6966 3.86313 12.695 4.09344 12.6962C4.13844 12.6884 4.20125 12.7166 4.23281 12.6722C5.27312 11.4641 6.3125 10.2553 7.35219 9.04656C8.18937 10.2625 9.02344 11.4809 9.86156 12.6962C10.7741 12.695 11.6866 12.6962 12.5988 12.6956C11.3594 10.8869 10.1119 9.08313 8.87594 7.27219C10.0203 5.94969 11.1578 4.62156 12.2987 3.29625C12.0281 3.29563 11.7578 3.29563 11.4872 3.29625C10.4987 4.44875 9.50437 5.59656 8.51844 6.75094C7.72031 5.60344 6.93437 4.44688 6.14062 3.29625C5.2275 3.29563 4.31437 3.29594 3.40094 3.29594Z" fill="white" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#0">
                                    <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.10223 8.99555V16H1.97333V8.99555H0V6.09778H1.97333V3.89334C1.97333 1.38667 3.46666 0 5.76 0C6.85333 0 8 0.195557 8 0.195557V2.65778H6.73778C5.49334 2.65778 5.10223 3.43111 5.10223 4.22222V6.09778H7.88444L7.44 8.99555H5.10223Z" fill="white" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#0">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.58958 15.9911H0.222698V5.89045H3.58958V15.9911ZM3.92717 1.96389C3.92717 0.897859 3.08323 0.0361424 2.01719 0.000607979C0.933392 -0.0260429 0.0272588 0.826778 0.00060798 1.91058C-0.0260429 2.99438 0.826779 3.90051 1.91058 3.92716C3.01215 3.93605 3.9094 3.06546 3.92717 1.96389ZM15.9467 9.88807C15.9467 6.74327 13.9124 5.78383 12.1801 5.78383C10.963 5.7483 9.81701 6.34351 9.15074 7.35624V5.89932H5.89933V16H9.26622V10.7587C9.26622 10.7054 9.26622 10.6521 9.26622 10.5988C9.26622 10.5988 9.26622 10.5988 9.26622 10.5899C9.19515 9.51495 10.0124 8.58218 11.0874 8.51111C11.9668 8.51111 12.6331 9.07966 12.6331 10.6787V16H16L15.9556 9.89695L15.9467 9.88807Z" fill="white" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#0">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.9466 4.69593C15.8843 3.41522 15.5906 2.27682 14.6563 1.34297C13.7219 0.409114 12.5829 0.11562 11.3014 0.053363C9.97553 -0.0177877 6.01557 -0.0177877 4.69855 0.053363C3.41713 0.11562 2.28699 0.409114 1.34372 1.34297C0.400455 2.27682 0.115684 3.41522 0.0533926 4.69593C-0.0177975 6.02111 -0.0177975 9.97887 0.0533926 11.3041C0.115684 12.5848 0.409354 13.7232 1.34372 14.657C2.28699 15.5909 3.41713 15.8844 4.69855 15.9466C6.02447 16.0178 9.98443 16.0178 11.3014 15.9466C12.5829 15.8844 13.7219 15.5909 14.6563 14.657C15.5906 13.7232 15.8843 12.5848 15.9466 11.3041C16.0178 9.97887 16.0178 6.02112 15.9466 4.70483V4.69593ZM7.99111 12.2201C5.65963 12.2201 3.76419 10.3257 3.76419 7.99555C3.76419 5.66536 5.65963 3.77098 7.99111 3.77098C10.3226 3.77098 12.218 5.66536 12.218 7.99555C12.218 10.3257 10.3226 12.2201 7.99111 12.2201ZM12.9032 3.99332C12.4138 3.99332 12.0133 3.5931 12.0133 3.10394C12.0133 2.61478 12.4049 2.21456 12.9032 2.21456C13.3926 2.21456 13.7931 2.61478 13.7931 3.10394C13.7931 3.5931 13.3926 3.99332 12.9032 3.99332ZM10.8832 7.99555C10.8832 9.58754 9.58399 10.886 7.99111 10.886C6.39823 10.886 5.09901 9.58754 5.09901 7.99555C5.09901 6.40355 6.39823 5.10505 7.99111 5.10505C9.58399 5.10505 10.8832 6.40355 10.8832 7.99555Z" fill="white" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
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
