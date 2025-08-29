import React from 'react';
import Link from 'next/link';

const socialLink = [
    { href: "https://instagram.com", icon: "fa-instagram" },
    { href: "https://facebook.com", icon: "fa-facebook" },
    { href: "https://x.com", icon: "fa-x-twitter" },
    { href: "https://youtube.com", icon: "fa-youtube" },
    { href: "https://linkedin.com", icon: "fa-linkedin" },
];

function SocialLinks() {
    return (
        <>

        <div className="socials">
            {socialLink.map((socialLink1, index) => (
            <Link key={index} href={socialLink1.href}>
                <i className={`fa-brands ${socialLink1.icon}`} />
            </Link>
            ))}
        </div>

        </>
    )
}
export default SocialLinks