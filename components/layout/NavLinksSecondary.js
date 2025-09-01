import Link from 'next/link';
import React from 'react';

const NavLinksSecondary = () => {
    return (

        <ul>
            <li><Link href="/page-services">SERVİS</Link></li>
            <li><Link href="/news-grid">BLOG</Link></li>
            <li><Link href="/contact">İLETİŞİM</Link></li>
        </ul>

    );
};

export default NavLinksSecondary;