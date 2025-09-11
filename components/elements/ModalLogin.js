import React, { useState } from 'react';
import Link from 'next/link';

const ModalLogin = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt with:', { email, password, rememberMe });
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content modal-login" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="fw-bold">Giriş Yap</h3>
                    <button className="modal-close" onClick={onClose}>
                        <i className="fa-solid fa-xmark" />
                    </button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">E-posta Adresi</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Şifre</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-options">
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <span className="checkmark"></span>
                                Beni Hatırla
                            </label>
                            <Link href="/sifre-sifirla" className="forgot-password">
                                Şifremi Unuttum
                            </Link>
                        </div>
                        <button type="submit" className="modal-cta-button btn-primary w-100">Giriş Yap</button>
                    </form>
                    <div className="register-link">
                        Hesabınız yok mu?{' '}
                        <Link href="/kayit-ol">Hemen Kayıt Olun</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalLogin;