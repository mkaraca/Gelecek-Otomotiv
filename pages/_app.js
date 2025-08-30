import { useEffect, useState } from "react";
import '../public/assets/css/bootstrap.min.css';
import '../public/assets/css/global.css';
import '../public/assets/css/style.css';
import '../public/assets/css/home.css';
// import 'animate.css';
// import '../public/assets/css/meanmenu.css';
// import "swiper/css/navigation";
// import '../public/assets/css/fontawesome-all.min.css';
import '../public/assets/css/animate.css';

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer); // cleanup
    }, []);

    return (<>
        {!loading ? (
            <Component {...pageProps} />
        ) : (
            <div id="preloader" style={{ backgroundColor:'#000'}}>
                <img src="/Mercedes-Benz-Loader.gif" alt="logo" />
                {/* <div className="animation-preloader">
                    <div className="spinner"></div>
                </div> */}
            </div>
        )}
    </>)
}

export default MyApp
