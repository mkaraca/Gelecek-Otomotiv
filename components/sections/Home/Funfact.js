import React from "react";
import CounterUp from '../../elements/CounterUp';

function Funfact() {
    return (
        <>
            <section className="funfact-section pt-50 pb-50">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Biz kimiz?</h2>
                        <p className="section-desc">‘Mükemmel Müşteri Deneyimi’ sloganıyla otomobil satın almayı ve bakımını keyfe dönüştüren Türkiye’nin en büyük Mercedes-Benz yıldızına hoş geldiniz!</p>
                    </div>
                    <div className="funfact-items">
                        <div className="funfact__item">
                            <h3><span className="count"><CounterUp end={25} /></span>+</h3>
                            <h5 className="color-light wow splt-txt" data-splitting>Yıllık Tecrübe</h5>
                        </div>
                        <div className="funfact__item">
                            <h3><span className="count"><CounterUp end={50} /> bin+</span></h3>
                            <h5 className="color-light wow splt-txt" data-splitting>Metrekare Alan</h5>
                        </div>
                        <div className="funfact__item">
                            <h3><span className="count"><CounterUp end={200} /></span>+</h3>
                            <h5 className="color-light wow splt-txt" data-splitting>Uzman Personel</h5>
                        </div>
                        <div className="funfact__item">
                            <h3><span className="count"><CounterUp end={100} /></span>%</h3>
                            <h5 className="color-light wow splt-txt" data-splitting>Müşteri Memnuniyeti</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Funfact
