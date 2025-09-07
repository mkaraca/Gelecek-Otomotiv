import React, { useState } from "react";
import Link from 'next/link';

function HelpSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <section className="help-section pt-30 pb-50">
                <div className="container">
                    <div className="help-section-wr">
                        <div className="section-header">
                            <h2 className="section-title">Size nasıl yardımcı olabiliriz?</h2>
                        </div>
                        <div className="help-items">
                            <Link href="/" className={`help-item ${activeIndex === 1 ? 'active' : ''}`} onMouseEnter={() => setActiveIndex(1)}>
                                <svg class="svg-icon" width="48" height="48" role="img" aria-label="icon"><use href="#icon-car"></use></svg>
                                <h5>Test Sürüşü Randevu</h5>
                            </Link>
                            <Link href="/" className={`help-item ${activeIndex === 2 ? 'active' : ''}`} onMouseEnter={() => setActiveIndex(2)}>
                                <svg class="svg-icon" width="48" height="48" role="img" aria-label="icon"><use href="#icon-service"></use></svg>
                                <h5>Servis Randevu</h5>
                            </Link>
                            <Link href="/" className={`help-item ${activeIndex === 3 ? 'active' : ''}`} onMouseEnter={() => setActiveIndex(3)}>
                                <svg class="svg-icon" width="48" height="48" role="img" aria-label="icon"><use href="#icon-click"></use></svg>
                                <h5>Online Satış</h5>
                            </Link>
                            <Link href="/" className={`help-item ${activeIndex === 4 ? 'active' : ''}`} onMouseEnter={() => setActiveIndex(4)}>
                                <svg class="svg-icon" width="48" height="48" role="img" aria-label="icon"><use href="#icon-call"></use></svg>
                                <h5>Şikayet ve Öneriler</h5>
                            </Link>
                            <Link href="/" className={`help-item ${activeIndex === 5 ? 'active' : ''}`} onMouseEnter={() => setActiveIndex(5)}>
                                <svg class="svg-icon" width="48" height="48" role="img" aria-label="icon"><use href="#icon-insurance"></use></svg>
                                <h5>Sigorta</h5>
                            </Link>
                            <div className="help-section-search">
                                <input
                                    className='help-section-search-input'
                                    type="name"
                                    id="search-help"
                                    name="name"
                                    placeholder="Arayın, bulalım"
                                />
                                <button className='help-section-search-submit' type="submit">
                                    <i className="fa fa-search" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default HelpSection;
