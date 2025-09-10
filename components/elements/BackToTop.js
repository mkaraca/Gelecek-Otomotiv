import { useEffect, useState } from "react";

function BackToTop() {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 1000 && !hasScrolled) {
                setHasScrolled(true);
            } else if (window.scrollY <= 1000 && hasScrolled) {
                setHasScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [hasScrolled]);

    return (
        <>
            {hasScrolled && (
                <a className="btn-backToTop show" href="#top"><i className="fa-solid fa-arrow-up"></i></a>
            )}
        </>
    );
}
export default BackToTop;