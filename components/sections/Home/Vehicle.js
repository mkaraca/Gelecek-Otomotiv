import React, { useState } from "react";
import Link from 'next/link';


function Vehicle() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <section className="vehicle-block">
                {/* <div className="vehicle-item wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms"> */}
                <div className="vehicle-item">
                    <Link href="/page-vehicles" className={`vehicle-link ${activeIndex === 1 ? 'active' : ''}`} onMouseEnter={() => setActiveIndex(1)}>
                        <img src="assets/images/vehicle/mbn-otomobil.png" alt="vehicle" />
                        <h4 className="">Otomobil</h4>
                    </Link>
                </div>
                <div className="vehicle-item">
                    <Link href="/page-vehicles" className={`vehicle-link ${activeIndex === 2 ? 'active' : ''}`} onMouseEnter={() => setActiveIndex(2)}>
                        <img src="assets/images/vehicle/mbn-ticari.png" alt="vehicle" />
                        <h4 className="">Hafif Ticari Araç</h4>
                    </Link>
                </div>
                <div className="vehicle-item">
                    <Link href="/page-vehicles" className={`vehicle-link ${activeIndex === 3 ? 'active' : ''}`} onMouseEnter={() => setActiveIndex(3)}>
                        <img src="assets/images/vehicle/mbn-kamyon.png" alt="vehicle" />
                        <h4 className="">Kamyon</h4>
                    </Link>
                </div>
                <div className="vehicle-item">
                    <Link href="/page-vehicles" className={`vehicle-link ${activeIndex === 4 ? 'active' : ''}`} onMouseEnter={() => setActiveIndex(4)}>
                        <img src="assets/images/vehicle/mbn-otobus.png" alt="vehicle" />
                        <h4 className="">Otobüs</h4>
                    </Link>
                </div>
            </section>
        </>
    )
}
export default Vehicle;
