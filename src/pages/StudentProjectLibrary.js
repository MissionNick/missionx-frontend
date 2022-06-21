import {useRef } from 'react'

import Footer from "../components/shared/Footer"
import Navbar from "../components/NavbarStudentProjectLibrary"
import Home from "../components/HomeStudentProjectLibrary"

import styles from "../components/styles/StudentProjectLibrary.module.css";


function StudentProjectLibrary() {

    const contentRef = useRef()
    
    function handleBackClick() {
        // Scroll back to the top of content
        contentRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    
    return (
        <div ref={contentRef}>
            <Navbar />
            <Home />
            <div className={styles.btnbacktotop}>
            <button onClick={handleBackClick}
                type="button"
                class="btn btn-warning btn-sm btnbacktotop">BACK TO TOP</button>
                </div>
            <Footer />           
        </div>

    )
}

export default StudentProjectLibrary;