import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,

            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };


    return (
        <>

            <ul>
                <li>
                    <Link href="/page-about">
                        <span>BİZ</span>
                        <svg class="svg-icon mx-2 color-white" width="20" height="20" role="img" aria-label="icon"><use href="#icon-heart"></use></svg>
                        <span>SİZ</span>
                        <i className="fa-solid fa-angle-down" />
                    </Link>
                    <ul className={isActive.key === 1 ? "sub-menu d-block" : "d-none"}>
                        <li><Link href="/">Home Page 1</Link></li>
                        <li><Link href="/index-2">Home Page 2</Link></li>
                        <li><Link href="/index-3">Home Page 3</Link></li>
                        <li><Link href="/index-4">Home Page 4</Link></li>
                        <li><Link href="/index-5">Home Page 5</Link></li>
                    </ul>
                    <div className={isActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(1)}><i className="fa fa-angle-down" /></div>
                </li>
                <li>
                    <Link href="/page-services">HİZMETLER <i className="fa-solid fa-angle-down" /></Link>
                    <ul className={isActive.key === 5 ? "sub-menu d-block" : "d-none"}>
                        <li><Link href="/index-single">Single Page 1</Link></li>
                        <li><Link href="/index-2-single">Single Page 2</Link></li>
                        <li><Link href="/index-3-single">Single Page 3</Link></li>
                        <li><Link href="/index-4-single">Single Page 4</Link></li>
                        <li><Link href="/index-5-single">Single Page 5</Link></li>
                    </ul>
                    <div className={isActive.key === 5 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(5)}><i className="fa fa-angle-down" /></div>
                </li>
                <li>
                    <Link href="/shop-products">ARAÇLAR <i className="fa-solid fa-angle-down" /></Link>
                    <ul className={isActive.key === 6 ? "sub-menu d-block" : "d-none"}>
                        <li><Link href="/index-dark">Dark Page 1</Link></li>
                        <li><Link href="/index-2-dark">Dark Page 2</Link></li>
                        <li><Link href="/index-3-dark">Dark Page 3</Link></li>
                        <li><Link href="/index-4-dark">Dark Page 4</Link></li>
                    </ul>
                    <div className={isActive.key === 6 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(6)}><i className="fa fa-angle-down" /></div>
                </li>
                <li>
                    <Link href="/shop-products">SATIŞ <i className="fa-solid fa-angle-down" /></Link>
                    <ul className={isActive.key === 2 ? "sub-menu d-block" : "d-none"}>
                        <li><Link href="/page-services">Service Grid</Link></li>
                        <li><Link href="/page-service-details">Service Details</Link></li>
                    </ul>
                    <div className={isActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(2)}><i className="fa fa-angle-down" /></div>
                </li>
                <li><Link href="/shop-products">2. EL</Link></li>
                <li><Link href="/page-services">SERVİS</Link></li>
                <li><Link href="/news-grid">BLOG</Link></li>
                <li><Link href="/contact">İLETİŞİM</Link></li>
                

            </ul>

        </>
    );
};

export default MobileMenu;