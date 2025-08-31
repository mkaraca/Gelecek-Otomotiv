import React from 'react';
import Link from 'next/link';

function News() {
    return (
        <>
            <section className="news-section pt-50 pb-50">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Geleceği keşfedin.</h2>
                    </div>
                    <div className="news__items">
                        <div className="news__item news__item-1 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="news__image">
                                <img src="assets/images/news/news-1.png" alt="image" />
                                <img src="assets/images/news/news-1.png" alt="image" />
                            </div>
                            <div className="news__content pt-10">
                                <Link href="/news-details"><h3 className="">Üretici olarak Mercedes-Benz’inizi en iyi biz biliriz</h3></Link>
                                <p>Düzenli bakımlar Mercedes'inizin güvenliğini muhafaza eder, mobil kalmasını ve değerini korumasını sağlar.</p>
                            </div>
                            <Link data-depth="0.05" href="/page-about" className="btns btn-one mt-20 wow fadeInUp"
                                data-wow-delay="400ms" data-wow-duration="1500ms">Bakım & Onarım Hizmetleri<i className="deg45 fa-solid fa-arrow-right"></i></Link>
                        </div>
                        <div className="news__item news__item-2 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="news__image">
                                <img src="assets/images/news/news-2.png" alt="image" />
                                <img src="assets/images/news/news-2.png" alt="image" />
                            </div>
                            <div className="news__content pt-10">
                                <Link href="/news-details"><h3 className="">100 km'ye 5 saniyede çıkabildiğini biliyor muydunuz?</h3></Link>
                                <p>Özgün ve güçlü tasarım diline sahip tamamen elektrikli EQA. EQA, keskin hatlarını, mükemmel oranlarını ve güçlü tasarımını coupé izlenimi veren yan çizgilerle bir araya getirir. EQA çarpıcı özellikleriyle sizi tamamen elektrikli sürüşe geçmeye davet ediyor.</p>
                            </div>
                            <Link data-depth="0.05" href="/page-about" className="btns btn-one mt-20 wow fadeInUp"
                                data-wow-delay="400ms" data-wow-duration="1500ms">EQA’yı Keşfedin<i className="deg45 fa-solid fa-arrow-right"></i></Link>
                        </div>
                        <div className="news__item news__item-3 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="news__image">
                                <img src="assets/images/news/news-3.png" alt="image" />
                                <img src="assets/images/news/news-3.png" alt="image" />
                            </div>
                            <div className="news__content pt-10">
                                <Link href="/news-details"><h3 className="">Yıldızların ışıltısını Gelecek Diyarbakır'da keşfedin</h3></Link>
                                <p>Her ihtiyacınıza özel çözümler sunan uzman ekibimizle, sizi Gelecek Diyarbakır showroomumuza bekliyoruz!</p>
                            </div>
                            <Link data-depth="0.05" href="/page-about" className="btns btn-one mt-20 wow fadeInUp"
                                data-wow-delay="400ms" data-wow-duration="1500ms">Bakım & Onarım Hizmetleri<i className="deg45 fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default News;