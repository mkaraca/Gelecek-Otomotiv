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
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h4>Giriş Yap</h4>
                    <button className="close-btn" onClick={onClose}>
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
                        <button type="submit" className="btn-primary w-100">Giriş Yap</button>
                    </form>
                    <div className="register-link">
                        Hesabınız yok mu?{' '}
                        <Link href="/kayit-ol" className="text-primary">
                            Hemen Kayıt Olun
                        </Link>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 9999;
                    padding: 20px;
                }
                .modal-content {
                    background: white;
                    padding: 30px;
                    border-radius: 8px;
                    width: 100%;
                    max-width: 450px;
                    position: relative;
                }
                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 25px;
                }
                .modal-header h4 {
                    margin: 0;
                    font-size: 24px;
                    font-weight: 600;
                    color: #333;
                }
                .close-btn {
                    background: none;
                    border: none;
                    font-size: 24px;
                    cursor: pointer;
                    color: #666;
                    padding: 5px;
                    line-height: 1;
                }
                .form-group {
                    margin-bottom: 20px;
                }
                .form-group label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 500;
                    color: #444;
                }
                .form-group input {
                    width: 100%;
                    padding: 12px 15px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    font-size: 14px;
                }
                .form-options {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 15px 0 25px;
                    font-size: 14px;
                }
                .checkbox-container {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    position: relative;
                    padding-left: 30px;
                    user-select: none;
                }
                .checkbox-container input {
                    position: absolute;
                    opacity: 0;
                    cursor: pointer;
                    height: 0;
                    width: 0;
                }
                .checkmark {
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 20px;
                    width: 20px;
                    background-color: #f5f5f5;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                }
                .checkbox-container:hover input ~ .checkmark {
                    background-color: #f0f0f0;
                }
                .checkbox-container input:checked ~ .checkmark {
                    background-color: #A5875A;
                    border-color: #A5875A;
                }
                .checkmark:after {
                    content: "";
                    position: absolute;
                    display: none;
                }
                .checkbox-container input:checked ~ .checkmark:after {
                    display: block;
                }
                .checkbox-container .checkmark:after {
                    left: 7px;
                    top: 3px;
                    width: 5px;
                    height: 10px;
                    border: solid white;
                    border-width: 0 2px 2px 0;
                    transform: rotate(45deg);
                }
                .forgot-password {
                    color: #A5875A;
                    text-decoration: none;
                }
                .forgot-password:hover {
                    text-decoration: underline;
                }
                .register-link {
                    text-align: center;
                    margin-top: 20px;
                    font-size: 14px;
                    color: #666;
                }
                .register-link a {
                    font-weight: 500;
                    text-decoration: none;
                }
                .register-link a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
};

export default ModalLogin;