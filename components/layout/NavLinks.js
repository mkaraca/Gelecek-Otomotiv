import Link from 'next/link';
import React from 'react';

const NavLinks = () => {
    return (

        <ul>
            <li>
                <Link href="/">
                    <span>BİZ</span>
                    <svg class="mx-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1 16.375L10 16.475L9.89 16.375C5.14 12.065 2 9.215 2 6.325C2 4.325 3.5 2.825 5.5 2.825C7.04 2.825 8.54 3.825 9.07 5.185H10.93C11.46 3.825 12.96 2.825 14.5 2.825C16.5 2.825 18 4.325 18 6.325C18 9.215 14.86 12.065 10.1 16.375ZM14.5 0.824997C12.76 0.824997 11.09 1.635 10 2.905C8.91 1.635 7.24 0.824997 5.5 0.824997C2.42 0.824997 0 3.235 0 6.325C0 10.095 3.4 13.185 8.55 17.855L10 19.175L11.45 17.855C16.6 13.185 20 10.095 20 6.325C20 3.235 17.58 0.824997 14.5 0.824997Z" fill="#A40000"/></svg>
                    <span>SİZ</span> 
                    <i className="fa-solid fa-angle-down ms-2"></i>
                </Link>
                <ul className="sub-menu">
                    <li><Link href="/page-about">About Us</Link></li>
                    <li>
                        <Link href="/">Project <i className="fa-solid fa-angle-down ms-2"></i></Link>
                        <ul className="sub-sub-menu">
                            <li><Link href="/page-projects">Project Grid</Link></li>
                            <li><Link href="/page-project-details">Project Details</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/">Team <i className="fa-solid fa-angle-down ms-2"></i></Link>
                        <ul className="sub-sub-menu">
                            <li><Link href="/page-team">Team Grid</Link></li>
                            <li><Link href="/page-team-details">Team Details</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/page-testimonial">Testimonials</Link></li>
                    <li><Link href="/page-faq">FAQ’s</Link></li>
                    <li><Link href="/page-pricing">Pricing Table</Link></li>
                    <li>
                        <Link href="/">Shop<i className="fa-solid fa-angle-down ms-2"></i></Link>
                        <ul className="sub-sub-menu">
                            <li><Link href="/shop-products">Shop Product</Link></li>
                            <li><Link href="/shop-products-sidebar">Products Sidebar</Link></li>
                            <li><Link href="/shop-product-details">Product Details</Link></li>
                            <li><Link href="/shop-checkout">Checkout</Link></li>
                            <li><Link href="/shop-cart">Cart</Link></li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>
                <Link href="/">HİZMETLER<i className="fa-solid fa-angle-down ms-2"></i></Link>
                <ul className="sub-menu">
                    <li><Link href="/page-about">About Us</Link></li>
                    <li>
                        <Link href="/">Project <i className="fa-solid fa-angle-down ms-2"></i></Link>
                        <ul className="sub-sub-menu">
                            <li><Link href="/">Project Grid</Link></li>
                            <li><Link href="/">Project Details</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/">Team <i className="fa-solid fa-angle-down ms-2"></i></Link>
                        <ul className="sub-sub-menu">
                            <li><Link href="/">Team Grid</Link></li>
                            <li><Link href="/">Team Details</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/">Testimonials</Link></li>
                    <li><Link href="/">FAQ’s</Link></li>
                    <li><Link href="/">Pricing Table</Link></li>
                    <li>
                        <Link href="/">Shop <i className="fa-solid fa-angle-down ms-2"></i></Link>
                        <ul className="sub-sub-menu">
                            <li><Link href="/">Shop Product</Link></li>
                            <li><Link href="/">Products Sidebar</Link></li>
                            <li><Link href="/">Product Details</Link></li>
                            <li><Link href="/">Checkout</Link></li>
                            <li><Link href="/">Cart</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/page-404">404 Error</Link></li>
                </ul>
            </li>

            <li>
                <Link href="/">ARAÇLAR<i className="fa-solid fa-angle-down ms-2"></i></Link>
                <ul className="sub-menu">
                    <li><Link href="/">Service Grid</Link></li>
                    <li><Link href="/">Service Details</Link></li>
                </ul>
            </li>

            <li>
                <Link href="/">SATIŞ <i className="fa-solid fa-angle-down ms-2"></i></Link>
                <ul className="sub-menu">
                    <li><Link href="/">Portfolio</Link></li>
                    <li><Link href="/">Portfolio Details</Link></li>
                </ul>
            </li>
            <li><Link href="/">2. EL</Link></li>
        </ul>

    );
};

export default NavLinks;