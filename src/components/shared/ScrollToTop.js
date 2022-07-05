import { useRef } from "react"
import styles from '../styles/ScrollToTop.module.css';

const {scrollToTopBtn,showBtn }= styles;

const ScrollToTop = () => {

    const topRef = useRef()
    
    const handleToTop = () => {
        // Scroll back to the top of content
        topRef.current.scrollIntoView();
    };

    return (
        <>
            <div ref={topRef}></div>
            <button onClick={handleToTop}
                type="button"
                className={`${scrollToTopBtn} ${showBtn}`}
                >BACK TO TOP</button>
        </>
    );

};
export default ScrollToTop