import React from 'react';
import Link from 'next/link';


function Persona() {
    return (
        <>
            <section className="persona-section pt-50 pb-200">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Sizi anlıyoruz.</h2>
                        <p className="section-desc">Hayalleriniz, beklentileriniz ve öncelikleriniz farklı olabilir. İster başarıyı, ister özgürlüğü, ister güveni arayın…</p>
                        <p className="section-desc">Mercedes her yolculukta sizi anlar ve size özel çözümler sunar.</p>
                    </div>
                    <div className="row g-5">
                        <div className="col-md-8">
                            <div className="persona__item item-one">
                                <Link href="/page-persona-details" className="arry-btn"><i className="fa-solid fa-arrow-right-long" /></Link>
                                <div className="image wow imageUpToDown"><img src="assets/images/persona/persona-1.png" alt="image" /></div>
                                <h4>Başarınızı disiplin, vizyon ve özgüvenle inşa ettiniz. Artık sizi sadece işte değil, yolda da temsil edecek bir güce ihtiyacınız var. Mercedes, profesyonel kimliğinizi prestij ve yenilikle buluşturuyor. Hem güçlü hem de zarif – tıpkı sizin gibi.</h4>
                                <Link data-depth="0.05" href="/page-persona-details" className="btns btn-one d-inline-flex mt-20 wow fadeInUp"
                                data-wow-delay="400ms" data-wow-duration="1500ms">Mercedes’inizi Keşfedin<i className="deg45 fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="persona__item item-two">
                                <Link href="/page-persona-details" className="arry-btn"><i className="fa-solid fa-arrow-right-long" /></Link>
                                <div className="image wow imageRightToLeft"><img src="assets/images/persona/persona-2.png" alt="image" /></div>
                                <h4>Yıllarca çalıştınız, emek verdiniz. Şimdi hayatın tadını çıkarma zamanı. Güven, konfor ve şıklığı bir arada sunan Mercedes, yolculuklarınızı keyfe dönüştürüyor. Her kilometrede huzur, her durakta mutluluk… Artık lüks sizin hakkınız.</h4>
                                <Link data-depth="0.05" href="/page-persona-details" className="btns btn-one d-inline-flex mt-20 wow fadeInUp"
                                data-wow-delay="400ms" data-wow-duration="1500ms">Mercedes’inizi Keşfedin<i className="deg45 fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>

                        <div className="col-md-4"></div>

                        <div className="col-md-8">
                            <div className="persona__item item-three">
                                <Link href="/page-persona-details" className="arry-btn"><i className="fa-solid fa-arrow-right-long" /></Link>
                                <div className="image wow imageLeftToRight"><img src="assets/images/persona/persona-3.png" alt="image" /></div>
                                <h4>Sizin için en önemli şey, sevdiklerinizin güvenliği. Mercedes, üstün teknolojisi ve akıllı güvenlik sistemleriyle yolculuklarınızı huzura çeviriyor. Hem stil sahibi hem de koruyucu – aileniz için en doğru tercih.</h4>
                                <Link data-depth="0.05" href="/page-persona-details" className="btns btn-one d-inline-flex mt-20 wow fadeInUp"
                                data-wow-delay="400ms" data-wow-duration="1500ms">Mercedes’inizi Keşfedin<i className="deg45 fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Persona;
