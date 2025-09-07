import React from 'react';
import Link from 'next/link';

const socialLink = [
    { href: "https://www.instagram.com/gelecekotomotiv", icon: "fa-instagram" },
    { href: "https://www.facebook.com/gelecekotomotiv", icon: "fa-facebook" },
    { href: "https://x.com/gelecekotomotiv", icon: "fa-x-twitter" },
    { href: "https://www.youtube.com/user/gelecekotomotiv", icon: "fa-youtube" },
    { href: "https://www.linkedin.com/company/gelecekotomotiv", icon: "fa-linkedin" },
];

function SocialLinks() {
    return (
        <>

        <div className="socials">
            {socialLink.map((socialLink1, index) => (
            <Link key={index} href={socialLink1.href} target="_blank" rel="noopener noreferrer" aria-label={socialLink1.icon}>
                <i className={`fa-brands ${socialLink1.icon}`} />
            </Link>
            ))}
        </div>

        </>
    )
}
export default SocialLinks