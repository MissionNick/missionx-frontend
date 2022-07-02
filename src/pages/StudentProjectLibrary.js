import {useRef } from 'react'

import Footer from "../components/shared/Footer"
import Navbar from "../components/shared/Navbar"
import Home from "../components/ProjectLibrary/Home"
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '../components/shared/Fallback'
import { errorHandler } from '../components/shared/ErrorHandler'

import styles from "../components/styles/ProjectLibrary.module.css";


function StudentProjectLibrary() {

    const contentRef = useRef()
    
    function handleBackClick() {
        // Scroll back to the top of content
        contentRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    
    return (
        <ErrorBoundary>
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
        </ErrorBoundary>
    )
}

export default StudentProjectLibrary;