import Link from 'next/link';

function SideMenu() {
    return (
        <>
            <div className="sidemenu-block">
                <Link href="/" className="sidemenu-item">
                    <svg class="svg-icon" width="48" height="48" role="img" aria-label="icon"><use href="#icon-call"></use></svg>
                    <div className="sidemenu-title"><h5>Şikayet ve Öneriler</h5></div>
                </Link>
                <Link href="/" className="sidemenu-item">
                    <svg class="svg-icon" width="48" height="48" role="img" aria-label="icon"><use href="#icon-car"></use></svg>
                    <div className="sidemenu-title"><h5>Test Sürüşü Randevu</h5></div>
                </Link>
                <Link href="/" className="sidemenu-item">
                    <svg class="svg-icon" width="48" height="48" role="img" aria-label="icon"><use href="#icon-click"></use></svg>
                    <div className="sidemenu-title"><h5>Online Satış</h5></div>
                </Link>
                <Link href="/" className="sidemenu-item">
                    <svg class="svg-icon" width="48" height="48" role="img" aria-label="icon"><use href="#icon-service"></use></svg>
                    <div className="sidemenu-title"><h5>Servis Randevu</h5></div>
                </Link>
            </div>
        </>
    );
}
export default SideMenu;