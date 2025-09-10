import Link from 'next/link';
import React from 'react';

const NavLinks = () => {
    return (

        <ul>
            <li>
                <Link href="/page-about">
                    <span>BİZ</span>
                    <svg class="svg-icon mx-2 color-red" width="20" height="20" role="img" aria-label="icon"><use href="#icon-heart"></use></svg>
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
                <Link href="/page-services">HİZMETLER<i className="fa-solid fa-angle-down ms-2"></i></Link>
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
                <Link href="/shop-products">ARAÇLAR<i className="fa-solid fa-angle-down ms-2"></i></Link>
                <ul className="sub-menu">
                    <li><Link href="/">Service Grid</Link></li>
                    <li><Link href="/">Service Details</Link></li>
                </ul>
            </li>

            <li>
                <Link href="/shop-products">SATIŞ <i className="fa-solid fa-angle-down ms-2"></i></Link>
                <ul className="sub-menu">
                    <li><Link href="/">Portfolio</Link></li>
                    <li><Link href="/">Portfolio Details</Link></li>
                </ul>
            </li>
            <li><Link href="/shop-products">2. EL</Link></li>
        </ul>

    );
};

export default NavLinks;