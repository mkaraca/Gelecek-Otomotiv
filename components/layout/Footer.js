import React, { useState } from 'react';
import Link from 'next/link';
import SocialLinks from '../elements/SocialLinks';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email');
            return;
        }

        setError('');
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setSuccess('Thanks for subscribing!');
            setEmail('');

            setTimeout(() => setSuccess(''), 3000);
        }, 1500);
    };

    return (
        <footer className="footer-area">
            <div className="container">
                <div className="footer__wrp pt-50 pb-50">
                    {/* Left */}
                    <div className="footer__left pe-5">
                        <Link href="/" className="logo">
                            <img src="assets/images/logo/gelecek-logo-light.png" alt="logo" />
                        </Link>
                        <h4 className="title text-white mt-20">Mercedes-Benz Yetkili Acente ve Yetkili Servisi</h4>
                        <p className="mt-15 lh-sm text-white">‘Mükemmel müşteri deneyimi’ sloganıyla otomobil satın almayı ve bakımını keyfe dönüştüren Türkiye’nin en büyük Mercedes-Benz yıldızına hoş geldiniz!</p>

                        <div className="footer__item-last mt-40">
                            {/* <h4 className="title">Follow Us</h4> */}
                            <SocialLinks />
                        </div>
                    </div>

                    {/* Center */}
                    <div className="footer__center">
                        <div className="footer__item-wrp">
                            {/* Services */}
                            <div className="footer__item">
                                <h4 className="title fs-28">Mercedes-Benz <br />Service24h <br />444 62 44</h4>
                                <h4 className="title fs-28">Mercedes-Benz Guides</h4>

                                <Link href="/" className="d-flex align-items-center gap-3 mt-30">
                                    <img src="assets/images/app/app-store.png" width="153" alt="App Store" />
                                    <img src="assets/images/app/google-play.png" width="135" alt="Google Play" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="footer__right">
                        <div className="footer__item-wrp">
                            {/* Newsletter */}
                            <div className="footer__item-last">
                                <h4 className="title">Sizi Gelişmelerden Haberdar Edelim</h4>
                                {/* <p>Feel free to reach out if you want to collaborate or simply chat.</p> */}

                                <div className="mailUs">
                                    <form onSubmit={handleSubmit}>
                                        <input
                                            type="name"
                                            id="newsletter-name"
                                            name="name"
                                            placeholder="Adınız"
                                        />
                                        <input
                                            type="email"
                                            id="newsletter-email"
                                            name="email"
                                            placeholder="E-posta adresiniz"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <div className="checkbox-wrap d-flex align-items-center mb-3">
                                            <input 
                                                class="me-2"
                                                type="checkbox" 
                                                id="newsletter-consent" 
                                                name="consent"
                                                required
                                            />
                                            <label class="text-white" htmlFor="newsletter-consent">
                                                Kişisel verilerimin işlenmesine izin veriyorum
                                            </label>
                                        </div>

                                        <button type="submit" disabled={loading}>
                                            <span className="">GÖNDER</span>
                                            <i className="fa fa-paper-plane" aria-hidden="true" />
                                        </button>
                                    </form>

                                    {/* Show messages */}
                                    {error && <p className="text-danger mt-2">{error}</p>}
                                    {success && <p className="text-success mt-2">{success}</p>}
                                    {loading && <p className="text-primary mt-2">Sending...</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer__copyright">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between gap-1 gap-sm-4">
                        <p>© 2025 Mercedes Benz Gelecek Otomotiv</p>
                        <div class="d-flex flex-wrap align-items-center justify-content-center gap-3">
                            <Link href="/">Gizlilik Politikası</Link>
                            <Link href="/">Hüküm ve Koşullar</Link>
                            <Link href="/">Bilgi Toplumu Hizmetleri</Link>
                            <Link href="/">Etik İhlal Bildirimi</Link>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
